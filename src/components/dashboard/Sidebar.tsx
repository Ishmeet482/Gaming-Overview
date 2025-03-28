
import { Home, Heart, Trophy, BarChart, Settings, Menu, X, Download, Gamepad } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(isMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCollapsed(isMobile && !mobileMenuOpen);
  }, [isMobile, mobileMenuOpen]);

  useEffect(() => {
    // Close mobile menu when route changes
    if (isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location, isMobile]);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/", active: location.pathname === "/" },
    { icon: Gamepad, label: "Games", path: "/games", active: location.pathname === "/games" },
    { icon: Heart, label: "Favorites", path: "/favorites", active: location.pathname === "/favorites" },
    { icon: Download, label: "Downloads", path: "/downloads", active: location.pathname === "/downloads" },
    { icon: Trophy, label: "Achievements", path: "/achievements", active: location.pathname === "/achievements" },
    { icon: BarChart, label: "Statistics", path: "/statistics", active: location.pathname === "/statistics" },
    { icon: Settings, label: "Settings", path: "/settings", active: location.pathname === "/settings" },
  ];

  // Hide sidebar completely on mobile when not open
  if (isMobile && !mobileMenuOpen) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 rounded-full bg-gaming-card shadow-md hover:bg-gaming-muted/10"
      >
        <Menu className="h-5 w-5 text-gaming-foreground" />
      </Button>
    );
  }

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={cn(
          "flex flex-col h-screen bg-gaming-card border-r border-gaming-muted/20 shadow-lg transition-all duration-300",
          isMobile ? "fixed z-20" : "relative",
          collapsed && !mobileMenuOpen ? "w-16" : "w-64",
          className
        )}
      >
        <div className="flex items-center justify-between p-4">
          {(!collapsed || mobileMenuOpen) && (
            <h2 className="text-xl font-bold bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
              GameHub
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="rounded-full hover:bg-gaming-muted/10"
          >
            {isMobile && mobileMenuOpen ? (
              <X className="h-5 w-5 text-gaming-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-gaming-foreground" />
            )}
          </Button>
        </div>

        <nav className="flex-1 pt-6 overflow-y-auto">
          <ul className="space-y-3 px-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-lg transition-all duration-200",
                    item.active
                      ? "bg-gaming-primary/10 text-gaming-primary neon-border"
                      : "text-gaming-foreground hover:bg-gaming-muted/10"
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5",
                      item.active ? "text-gaming-primary" : "text-gaming-foreground"
                    )}
                  />
                  {(!collapsed || mobileMenuOpen) && (
                    <span
                      className={cn(
                        "font-medium",
                        item.active ? "text-gaming-primary" : "text-gaming-foreground"
                      )}
                    >
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
