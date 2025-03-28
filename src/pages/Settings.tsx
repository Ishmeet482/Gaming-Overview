
import { Dashboard } from "@/components/dashboard/Dashboard";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { useEffect } from "react";

const Settings = () => {
  useEffect(() => {
    document.title = "Settings - GameHub";
    document.documentElement.classList.add("scroll-smooth");

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-gaming-background">
        <Dashboard page="settings" />
      </div>
    </ThemeProvider>
  );
};

export default Settings;
