import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Github, GitPullRequest, MessageSquare, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="inline-block p-4 rounded-3xl bg-primary/10 shadow-[var(--shadow-glow)] mb-4">
            <Github className="w-16 h-16 text-primary" />
          </div>
          
          <h1 className="text-6xl font-bold tracking-tight">
            GitHub Dashboard
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Seamlessly manage your GitHub repositories and pull requests.
            View, track, and comment on PRs all in one place.
          </p>

          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="h-14 px-8 text-lg font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-[var(--shadow-glow)]"
          >
            <Github className="mr-2 h-6 w-6" />
            Get Started
          </Button>

          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GitPullRequest className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">View PRs</h3>
              <p className="text-muted-foreground text-sm">
                Browse all your open pull requests across repositories
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quick Comments</h3>
              <p className="text-muted-foreground text-sm">
                Comment on pull requests with a single click
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fast & Efficient</h3>
              <p className="text-muted-foreground text-sm">
                Built for speed with a modern, intuitive interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
