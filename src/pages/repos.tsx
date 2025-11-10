import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Zap,
  GitFork,
  Eye,
  AlertCircle,
  TrendingUp,
  Flame,
  Clock
} from "lucide-react";

const mockRepos = [
  { 
    id: 1,
    name: "my-cat-stepped-on-keyboard", 
    author: "confused-dev",
    highFives: "42k", 
    sporks: "1.2k",
    oopsies: "999+",
    watchers: "5.6k",
    desc: "Accidentally discovered a new sorting algorithm when my cat walked on the keyboard. It's O(meow) complexity.",
    language: "Python",
    lastYolo: "2 hours ago",
    topics: ["machine-learning", "accidents", "feline-driven-dev"]
  },
  { 
    id: 2,
    name: "todo-app-number-47", 
    author: "serial-starter",
    highFives: "1.2k", 
    sporks: "234",
    oopsies: "47",
    watchers: "890",
    desc: "This time it's different, I promise. Built with the new framework that came out yesterday.",
    language: "TypeScript",
    lastYolo: "3 days ago",
    topics: ["todo", "yet-another", "ambitious"]
  },
  { 
    id: 3,
    name: "yet-another-framework", 
    author: "js-wizard",
    highFives: "999k", 
    sporks: "87k",
    oopsies: "12k",
    watchers: "156k",
    desc: "JavaScript needed one more framework, right? This one is exactly like React but with 3 more letters.",
    language: "JavaScript",
    lastYolo: "5 minutes ago",
    topics: ["framework", "javascript", "why-not"]
  },
  { 
    id: 4,
    name: "copy-paste-overflow", 
    author: "honest-coder",
    highFives: "156k", 
    sporks: "23k",
    oopsies: "5.6k",
    watchers: "67k",
    desc: "All my Stack Overflow answers in one place. 90% of this code I don't understand.",
    language: "Multiple",
    lastYolo: "1 week ago",
    topics: ["stackoverflow", "snippets", "it-works"]
  },
  { 
    id: 5,
    name: "works-on-my-machine", 
    author: "docker-avoider",
    highFives: "88k", 
    sporks: "9.8k",
    oopsies: "888",
    watchers: "34k",
    desc: "Guaranteed to work on exactly one machine in the entire universe. Docker? Never heard of it.",
    language: "Go",
    lastYolo: "4 days ago",
    topics: ["legacy", "mystery", "local-only"]
  },
  { 
    id: 6,
    name: "bug-generator-3000", 
    author: "chaos-engineer",
    highFives: "13k", 
    sporks: "3.4k",
    oopsies: "3000+",
    watchers: "8.9k",
    desc: "For when your code isn't buggy enough. Now with AI-powered bug generation!",
    language: "Rust",
    lastYolo: "12 hours ago",
    topics: ["chaos", "testing", "why"]
  },
  { 
    id: 7,
    name: "commit-message-generator", 
    author: "lazy-genius",
    highFives: "67k", 
    sporks: "12k",
    oopsies: "234",
    watchers: "23k",
    desc: "Never write 'fix stuff' again! Now with AI that generates equally vague but longer commit messages.",
    language: "Python",
    lastYolo: "1 day ago",
    topics: ["tools", "productivity", "questionable"]
  },
  { 
    id: 8,
    name: "infinite-loop-as-a-service", 
    author: "performance-guru",
    highFives: "34k", 
    sporks: "5.6k",
    oopsies: "∞",
    watchers: "12k",
    desc: "Keep your CPU warm with our revolutionary infinite loop technology. Perfect for winter coding sessions.",
    language: "C++",
    lastYolo: "6 hours ago",
    topics: ["performance", "heating", "innovative"]
  },
  { 
    id: 9,
    name: "css-centered-div", 
    author: "frontend-warrior",
    highFives: "234k", 
    sporks: "45k",
    oopsies: "12",
    watchers: "89k",
    desc: "Finally solved the hardest problem in web development. Centered a div on my first try (after 847 attempts).",
    language: "CSS",
    lastYolo: "2 weeks ago",
    topics: ["css", "legendary", "solved"]
  }
];

const languages = ["All", "JavaScript", "Python", "TypeScript", "Go", "Rust", "C++", "CSS"];

export default function Repos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const filteredRepos = mockRepos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         repo.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         repo.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = selectedLanguage === "All" || repo.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Explore Repos 🔍
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover the finest spaghetti code and accidental masterpieces
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for questionable code..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {languages.map((lang) => (
                  <Button
                    key={lang}
                    variant={selectedLanguage === lang ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang)}
                    className="whitespace-nowrap"
                  >
                    {lang}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Flame className="h-4 w-4 text-secondary" />
          <span>Found {filteredRepos.length} hilarious repositories</span>
        </div>

        <div className="space-y-4">
          {filteredRepos.map((repo) => (
            <Card key={repo.id} className="hover:shadow-lg transition-all hover:border-primary/40">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Link to={`/repo/${repo.author}/${repo.name}`}>
                        <CardTitle className="text-xl font-mono text-primary hover:underline">
                          {repo.author} / {repo.name}
                        </CardTitle>
                      </Link>
                    </div>
                    <CardDescription className="text-base">
                      {repo.desc}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.map((topic, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="whitespace-nowrap">
                      <Zap className="h-4 w-4 mr-1" />
                      High Five
                    </Button>
                    <Button size="sm" variant="outline" className="whitespace-nowrap">
                      <GitFork className="h-4 w-4 mr-1" />
                      Spork It
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className={`h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent`}></div>
                    <span className="font-medium">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="font-semibold text-foreground">{repo.highFives}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.sporks}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4" />
                    <span>{repo.oopsies} oopsies</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    <span>{repo.watchers}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>YOLO pushed {repo.lastYolo}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <Card className="p-12">
            <CardContent className="text-center space-y-4">
              <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground" />
              <div>
                <h3 className="text-xl font-semibold mb-2">No repos found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or language filter
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
