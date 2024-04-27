import './App.css';
import Header from './component/Header';
import About from './component/Javascript/About';
import Contact from './component/Javascript/Contact';
import Home from './component/Javascript/Home';
import Service from './component/Javascript/Service';
import Navbar from './component/Navbar';

function App() {
  return (
    <div class="container mx-auto">
      <Header />
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
