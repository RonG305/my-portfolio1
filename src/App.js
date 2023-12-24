
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/projects/Project';
import { BrowserRouter} from 'react-router-dom'
import InTouch from './components/InTouch/InTouch';
import Proficiency from './components/Proficiency/Proficiency';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App font-Poppins bg-blue-100">
      <Navbar />
      <BrowserRouter>
        <Hero />
        <About />
        <Proficiency />
        <InTouch />
        <Project />
        <Contact />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
