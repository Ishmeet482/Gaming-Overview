
import { Dashboard } from "@/components/dashboard/Dashboard";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "GameHub Dashboard";

    // Add smooth scrolling class to html element
    document.documentElement.classList.add("scroll-smooth");

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default Index;
