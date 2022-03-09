import "./App.css";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router";
import Cart from "./components/cart/Cart";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/*" element={<Cart />} />
          {/* <Route path="/about/*" element={<Cart />} /> */}
          {/* <Route path="/classes/*" element={<Cart />} /> */}
          {/* <Route path="/contact/*" element={<Cart />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
