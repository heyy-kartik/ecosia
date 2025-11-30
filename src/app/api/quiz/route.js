import { groqRequest } from "@/lib/groqClient";

export async function POST(req) {
  try {
    const {
      topic,
      difficulty = "medium",
      format = "mcq",
      numQuestions = 5,
    } = await req.json();

    const system = {
      role: "system",
      content:
        "You are an educational content generator. Produce accurate, age-appropriate multiple choice quizzes on climate science. Each question must include the correct answer and 3 distractors. Provide a 1-2 line explanation for the correct answer and a difficulty tag (easy/medium/hard). Return JSON array.",
    };

    const user = {
      role: "user",
      content: `Create ${numQuestions} ${format} questions about "${topic}". Difficulty: ${difficulty}. Return JSON like [{"question":"...","choices":["A","B","C","D"],"answer_index": 2,"explanation":"...","time_estimate_seconds": 60}]`,
    };

    const payload = {
      model: "gpt-4o-mini",
      messages: [system, user],
      temperature: 0.3,
      max_tokens: 1200,
    };

    const data = await groqRequest("/chat/completions", payload);
    const reply = data.choices?.[0]?.message?.content;
    let quiz = null;
    try {
      quiz = JSON.parse(reply);
    } catch (e) {
      quiz = reply;
    }

    return new Response(JSON.stringify({ quiz }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
