"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconTrendingUp,
  IconBook,
  IconEye,
  IconCategory,
} from "@tabler/icons-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface User {
  _id: string;
  clerkId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  ageGroup?: string;
  onboardingCompleted: boolean;
}

interface Content {
  _id: string;
  title: string;
  description: string;
  category: string;
  views: number;
  createdAt: string;
}

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user
        const userResponse = await fetch("/api/users");
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);

          // Redirect to onboarding if not completed
          if (!userData.onboardingCompleted) {
            router.push("/onboarding");
            return;
          }

          // Fetch content based on user's age group
          const contentResponse = await fetch(
            `/api/content?ageGroup=${userData.ageGroup}&limit=6`
          );
          if (contentResponse.ok) {
            const contentData = await contentResponse.json();
            setContent(contentData.content);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const totalViews = content.reduce((acc, item) => acc + item.views, 0);
  const uniqueCategories = new Set(content.map((item) => item.category)).size;

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        {/* Breadcrumb */}
        <div className="px-4 lg:px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Welcome Section */}
        <div className="px-4 lg:px-6">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.firstName || "there"}!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s your personalized learning overview
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Age Group</CardDescription>
              <CardTitle className="text-2xl font-semibold capitalize tabular-nums @[250px]/card:text-3xl">
                {user?.ageGroup || "N/A"}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconBook className="size-4" />
                  Active
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 font-medium">
                Your content preference
              </div>
              <div className="text-muted-foreground">
                Curated for your age group
              </div>
            </CardFooter>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Available Content</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {content.length}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconTrendingUp className="size-4" />
                  Updated
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Items for your age group
              </div>
              <div className="text-muted-foreground">Start learning today</div>
            </CardFooter>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Total Views</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {totalViews}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconEye className="size-4" />
                  Engagement
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 font-medium">Content engagement</div>
              <div className="text-muted-foreground">
                Popular content metrics
              </div>
            </CardFooter>
          </Card>

          <Card className="@container/card">
            <CardHeader>
              <CardDescription>Categories</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {uniqueCategories}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconCategory className="size-4" />
                  Diverse
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 font-medium">
                Available categories
              </div>
              <div className="text-muted-foreground">
                Explore different topics
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Recent Content Section */}
        <div className="px-4 lg:px-6">
          <Separator className="my-4" />
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Recent Content</h2>
              <p className="text-sm text-muted-foreground">
                Latest educational content for you
              </p>
            </div>
            <Button variant="outline" onClick={() => router.push("/content")}>
              View All
            </Button>
          </div>

          {content.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No content available yet. Check back soon!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.map((item) => (
                <Card
                  key={item._id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="secondary" className="capitalize">
                        {item.category}
                      </Badge>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <IconEye className="size-4" />
                        {item.views}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
