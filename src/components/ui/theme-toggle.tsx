
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={cn(
        "rounded-full w-9 h-9 transition-all duration-300 ease-in-out relative",
        isLight ? "bg-white hover:bg-gaming-card-hover text-gaming-primary" 
                : "bg-gaming-card hover:bg-gaming-card-hover text-gaming-primary",
        className
      )}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="sr-only">{isLight ? "Switch to dark mode" : "Switch to light mode"}</span>
      <Sun className={cn(
        "h-5 w-5 absolute transition-all duration-300",
        isLight ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
      )} />
      <Moon className={cn(
        "h-5 w-5 absolute transition-all duration-300",
        !isLight ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
      )} />
    </Button>
  );
}
