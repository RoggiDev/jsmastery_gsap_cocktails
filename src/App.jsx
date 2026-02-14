import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cocktails from "./Components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cocktails />
    </>
  );
};

export default App;
