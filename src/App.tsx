import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import LanguageModal from "./components/LanguageModal";

function App() {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "light");
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(false);

  useEffect(() => {
    // Handle theme switching
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Check if it's the user's first visit
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setIsFirstVisit(true);
      localStorage.setItem("visitedBefore", "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-gray-100 dark:bg-neutral-900 dark:text-white min-h-screen flex flex-col font-primaryRegular">
      <Navbar toggleDarkMode={toggleDarkMode} theme={theme} />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      {isFirstVisit && <LanguageModal onClose={() => setIsFirstVisit(false)} />}
    </div>
  );
}

export default App;
