
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gaming-muted" />
      <Input
        type="search"
        placeholder="Search games, achievements..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gaming-muted/30 bg-gaming-card-hover/50 placeholder:text-gaming-muted/80 focus:border-gaming-primary focus:ring-1 focus:ring-gaming-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-gaming-foreground"
        aria-label="Search games and achievements"
      />
    </div>
  );
}
