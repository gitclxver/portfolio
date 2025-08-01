import { Button } from "../components/ui/button";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <div className="flex justify-end">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}

export default ThemeToggle;
