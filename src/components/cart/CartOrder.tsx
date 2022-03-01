import { Link } from "react-router-dom";
import Product from "../Product";
import { ProductType } from "./Cart";

const CartOrder = ({
  subtotal,
  calculateCartTotal,
  products,
}: {
  subtotal: number;
  calculateCartTotal: (id: number, quantity: number) => void;
  products: ProductType[];
}) => {
  return (
    <>
      <h1>Order</h1>
      <div className="container">
        <div>
          <form>
            {products.map(({ id, title, price, description }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                onChange={calculateCartTotal}
              />
            ))}
          </form>
        </div>
        <div className="subtotal-container">
          <div>
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
        </div>
        <div className="button-nav-container">
          {/* <Link to={"/cart"} className="nav-btn back">
            Back
          </Link> */}
          {subtotal > 0 ? (
            <Link to={"/cart/customer-information"} className="nav-btn next">
              Next
            </Link>
          ) : (
            <Link to={"/cart"} className="nav-btn next disabled">
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CartOrder;
