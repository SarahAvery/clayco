import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router";
import Cart from "./components/cart/Cart";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import ClassPage from "./components/classes/Classes";
import AboutPage from "./components/about/About";
import ContactPage from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/about/*" element={<AboutPage />} />
          <Route path="/classes/*" element={<ClassPage />} />
          <Route path="/contact/*" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
