// import { useEffect } from "react";
// import { useRef } from "react";
import { useState } from "react";
// import { Link, Route, Routes, useLocation } from "react-router-dom";
import CartStyled from "./Styles";
import Billing from "./Billing";
import CartOrder from "./CartOrder";
import Confirmation from "./Confirmation";
import { cloneDeep, values } from "lodash";
import productData from "../../data/products.json";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  excerpt: string;
  description: string;
  image?: string;
};

const products: ProductType[] = productData;

const lettersOnly = new RegExp(/^[A-Za-z\s]+$/);
const nameValid = new RegExp(/^[A-Za-z-\s]+$/);
const emailValid = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
const addressValid = new RegExp(/^[A-Za-z0-9.#-\s]+$/);
const postalValid = new RegExp(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
const numOnly = new RegExp(/^[0-9]+$/);
const creditNumValid = new RegExp(/^[0-9-\s]+$/);

type Validator = { validate: (value: string) => boolean; error: string };

const validationSchema: Record<string, Validator[]> = {
  fullName: [
    {
      validate: (value: string) => nameValid.test(value) && value.length <= 60,
      error: "* Full name can only contain letters",
    },
  ],
  email: [
    {
      validate: (value: string) => emailValid.test(value) && value.length <= 60,
      error: "* Invalid email",
    },
  ],
  address: [
    {
      validate: (value: string) => addressValid.test(value) && value.length <= 60,
      error: "* Invalid address",
    },
  ],
  city: [
    {
      validate: (value: string) => lettersOnly.test(value) && value.length <= 60,
      error: "* Invalid city",
    },
  ],
  postal: [
    {
      validate: (value: string) => postalValid.test(value),
      error: "* Invalid postal code",
    },
  ],
  prov: [
    {
      validate: (value: string) => !!value,
      error: "* Prov is required",
    },
  ],
  cardname: [
    {
      validate: (value: string) => nameValid.test(value) && value.length <= 60,
      error: "* Name can only contain letters",
    },
  ],
  cardnumber: [
    {
      validate: (value: string) => creditNumValid.test(value) && value.length >= 16 && value.length <= 19,
      error: "* Invalid credit card number",
    },
  ],
  expmonth: [
    {
      validate: (value: string) => numOnly.test(value) && value.length === 2,
      error: "* Invalid month",
    },
  ],
  expyear: [
    {
      validate: (value: string) => numOnly.test(value) && value.length === 4,
      error: "* Invalid year",
    },
  ],
  cvv: [
    {
      validate: (value: string) => numOnly.test(value) && value.length >= 3 && value.length <= 4,
      error: "* Invalid cvv",
    },
  ],
  //  prov
};

export type CartItem = ProductType & { quantity?: number };

export default function Cart() {
  const [step, setStep] = useState(1);
  const [subtotal, updateSubtotal] = useState(0);
  const [cart, updateCart] = useState<Array<CartItem>>(cloneDeep(products));
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
      const cost = price * (currentItem.quantity || 0);

      return acc + cost;
    }, 0);

    updateSubtotal(newSubtotal);
  };

  // contact form

  const [values, setValues] = useState({});
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const onInputBlur = (key: string) => {
    setTouched({ ...touched, [key]: true });
  };

  const onValueChange = (key: string, value: string) => {
    const validators: Validator[] = validationSchema[key];
    const newErrors: string[] = [];
    validators.forEach((validator) => {
      if (!validator.validate(value)) {
        newErrors.push(validator.error);
      }
    });
    setFormErrors({ ...formErrors, [key]: newErrors });
    setValues((values) => ({ ...values, [key]: value }));
  };

  // back and next

  // const pages = useRef(["/cart", "/cart/customer-information", "/cart/confirmation"]);
  // const [currentPageIndex, setCurrentPageIndex] = useState(0);
  // const location = useLocation();

  // useEffect(() => {
  //   const pageIndex = pages.current.findIndex((page) => page === location.pathname);

  //   setCurrentPageIndex(pageIndex);
  // }, [location]);

  const onStepChange = (step: number) => {
    setStep(step);
  };

  return (
    <CartStyled>
      {step === 1 && (
        <CartOrder
          subtotal={subtotal}
          calculateCartTotal={calculateCartTotal}
          products={cart}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <Billing
          onValueChange={onValueChange}
          values={values}
          errors={formErrors}
          touched={touched}
          onInputBlur={onInputBlur}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && <Confirmation values={values} cart={cart} subtotal={subtotal} onStepChange={onStepChange} />}
      {/* <Routes>
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
      </div> */}
    </CartStyled>
  );
}
