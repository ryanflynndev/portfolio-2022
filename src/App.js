import Navbar from "./components/Navbar";
import { Canvas } from '@react-three/fiber';
import Particles  from './components/Particles';
import Languages from "./components/Languages";

function App() {
  return (
  <div className="h-screen w-screen bg-black overflow-auto">
    <Navbar/>
    <div className="pt-32 text-center">
      <h2 className="font-extrabold text-7xl text-white font-inter py-20" >
        Hi I'm Ryan Flynn and I'm a
      </h2>
      <h2 className="font-extrabold text-7xl text-white font-inter bg-gradient-to-r bg-clip-text text-transparent
from-blue-400 
to-orange-500 
via-purple-500 animate-gradient-x pb-1.5" >
        Full-Stack Engineer
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
