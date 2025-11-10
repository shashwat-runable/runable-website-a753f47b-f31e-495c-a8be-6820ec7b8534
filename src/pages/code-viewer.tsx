import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Copy,
  Download,
  Eye,
  GitFork,
  FileCode,
  Zap,
  AlertCircle,
  ChevronRight,
  Home
} from "lucide-react";

const sampleCode = `// TODO: Refactor this later (Written 3 years ago)
function calculateTotalPrice(items) {
  // I have no idea why this works, but it does
  let total = 0;
  
  // Loop through items (Stack Overflow says this is fine)
  for (let i = 0; i < items.length; i++) {
    // Add price (sometimes it's a string, sometimes it's a number 🤷)
    total = total + parseFloat(items[i].price || 0);
    
    // Apply discount (copied from production, don't touch)
    if (items[i].discount) {
      total = total - (total * items[i].discount / 100);
    }
  }
  
  // Magic number from legacy system (DO NOT CHANGE)
  total = total * 1.0847;
  
  // Round to 2 decimals (found this on Stack Overflow)
  return Math.round(total * 100) / 100;
}

// Test it works (it does, somehow)
const testItems = [
  { price: "19.99", discount: 10 },
  { price: 42 },
  { price: "7.50", discount: 0 }
];

console.log(calculateTotalPrice(testItems)); // ✨ Magic! ✨

// FIXME: This breaks in production on Tuesdays
// UPDATE: Now it also breaks on Thursdays
// UPDATE 2: Actually works fine, but only during full moon
export default calculateTotalPrice;`;

const mockRepo = {
  name: "my-cat-stepped-on-keyboard",
  author: "confused-dev",
  highFives: "42k",
  sporks: "1.2k",
  oopsies: "999+",
  watchers: "5.6k"
};

const funnyTooltips = [
  "This code passes all tests (we have no tests)",
  "Copied from Stack Overflow with love ❤️",
  "Works on my machine™",
  "This is fine 🔥",
  "TODO: Add error handling (maybe next year)",
  "I'll document this tomorrow (3 years ago)"
];

export default function CodeViewer() {
  const { author, repo } = useParams();
  const [copied, setCopied] = useState(false);
  const [randomTooltip] = useState(funnyTooltips[Math.floor(Math.random() * funnyTooltips.length)]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = sampleCode.split('\n');

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/repos" className="hover:text-foreground transition-colors">
              Repos
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/repo/${author}/${repo}`} className="hover:text-foreground transition-colors">
              {author}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{repo}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black mb-2">
                <span className="text-muted-foreground">{author}</span>
                <span className="mx-2">/</span>
                <span className="text-primary">{repo}</span>
              </h1>
              <p className="text-muted-foreground">
                Accidentally discovered a new sorting algorithm when my cat walked on the keyboard
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4 mr-1" />
                Watch
              </Button>
              <Button size="sm" variant="outline">
                <GitFork className="h-4 w-4 mr-1" />
                Spork
              </Button>
              <Button size="sm">
                <Zap className="h-4 w-4 mr-1" />
                High Five
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-sm">
            <div className="flex items-center gap-1">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="font-semibold">{mockRepo.highFives}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{mockRepo.sporks}</span>
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              <span>{mockRepo.oopsies} oopsies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="bg-secondary/5 border-secondary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-secondary">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm font-medium">{randomTooltip}</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg font-mono">index.js</CardTitle>
                  <Badge variant="outline" className="text-xs">JavaScript</Badge>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={handleCopy}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-card border-t">
                <div className="overflow-x-auto">
                  <pre className="font-mono text-sm p-4">
                    <code>
                      {lines.map((line, i) => (
                        <div key={i} className="flex hover:bg-accent/10 transition-colors">
                          <span className="inline-block w-12 text-right pr-4 text-muted-foreground select-none">
                            {i + 1}
                          </span>
                          <span className={`flex-1 ${
                            line.trim().startsWith('//') ? 'text-muted-foreground italic' :
                            line.includes('function') ? 'text-primary font-semibold' :
                            line.includes('const') || line.includes('let') ? 'text-accent' :
                            line.includes('return') || line.includes('export') ? 'text-secondary' :
                            line.includes('for') || line.includes('if') ? 'text-primary' :
                            'text-foreground'
                          }`}>
                            {line || '\n'}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Like what you see?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Give this repo a high five or spork it to add your own questionable code!
                  </p>
                  <div className="flex gap-2">
                    <Button>
                      <Zap className="h-4 w-4 mr-1" />
                      Give a High Five
                    </Button>
                    <Button variant="outline">
                      <GitFork className="h-4 w-4 mr-1" />
                      Spork It
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About this repo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Recent YOLO Pushes</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <div>
                      <p><span className="font-mono">abc1234</span> - Fixed bug (created 3 more)</p>
                      <p className="text-muted-foreground text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5"></div>
                    <div>
                      <p><span className="font-mono">def5678</span> - Changed variable name</p>
                      <p className="text-muted-foreground text-xs">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-1.5"></div>
                    <div>
                      <p><span className="font-mono">ghi9012</span> - idk what this does but it works</p>
                      <p className="text-muted-foreground text-xs">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Languages</h4>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>JavaScript</span>
                      <span className="text-muted-foreground">89.3%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '89.3%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>CSS</span>
                      <span className="text-muted-foreground">7.2%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '7.2%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>HTML</span>
                      <span className="text-muted-foreground">3.5%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: '3.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
