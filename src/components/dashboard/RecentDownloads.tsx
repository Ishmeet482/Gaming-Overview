
import { Card } from "@/components/ui/card";
import { Heart, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface GameDownloadProps {
  title: string;
  image: string;
  genre: string;
  playtime?: string;
  timestamp?: string;
  isFavorite?: boolean;
}

const downloadsData: GameDownloadProps[] = [
  {
    title: "Detroit Become Human",
    image: "https://avatarfiles.alphacoders.com/344/344386.jpg?auto=format&fit=crop",
    genre: "Adventure",
    playtime: "34h 20m",
    timestamp: "1 hour 23 min.",
    isFavorite: true
  },
  {
    title: "Days Gone",
    image: "https://mfiles.alphacoders.com/999/999485.jpg?auto=format&fit=crop",
    genre: "Action",
    playtime: "6h 45m",
    timestamp: "1 week ago",
    isFavorite: false
  },
  {
    title: "Valorant",
    image: "https://images8.alphacoders.com/128/1282554.jpg?auto=format&fit=crop",
    genre: "FPS",
    playtime: "68h 15m",
    timestamp: "3 weeks ago",
    isFavorite: true
  }
];

function GameDownload({ title, image, genre, playtime, timestamp, isFavorite = false }: GameDownloadProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gaming-card-hover transition-colors duration-200">
      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gaming-foreground truncate">{title}</h3>
        <div className="flex items-center text-xs text-gaming-muted">
          <span className="truncate">{genre}</span>
        </div>
      </div>
      
      <div className="text-right">
        {timestamp && (
          <div className="flex items-center text-xs text-gaming-muted justify-end mb-1">
            <Clock className="h-3 w-3 mr-1" />
            {timestamp}
          </div>
        )}
        <button 
          onClick={() => setFavorite(!favorite)}
          className="text-gaming-muted hover:text-gaming-accent transition-colors duration-200"
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-all duration-300",
              favorite ? "fill-gaming-accent stroke-gaming-accent" : "fill-transparent stroke-current"
            )} 
          />
        </button>
      </div>
    </div>
  );
}

interface RecentDownloadsProps {
  className?: string;
}

export function RecentDownloads({ className }: RecentDownloadsProps) {
  return (
    <Card className={cn("bg-gaming-card border-gaming-muted/20", className)}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gaming-foreground">Last Downloads</h2>
          <Link to="/downloads" className="flex items-center text-sm text-gaming-primary hover:text-gaming-primary/90">
            See More <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="space-y-1">
          {downloadsData.map((game, index) => (
            <GameDownload
              key={index}
              title={game.title}
              image={game.image}
              genre={game.genre}
              playtime={game.playtime}
              timestamp={game.timestamp}
              isFavorite={game.isFavorite}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
