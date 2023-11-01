import "./App.css";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Introduction/>
    </div>
  );
}

export default App;
