import { ThemeProvider } from "next-themes";
import About from "./components/section/about";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import Hero from "./components/section/hero";
import Projects from "./components/section/project";
import Skills from "./components/section/skills";
import Navbar from "./components/ui/navbar";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}