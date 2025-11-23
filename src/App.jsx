import { lazy, Suspense } from 'react';
import Main from "./components/mode"
import About from "./components/About"

// Lazy load components that are below the fold
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20 bg-black">
    <div className="text-amber-400 text-lg">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Main />
      <About />

      <Suspense fallback={<LoadingFallback />}>
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
