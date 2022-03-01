import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Cart from "./components/cart/Cart";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/*" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
