'use client'; // This ensures the component is client-side only
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toggleTheme } from "../hooks/toggleTheme"; // Ensure this path is correct

export function SwitchTheme() {
  // State to track if the component is mounted (to prevent SSR issues)
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set the component as mounted
    setIsMounted(true);
    // Get the saved theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      // Apply the saved theme
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Apply the theme whenever it changes
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Save the theme to local storage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode, isMounted]);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    toggleTheme(); // Assuming this function handles additional theme logic
  };

  if (!isMounted) {
    // Avoid rendering the switch until the component is mounted to prevent SSR issues
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 flex items-center space-x-2 z-50">
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
      />
      <Label htmlFor="theme-toggle" className="text-xs">{isDarkMode ? 'Light' : 'Dark'}</Label>
    </div>
  );
}
