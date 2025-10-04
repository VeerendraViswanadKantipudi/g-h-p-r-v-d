import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, GitPullRequest, Star, Eye } from "lucide-react";

// Mock data - will be replaced with GitHub API
const mockRepos = [
  {
    id: 1,
    name: "awesome-project",
    description: "A really awesome project with lots of features",
    stars: 245,
    watchers: 32,
    openPRs: 5,
    language: "TypeScript"
  },
  {
    id: 2,
    name: "api-service",
    description: "RESTful API service built with Node.js",
    stars: 89,
    watchers: 12,
    openPRs: 2,
    language: "JavaScript"
  },
  {
    id: 3,
    name: "mobile-app",
    description: "Cross-platform mobile application",
    stars: 156,
    watchers: 23,
    openPRs: 8,
    language: "React Native"
  }
];

const Dashboard = () => {
  const [selectedRepo, setSelectedRepo] = useState<number | null>(null);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Your Repositories</h1>
          <p className="text-muted-foreground text-lg">
            Manage your GitHub repositories and pull requests
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockRepos.map((repo) => (
            <Card
              key={repo.id}
              className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50"
              onClick={() => setSelectedRepo(repo.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {repo.language}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {repo.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {repo.watchers}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitPullRequest className="w-4 h-4 text-primary" />
                    {repo.openPRs} PRs
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Navigate to PRs page
                  }}
                >
                  View Pull Requests
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
