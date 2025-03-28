
import { Badge } from "@/components/ui/badge";

interface FeaturedGameProps {
  className?: string;
}

export function FeaturedGame({ className }: FeaturedGameProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl bg-gaming-card/90 shadow-lg ${className}`}
      style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.7), transparent), url("https://images5.alphacoders.com/136/1360655.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-gaming-primary/20 text-gaming-primary hover:bg-gaming-primary/30">
                Popular
              </Badge>
              <Badge variant="secondary" className="bg-gaming-secondary/20 text-gaming-secondary hover:bg-gaming-secondary/30">
                Tactical Shooter
              </Badge>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Valorant</h2>
            <p className="text-xs md:text-sm text-white/70">Riot Games · Released June 2020</p>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-white/90 max-w-2xl">
        I've spent over 3000+ hours in Valorant, reaching Ascendant rank, and love playing all agents for the fun and challenge. The mix of strategy, precision, and adaptability keeps every match exciting, making Valorant one of the most rewarding and competitive games out there.
        </p>
      </div>
    </div>
  );
}
