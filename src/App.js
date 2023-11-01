import "./App.css";
import CardDisplay from "./components/Card Display/CardDisplay";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Introduction/>
      <CardDisplay/>
    </div>
  );
}

export default App;
