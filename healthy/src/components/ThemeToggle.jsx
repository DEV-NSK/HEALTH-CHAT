// src/components/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '/src/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-healthcare-primary"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;