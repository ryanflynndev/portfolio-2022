import Navbar from "./components/Navbar";
import { Canvas } from '@react-three/fiber';
import Particles  from './components/Particles';
import Languages from "./components/Languages";
import { useState, useEffect } from 'react';

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
  <div className="h-screen w-screen bg-black overflow-auto">
    <Navbar/>
    <div className="pt-32 text-center container mx-auto relative">
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
    {/* <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles position={[0, 0, 0]} />
    </Canvas>
    <Languages/> */}
  </div>
  );
}

export default App;
