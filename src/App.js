import Navbar from "./components/Navbar";
import { Canvas } from '@react-three/fiber';
import Particles  from './components/Particles';
import Languages from "./components/Languages";
import { useState, useEffect } from 'react';
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import CurrentlyLearning from "./components/CurrentlyLearning";

function App() {

  const [title, setTitle] = useState(0);

  const titles = ['Full-Stack', 'Frontend', 'Backend', 'Blockchain'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(title => title + 1);
      
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if(title > 3) {
    setTitle(title => title = 0);
  }

  return (
  <div className="h-screen w-screen bg-black overflow-auto overflow-x-hidden">
    <Navbar/>
    <div className="pt-32 text-center mx-auto relative min-h-screen w-screen">
      <h2 className="font-extrabold text-7xl text-white font-inter py-20" >
        Hi I'm Ryan Flynn and I'm a
      </h2>
      <h2 className="font-extrabold text-7xl text-white font-inter bg-gradient-to-r bg-clip-text text-transparent
        from-blue-400 
        to-orange-500 
        via-purple-500 animate-gradient-x pb-1.5" >
        {titles[title]} Engineer
      </h2>
    </div>
    <div className="pt-32 text-center mx-auto relative min-h-screen w-screen bg-red-400">
      <h2 className="font-extrabold text-7xl text-white font-inter text-center">ABOUT ME</h2>
      <AboutMe/>
    </div>
    <div className="pt-32 text-center mx-auto relative min-h-screen w-screen bg-blue-400">
      <h2 className="font-extrabold text-7xl text-white font-inter">Technologies I Use</h2>
      <Languages/>
    </div>
    <div className="pt-32 text-center  mx-auto relative min-h-screen w-screen bg-green-400">
      <h2 className="font-extrabold text-7xl text-white font-inter">My Projects</h2>
      <Projects/>
    </div>
    <div className="pt-32 text-center  mx-auto relative min-h-screen w-screen bg-yellow-300">
      <h2 className="font-extrabold text-7xl text-white font-inter">Currently Learning</h2>
      <CurrentlyLearning/>
    </div>

  </div>
  );
}

export default App;
