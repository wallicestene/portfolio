import AnimatedBackground from "./components/AnimatedBackground";
import Backgound from "./components/Backgound";
import { Toaster } from "./components/ui/toaster";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <div className=" relative h-full w-full">
      <AnimatedBackground />
      <Backgound />
      <Homepage />
      <Toaster />
    </div>
  );
}

export default App;
