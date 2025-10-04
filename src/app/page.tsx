import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Ecosia PCCOE
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            An educational platform providing age-appropriate content tailored to your learning journey
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/content">
              <Button size="lg" variant="outline">Explore Content</Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>🎯 Age-Appropriate Content</CardTitle>
              <CardDescription>
                Content tailored to different age groups: children, teens, and adults
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our platform ensures that every user receives content that matches their age and learning level
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📚 Diverse Categories</CardTitle>
              <CardDescription>
                Wide range of educational topics and subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From science and math to arts and technology, explore various subjects that interest you
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔐 Secure & Private</CardTitle>
              <CardDescription>
                Your data is protected with industry-standard security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We use Clerk Authentication to ensure your account and personal information stay safe
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-6">
            Join our community and get access to personalized educational content
          </p>
          <Link href="/sign-up">
            <Button size="lg">Sign Up Now</Button>
          </Link>
        </div>
      </main>

      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Ecosia PCCOE. Built for educational purposes.</p>
        </div>
      </footer>
    </div>
  );
}

