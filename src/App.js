import logo from './logo.svg';
import "./App.scss"
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero"
import AnimationLogo from "./Components/AnimationLogo/AnimationLogo";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Testimonials />
        <Carousel />
        <Footer />
    </div>
  );
}

export default App;
