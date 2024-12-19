import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";




function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Footer/>
     </div>
  );
}

export default App;
