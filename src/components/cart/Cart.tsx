import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CartStyled from "./Styles";
import Billing from "./Billing";
import CartOrder from "./CartOrder";
import Confirmation from "./Confirmation";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
};

const products: ProductType[] = [
  {
    id: 1,
    title: "Beginner Class",
    price: 99,
    description:
      "Two hour class with a group up to 10 people for more individual learning.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales congue congue.",
  },
  {
    id: 2,
    title: "Intermediate Class",
    price: 200,
    description:
      "Three hour class with a group up to 20 people.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales congue congue.",
  },
  {
    id: 3,
    title: "Master Class",
    price: 300,
    description:
      "Four class with advanced technics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales congue congue.",
  },
];

type CartItem = { id: number; title: string; price: number; description: string; quantity: number };

export default function Cart() {
  const [subtotal, updateSubtotal] = useState(0);
  const [cart, updateCart] = useState<Array<CartItem>>([]);

  const calculateCartTotal = (id: number, quantity: number) => {
    const cartModified = [...cart];
    const matchIndex = cartModified.findIndex((currentItem) => currentItem.id === id);

    if (matchIndex > -1) {
      const matchItem = cartModified[matchIndex];
      matchItem.quantity = quantity;
    } else {
      cartModified.push({ ...(products.find((product) => product.id === id) as CartItem), quantity });
    }

    updateCart(cartModified);

    const newSubtotal = cartModified.reduce((acc, currentItem) => {
      const price = products.find((product) => product.id === currentItem.id)?.price || 0;
      const cost = price * currentItem.quantity;

      return acc + cost;
    }, 0);

    updateSubtotal(newSubtotal);
  };

  // contact form

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({});

  const onValueChange = (key: string, value: string) => {
    setValues((values) => ({ ...values, [key]: value }));
  };

  // back and next

  const pages = useRef(["/cart", "/cart/customer-information", "/cart/confirmation"]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const location = useLocation();
  // const history = useRef<string[]>([]);

  useEffect(() => {
    const pageIndex = pages.current.findIndex((page) => page === location.pathname);

    setCurrentPageIndex(pageIndex);
  }, [location]);

  return (
    <CartStyled>
      <Routes>
        <Route
          index
          element={<CartOrder subtotal={subtotal} calculateCartTotal={calculateCartTotal} products={products} />}
        />
        <Route path="customer-information" element={<Billing onValueChange={onValueChange} values={values} />} />
        <Route path="confirmation" element={<Confirmation values={values} cart={cart} subtotal={subtotal} />} />
      </Routes>
      <div className="button-nav-container">
        {currentPageIndex > 0 && (
          <Link to={pages.current[currentPageIndex - 1]} className="nav-btn back">
            Back
          </Link>
        )}
        {currentPageIndex < pages.current.length - 1 && (
          <Link to={pages.current[currentPageIndex + 1]} className="nav-btn next">
            Next
          </Link>
        )}
      </div>
    </CartStyled>
  );
}
