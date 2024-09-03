'use client';
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toggleTheme } from "../hooks/toggleTheme"; // Ensure this path is correct


export function SwitchTheme() {
  // Initialize state with local storage value
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the saved theme from local storage or default to false (light mode)
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Apply theme on initial load
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the theme to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    toggleTheme();
  };

  return (
    <div className="fixed bottom-4 left-4 flex items-center space-x-2 z-50">
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
      />
      <Label htmlFor="theme-toggle">{isDarkMode ? 'Light' : 'Dark'}</Label>
    </div>
  );
}
