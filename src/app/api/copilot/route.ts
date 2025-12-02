import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groqClient";
import { buildLearnerSnapshot } from "@/lib/learner-snapshot";
import type { CopilotPayload, LearnerSnapshot } from "@/types/copilot";

const CACHE_TTL_MS = 1000 * 60 * 5;
const responseCache = new Map<string, { expires: number; data: CopilotPayload }>();

export async function GET(request: NextRequest) {
  return handleCopilotRequest(request);
}

export async function POST(request: NextRequest) {
  return handleCopilotRequest(request);
}

async function handleCopilotRequest(request: NextRequest) {
  const snapshot = buildLearnerSnapshot();
  const { focusArea } = await safeJson(request);
  const cacheKey = JSON.stringify({ focusArea, snapshotSignature: snapshot.totals });

  const cached = responseCache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return NextResponse.json(
      {
        snapshot,
        recommendations: cached.data,
        cached: true,
      },
      { status: 200 }
    );
  }

  const recommendations = await generateRecommendations(snapshot, focusArea);

  responseCache.set(cacheKey, { data: recommendations, expires: Date.now() + CACHE_TTL_MS });

  return NextResponse.json(
    {
      snapshot,
      recommendations,
      cached: false,
    },
    { status: 200 }
  );
}

async function safeJson(request: NextRequest): Promise<{ focusArea?: string }> {
  if (request.method === "GET") {
    const focusArea = request.nextUrl.searchParams.get("focus") ?? undefined;
    return { focusArea };
  }

  try {
    const body = await request.json();
    return { focusArea: body?.focusArea };
  } catch {
    return {};
  }
}

async function generateRecommendations(snapshot: LearnerSnapshot, focusArea?: string): Promise<CopilotPayload> {
  if (!process.env.GROQ_API_KEY) {
    return fallbackRecommendations(snapshot, focusArea);
  }

  const response = await groq("/chat/completions", {
    model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
    temperature: 0.35,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are the Ecosia Personalized Learning Copilot. Given learner stats, return strictly valid JSON with fields summary (string), priorities (array[{title,reason,suggestedResource}]), actions (array[{label,description}]), encouragement (string). Be specific, concise, and actionable.",
      },
      {
        role: "user",
        content: JSON.stringify({
          snapshot,
          focusArea,
        }),
      },
    ],
  });

  const content = response?.choices?.[0]?.message?.content;
  if (!content) {
    return fallbackRecommendations(snapshot, focusArea);
  }

  try {
    return JSON.parse(content) as CopilotPayload;
  } catch {
    return fallbackRecommendations(snapshot, focusArea);
  }
}

function fallbackRecommendations(snapshot: LearnerSnapshot, focusArea?: string): CopilotPayload {
  const headlineFocus = focusArea ?? snapshot.improvementAreas[0] ?? "Renewable energy";

  return {
    summary: `You're on track with ${snapshot.totals.completed} sections completed and ${snapshot.streakDays}-day streak. Let's tighten up ${headlineFocus} next.`,
    priorities: snapshot.focusAreas.slice(0, 3).map((item) => ({
      title: item.title,
      reason: `Progress is ${item.status.toLowerCase()}, finish this to unlock the next module.`,
      suggestedResource: `Review the ${item.type.toLowerCase()} notes from ${item.reviewer || "your mentor"}.`,
    })),
    actions: [
      {
        label: "Deep-dive 20 minutes",
        description: `Schedule a focused block for ${headlineFocus} and jot 2 new insights.`,
      },
      {
        label: "Micro quiz",
        description: "Create three flash questions based on today's review and self-check accuracy.",
      },
      {
        label: "Peer share",
        description: "Summarize one key takeaway in the community chat to reinforce retention.",
      },
    ],
    encouragement: "Keep stacking these small wins! Every log pushes your climate leadership forward.",
  };
}

