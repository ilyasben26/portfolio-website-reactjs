import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";

function App() {
  // Load the theme from localStorage or default to "light"
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the theme class to the document root
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    // Toggle between "dark" and "light" themes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-gray-100 dark:bg-neutral-900 min-h-screen flex flex-col font-primaryRegular ">
      <Navbar toggleDarkMode={toggleDarkMode} theme={theme} />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


