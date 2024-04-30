import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import About from "./component/Javascript/About";
import Contact from "./component/Javascript/Contact";
import Home from "./component/Javascript/Home";
import Service from "./component/Javascript/Service";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <div class="container mx-auto">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact Us />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
