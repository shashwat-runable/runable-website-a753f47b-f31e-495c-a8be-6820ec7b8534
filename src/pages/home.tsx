import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Coffee, 
  Bug, 
  Sparkles, 
  Rocket,
  Brain,
  TrendingUp,
  Zap
} from "lucide-react";
import { siteConfig } from "@/config";
import { authClient } from "@/lib/auth";

const funnyJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "There are 10 types of people: those who understand binary and those who don't.",
  "I would tell you a UDP joke, but you might not get it.",
  "Programming is like a box of chocolates... mostly because I have no idea what I'm doing.",
  "Real programmers count from 0. 💯"
];

const funnyRepos = [
  { name: "my-cat-stepped-on-keyboard", stars: "42k", desc: "Accidentally discovered a new sorting algorithm" },
  { name: "todo-app-number-47", stars: "1.2k", desc: "This time it's different, I promise" },
  { name: "yet-another-framework", stars: "999k", desc: "JavaScript needed one more framework, right?" },
  { name: "copy-paste-overflow", stars: "156k", desc: "All my Stack Overflow answers in one place" },
  { name: "works-on-my-machine", stars: "88k", desc: "Guaranteed to work on exactly one machine" },
  { name: "bug-generator-3000", stars: "13k", desc: "For when your code isn't buggy enough" }
];

export default function Home() {
  const { data: session } = authClient.useSession();
  const randomJoke = funnyJokes[Math.floor(Math.random() * funnyJokes.length)];

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-accent/5 to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4ODg4ODgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0yMCAzNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container relative mx-auto px-4 py-16 sm:py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Where Bugs Become Features ✨</span>
            </div>

            <div className="space-y-4 max-w-3xl">
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {siteConfig.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-foreground/90">
                {siteConfig.tagline}
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {session ? (
                <>
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link to="/repos">
                      <Rocket className="mr-2 h-5 w-5" />
                      Browse Repos
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                    <Link to="/profile">
                      <Brain className="mr-2 h-5 w-5" />
                      My Profile
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link to="/signup">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Start Your Comedy
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                    <Link to="/signin">
                      Sign In
                    </Link>
                  </Button>
                </>
              )}
            </div>

            <Card className="bg-secondary/20 border-secondary/40 max-w-2xl">
              <CardContent className="p-6">
                <p className="text-lg font-medium text-foreground">
                  💡 {randomJoke}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose CodeComedy? 🎭
          </h2>
          <p className="text-lg text-muted-foreground">
            Because your code deserves a laugh track!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Spork It!</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Why fork when you can spork? Clone repos with extra personality and a side of humor.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Coffee className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Track Your Caffeine</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We measure your productivity in cups of coffee and Stack Overflow visits. What else matters?
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Bug className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Oopsies, Not Issues</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Every bug is just a happy little oopsie waiting to become tomorrow's feature.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Trending Hilarity 🔥</h2>
              <p className="text-muted-foreground">Most high-fived repos this week</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/repos">
                <TrendingUp className="mr-2 h-4 w-4" />
                View All
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funnyRepos.map((repo, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg font-mono text-primary">
                        {repo.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 text-secondary fill-secondary" />
                        <span className="font-semibold">{repo.stars}</span>
                        <span>high fives</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{repo.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/30">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to YOLO Push? 🚀</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of developers who've embraced the chaos. Your spaghetti code has never been in better company.
            </p>
            {!session && (
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/signup">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started for Free
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
