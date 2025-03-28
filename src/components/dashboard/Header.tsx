
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SearchBar } from "./SearchBar";
import { Bell, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface HeaderProps {
  className?: string;
  userName?: string;
}

export function Header({ className, userName = "Ishmeet" }: HeaderProps) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good morning";
      if (hour < 18) return "Good afternoon";
      return "Good evening";
    };
    
    setGreeting(getGreeting());

    // Update greeting if user stays on the page past a greeting change threshold
    const interval = setInterval(() => {
      const newGreeting = getGreeting();
      if (newGreeting !== greeting) {
        setGreeting(newGreeting);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [greeting]);

  return (
    <header className={`px-6 py-4 flex items-center justify-between bg-gaming-card border-b border-gaming-muted/20 ${className}`}>
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold animate-fade-in">
          <span className="text-gaming-foreground/70">{greeting}, </span>
          <span className="bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
            {userName}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block w-64">
          <SearchBar />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-gaming-muted/10 relative">
            <Bell className="h-5 w-5 text-gaming-foreground" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gaming-accent text-[10px] font-bold text-white">3</span>
          </Button>
          
          
          
          <ThemeToggle />
          
          <Avatar className="h-9 w-9 border-2 border-gaming-primary/30 hover:border-gaming-primary transition-all duration-300">
            <AvatarImage src="/og-image.png" alt={userName} />
            <AvatarFallback className="bg-gaming-primary/10 text-gaming-primary">
              {userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
