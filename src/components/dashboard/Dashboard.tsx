
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { FeaturedGame } from "./FeaturedGame";
import { NewGames } from "./NewGames";
import { Statistics } from "./Statistics";
import { RecentDownloads } from "./RecentDownloads";
import { SearchBar } from "./SearchBar";
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

interface DashboardProps {
  page?: string;
}

export function Dashboard({ page = "home" }: DashboardProps) {
  // Ensure proper overflow scrolling on mobile
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in pb-24">
            <div className="xl:col-span-2 space-y-16">
              <FeaturedGame />
              <NewGames />
            </div>
            
            <div className="space-y-8">
              <Statistics />
              <RecentDownloads />
            </div>
          </div>
        );
      case "games":
        return (
          <div className="space-y-8 animate-fade-in pb-24">
            <h1 className="text-2xl md:text-3xl font-bold">Games Library</h1>
            <p className="text-gaming-muted">Browse and discover your next favorite game.</p>
            <NewGames />
          </div>
        );
      case "favorites":
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Favorites</h1>
            <p className="text-gaming-muted">Your favorited games will appear here.</p>
          </div>
        );
      case "downloads":
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Downloads</h1>
            <p className="text-gaming-muted">Manage your downloaded games.</p>
            <RecentDownloads className="max-w-4xl" />
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Achievements</h1>
            <p className="text-gaming-muted">Track your gaming achievements across all games.</p>
          </div>
        );
      case "statistics":
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Statistics</h1>
            <p className="text-gaming-muted">View your gaming statistics and activity.</p>
            <Statistics className="max-w-4xl" />
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
            <p className="text-gaming-muted">Customize your GameHub experience.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen bg-gaming-background">
        <Sidebar />
        
        <div className="flex-1 flex flex-col h-screen">
          <Header />
          
          <main className="flex-1 p-4 md:p-8 overflow-auto pb-24 md:pb-16">
            <div className="md:hidden mb-4">
              <SearchBar />
            </div>
            
            {renderContent()}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
