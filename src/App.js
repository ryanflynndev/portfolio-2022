import Navbar from "./components/Navbar";
import { Canvas } from '@react-three/fiber';
import Particles  from './components/Particles';

function App() {
  return (
  <div className="h-screen w-screen bg-black">
    <Navbar/>
    <div className="pt-32 text-center">
      <h2 className="font-extrabold text-4xl text-white bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text font-inter" >
        Hi I am Ryan Flynn and I like to make stuff
      </h2>
    </div>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Particles position={[0, 0, 0]} />
    </Canvas>,

  </div>
  );
}

export default App;
