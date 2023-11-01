import "./App.css";
import CardDisplay from "./components/Card Display/CardDisplay";
import Hero from "./components/Hero/Hero";
import Grid from "./components/Image Grid/Grid";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Introduction/>
      <CardDisplay/>
      <Grid/>
    </div>
  );
}

export default App;
