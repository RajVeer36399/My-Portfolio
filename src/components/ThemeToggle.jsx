import React from 'react';
import useDarkMode from '@/hooks/useDarkMode';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  // Toggle the dark mode
  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="p-2 rounded-full bg-gray-200  bg-black hover:bg-gray-300  hover:bg-gray-700 transition-all duration-300"
    >
      {/* Conditionally render the icon based on the theme */}
      {isDark ? (
        <CiDark size={25} className="text-white transition-all duration-300" />
      ) : (
        <CiLight size={25} className="text-white  text-white transition-all duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
