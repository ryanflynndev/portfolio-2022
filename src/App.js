import Navbar from "./components/Navbar";

function App() {
  return (
  <div className="h-screen bg-black">
    <Navbar/>
    <div className="py-32 text-center">
      <h2 className="font-extrabold text-4xl text-white bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text font-inter" >
        Hi I am Ryan Flynn and I like to make stuff
      </h2>
    </div>
  </div>
  );
}

export default App;
