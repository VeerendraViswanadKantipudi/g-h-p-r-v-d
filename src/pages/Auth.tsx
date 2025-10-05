import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGitHubLogin = async () => {
    setIsLoading(true);
    try {
      // Placeholder for GitHub OAuth
      toast.info("GitHub OAuth will be implemented with backend");
      
      // For now, simulate successful auth
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error("Failed to connect to GitHub");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-background/95">
      <Card className="w-full max-w-md shadow-[var(--shadow-card)]">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-[var(--shadow-glow)]">
            <Github className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">GitHub Dashboard</CardTitle>
          <CardDescription className="text-base">
            Connect your GitHub account to view repositories and manage pull requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleGitHubLogin}
            disabled={isLoading}
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Github className="mr-2 h-5 w-5" />
            {isLoading ? "Connecting..." : "Continue with GitHub"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
