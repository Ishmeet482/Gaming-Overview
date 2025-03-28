
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ChevronRight, Grid2X2, LayoutList, Info } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface GameCardProps {
  title: string;
  image: string;
  description: string;
  releaseDate: string;
  publisher: string;
  category?: string;
}

const gameData: GameCardProps[] = [
  {
    title: "Uncharted 4",
    image: "https://images.alphacoders.com/682/682562.jpg?auto=format&fit=crop",
    description: "In his greatest adventure yet, Nathan Drake must hunt for a legendary treasure while fighting ruthless enemies.",
    releaseDate: "May 10, 2016",
    publisher: "Sony Interactive Entertainment",
    category: "A Thief's End"
  },
  {
    title: "Dishonored",
    image: "https://images7.alphacoders.com/688/688158.jpg?auto=format&fit=crop",
    description: "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge.",
    releaseDate: "Oct 9, 2012",
    publisher: "Bethesda Softworks"
  },
  {
    title: "Red Dead Redemption 2",
    image: "https://images7.alphacoders.com/134/1348883.jpeg?auto=format&fit=crop",
    description: "Experience the epic tale of Arthur Morgan in the wild west.",
    releaseDate: "Oct 26, 2018",
    publisher: "Rockstar Games"
  },
  {
    title: "Ghost of Tsushima",
    image: "https://images.alphacoders.com/136/1369415.png?auto=format&fit=crop",
    description: "A samurai story set in feudal Japan created by Sucker Punch Productions.",
    releaseDate: "Jul 17, 2020",
    publisher: "Sony Interactive Entertainment"
  },
  {
    title: "Cyberpunk 2077",
    image: "https://images.alphacoders.com/133/1337440.jpeg?auto=format&fit=crop",
    description: "An open-world, action-adventure story set in Night City.",
    releaseDate: "Dec 10, 2020",
    publisher: "CD Projekt"
  },
  {
    title: "Detroit Become Human",
    image: "https://images4.alphacoders.com/118/1183796.png?auto=format&fit=crop",
    description: "A gripping narrative-driven game where your choices shape the fate of androids seeking freedom in a futuristic world.",
    releaseDate: "Nov 10, 2020",
    publisher: "Quantica Gaming"
  },
  {
    title: "Days Gone",
    image: "https://images2.alphacoders.com/123/1238170.png?auto=format&fit=crop",
    description: "An open-world survival game set in a post-apocalyptic world overrun by Freakers, where you fight to survive as drifter Deacon St. John.",
    releaseDate: "May 18, 2021",
    publisher: "BEND Studio",
    category: "Action RPG"
  },
  {
    title: "Watch Dogs: Legion",
    image: "https://picfiles.alphacoders.com/369/369469.jpg?auto=format&fit=crop",
    description: "Open-world hacking adventure where you recruit and play as anyone to take back a futuristic London from oppressive forces.",
    releaseDate: "Oct 25, 2021",
    publisher: "Ubisoft",
    category: "RPG"
  },
  {
    title: "God of War Ragnarök",
    image: "https://images2.alphacoders.com/130/1308956.jpeg?auto=format&fit=crop",
    description: "Embark on a mythic journey for answers before Ragnarök arrives.",
    releaseDate: "Nov 9, 2022",
    publisher: "Sony Interactive Entertainment",
    category: "Action-Adventure"
  },
  {
    title: "Little Nightmares II",
    image: "https://images6.alphacoders.com/139/1394182.png?auto=format&fit=crop",
    description: "A dark and eerie adventure where you navigate a twisted world full of nightmares, solving puzzles and escaping terrifying foes.",
    releaseDate: "Sep 6, 2023",
    publisher: "Bandai Namco Entertainment",
    category: "Puzzle-Platformer"
  }
];

function GameCard({ title, image, description, releaseDate, publisher, category }: GameCardProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl shadow-md bg-black text-white">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
        {category && (
          <p className="text-xs text-white/80 mb-1">{category}</p>
        )}
        <h3 className="font-bold text-white mb-2 text-lg md:text-xl">{title}</h3>
        <p className="text-sm text-white/90 mb-4 line-clamp-3">{description}</p>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="rounded-full bg-white/20 hover:bg-white/30 border-none">
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

interface NewGamesProps {
  className?: string;
}

export function NewGames({ className }: NewGamesProps) {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('grid'); // Default to grid view
  const isMobile = useIsMobile();

  const toggleViewMode = () => {
    setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel');
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gaming-foreground">New Games</h2>
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleViewMode}
            className="h-8 w-8 rounded-md"
          >
            {viewMode === 'carousel' ? 
              <Grid2X2 className="h-4 w-4" /> : 
              <LayoutList className="h-4 w-4" />
            }
          </Button>
          <Link to="/games" className="flex items-center text-sm text-gaming-primary hover:text-gaming-primary/90">
            See More <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
      
      {viewMode === 'carousel' ? (
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {gameData.map((game, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-72 md:h-200">
                  <GameCard
                    title={game.title}
                    image={game.image}
                    description={game.description}
                    releaseDate={game.releaseDate}
                    publisher={game.publisher}
                    category={game.category}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <CarouselPrevious className="left-0 lg:-left-12" />
              <CarouselNext className="right-0 lg:-right-12" />
            </>
          )}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          {gameData.map((game, index) => (
            <div key={index} className="h-72 md:h-80">
              <GameCard
                title={game.title}
                image={game.image}
                description={game.description}
                releaseDate={game.releaseDate}
                publisher={game.publisher}
                category={game.category}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
