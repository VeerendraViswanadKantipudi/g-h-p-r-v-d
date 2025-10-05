import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GitPullRequest, MessageSquare, Calendar } from "lucide-react";
import { toast } from "sonner";

// Mock PR data
const mockPRs = [
  {
    id: 1,
    title: "Add user authentication feature",
    number: 123,
    state: "open",
    author: "developer1",
    createdAt: "2025-01-15",
    comments: 5
  },
  {
    id: 2,
    title: "Fix responsive design issues",
    number: 122,
    state: "open",
    author: "developer2",
    createdAt: "2025-01-14",
    comments: 3
  },
  {
    id: 3,
    title: "Update dependencies to latest versions",
    number: 121,
    state: "open",
    author: "developer3",
    createdAt: "2025-01-13",
    comments: 8
  }
];

const PullRequests = () => {
  const [selectedPR, setSelectedPR] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickComment = async (prId: number) => {
    setIsSubmitting(true);
    try {
      // Placeholder for GitHub API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Comment 'hello world' posted successfully!");
    } catch (error) {
      toast.error("Failed to post comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCustomComment = async () => {
    if (!comment.trim()) {
      toast.error("Please enter a comment");
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Placeholder for GitHub API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Comment posted successfully!");
      setComment("");
    } catch (error) {
      toast.error("Failed to post comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Pull Requests</h1>
          <p className="text-muted-foreground text-lg">
            View and comment on open pull requests
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {mockPRs.map((pr) => (
            <Card
              key={pr.id}
              className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GitPullRequest className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {pr.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        #{pr.number}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-4 text-xs">
                      <span>by {pr.author}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {pr.createdAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        {pr.comments} comments
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleQuickComment(pr.id)}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  size="sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Comment "hello world"
                </Button>
                
                {selectedPR === pr.id ? (
                  <div className="space-y-2 pt-2 border-t">
                    <Textarea
                      placeholder="Write a custom comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="min-h-[100px] resize-none"
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={handleCustomComment}
                        disabled={isSubmitting}
                        className="flex-1"
                        size="sm"
                      >
                        Post Comment
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedPR(null);
                          setComment("");
                        }}
                        variant="outline"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    onClick={() => setSelectedPR(pr.id)}
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    Write Custom Comment
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PullRequests;
