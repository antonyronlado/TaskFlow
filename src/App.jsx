import useState from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TaskPreview from "./components/TaskPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navbar />
      <Hero />
      <Features />
      <TaskPreview />
      <Footer />
    </div>
  );
}

export default App;