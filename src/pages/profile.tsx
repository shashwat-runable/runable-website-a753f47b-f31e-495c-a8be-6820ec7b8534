import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Coffee, 
  Bug, 
  Flame,
  Trophy,
  Zap,
  Calendar,
  GitCommit,
  Clock,
  Target,
  TrendingUp,
  Award,
  BarChart3,
  Brain
} from "lucide-react";
import { authClient } from "@/lib/auth";
import { Navigate, Link } from "react-router-dom";

const funnyStats = {
  bugsCreated: 1337,
  bugsFixed: 42,
  coffeeConsumed: 9001,
  stackOverflowVisits: 420,
  linesDeleted: 15000,
  linesAdded: 50000,
  commitMessages: 666,
  productionDeployments: 13,
  rollbacks: 12,
  weekendCommits: 89
};

const achievements = [
  { 
    name: "Copy-Paste Master",
    desc: "Successfully copied code from Stack Overflow 100 times",
    icon: Trophy,
    rarity: "legendary",
    unlocked: true
  },
  { 
    name: "Bug Whisperer",
    desc: "Created more bugs than you fixed (10:1 ratio)",
    icon: Bug,
    rarity: "rare",
    unlocked: true
  },
  { 
    name: "Caffeine Addict",
    desc: "Consumed over 9000 cups of coffee",
    icon: Coffee,
    rarity: "epic",
    unlocked: true
  },
  { 
    name: "YOLO Pusher",
    desc: "Pushed directly to main on a Friday at 4:59 PM",
    icon: Flame,
    rarity: "legendary",
    unlocked: true
  },
  { 
    name: "Code Janitor",
    desc: "Deleted more code than you wrote",
    icon: Target,
    rarity: "rare",
    unlocked: false
  },
  { 
    name: "Weekend Warrior",
    desc: "Committed code on 50+ weekends",
    icon: Calendar,
    rarity: "epic",
    unlocked: true
  }
];

const recentActivity = [
  { action: "YOLO pushed", repo: "my-cat-stepped-on-keyboard", time: "2 hours ago" },
  { action: "Created oopsie", repo: "todo-app-number-47", time: "5 hours ago" },
  { action: "High fived", repo: "yet-another-framework", time: "1 day ago" },
  { action: "Sporked", repo: "copy-paste-overflow", time: "2 days ago" },
  { action: "Closed oopsie (again)", repo: "works-on-my-machine", time: "3 days ago" }
];

export default function Profile() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Brain className="h-12 w-12 animate-pulse mx-auto text-primary" />
          <p className="text-muted-foreground">Loading your questionable history...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-4xl font-bold text-primary-foreground">
              {session.user.name?.charAt(0).toUpperCase() || "?"}
            </div>
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl font-black">{session.user.name || "Anonymous Coder"}</h1>
              <p className="text-lg text-muted-foreground">{session.user.email}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary">Professional Bug Creator</Badge>
                <Badge className="bg-accent">Coffee Enthusiast</Badge>
                <Badge className="bg-secondary">Stack Overflow Dependent</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Questionable Statistics
                </CardTitle>
                <CardDescription>Your developer journey in numbers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-destructive">
                      <Bug className="h-5 w-5" />
                      <span className="text-sm font-medium">Bugs Created</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.bugsCreated.toLocaleString()}</p>
                    <Progress value={95} className="bg-destructive/20" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <Bug className="h-5 w-5" />
                      <span className="text-sm font-medium">Bugs Fixed</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.bugsFixed}</p>
                    <Progress value={3} className="bg-accent/20" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-secondary">
                      <Coffee className="h-5 w-5" />
                      <span className="text-sm font-medium">Coffee Consumed</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.coffeeConsumed.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Cups (lifetime)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Brain className="h-5 w-5" />
                      <span className="text-sm font-medium">Stack Overflow Visits</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.stackOverflowVisits}</p>
                    <p className="text-xs text-muted-foreground">This week</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm font-medium">Lines Added</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.linesAdded.toLocaleString()}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <TrendingUp className="h-5 w-5 rotate-180" />
                      <span className="text-sm font-medium">Lines Deleted</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.linesDeleted.toLocaleString()}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-destructive">
                      <Flame className="h-5 w-5" />
                      <span className="text-sm font-medium">Production Deploys</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.productionDeployments}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-destructive">
                      <Flame className="h-5 w-5" />
                      <span className="text-sm font-medium">Emergency Rollbacks</span>
                    </div>
                    <p className="text-3xl font-bold">{funnyStats.rollbacks}</p>
                    <p className="text-xs text-muted-foreground">92% success rate! 😅</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements Unlocked
                </CardTitle>
                <CardDescription>Your badges of honor (and shame)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, i) => (
                    <div 
                      key={i} 
                      className={`p-4 border rounded-lg transition-all ${
                        achievement.unlocked 
                          ? "bg-card border-primary/30 hover:border-primary/50" 
                          : "bg-muted/50 border-border opacity-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          achievement.unlocked 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-sm">{achievement.name}</p>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                achievement.rarity === "legendary" ? "border-secondary text-secondary" :
                                achievement.rarity === "epic" ? "border-primary text-primary" :
                                "border-accent text-accent"
                              }`}
                            >
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest shenanigans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                      <GitCommit className="h-4 w-4 text-primary mt-0.5" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span>{" "}
                          <Link to={`/repo/${activity.repo}`} className="text-primary hover:underline font-mono">
                            {activity.repo}
                          </Link>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-2">
                  <Trophy className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="font-bold text-lg">Level 42 Developer</h3>
                  <p className="text-sm text-muted-foreground">
                    The answer to life, the universe, and everything
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level 43</span>
                    <span className="font-semibold">42%</span>
                  </div>
                  <Progress value={42} />
                  <p className="text-xs text-muted-foreground text-center">
                    Only 58 more bugs to go!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Zap className="h-10 w-10 mx-auto text-secondary" />
                <p className="font-medium">Want to boost your stats?</p>
                <Button asChild className="w-full">
                  <Link to="/repos">
                    Browse Repos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
