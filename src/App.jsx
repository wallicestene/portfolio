import AnimatedBackground from "./components/AnimatedBackground";
import Backgound from "./components/Backgound";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <div className=" relative h-full w-full">
      <AnimatedBackground/>
      <Backgound />
      <Homepage />
    </div>
  );
}

export default App;
