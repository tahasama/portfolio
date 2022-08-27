import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Social from "./components/social";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Social />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
