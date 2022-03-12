import { Link } from "react-router-dom";
import { ProductType } from "../cart/Cart";

const Class = ({ id, title, price, description, image, images }: ProductType) => {
  return (
    <div className="class-container">
      <div>
        <p className="product-title">{title}</p>
        <p className="description">{description}</p>
        <div className="img-container">
          {images?.map((image) => (
            <img src={image} alt={image} key={image}></img>
          ))}
        </div>
        <div className="to-cart">
          <p>
            <Link to="/cart" className="step-btn">
              Cart
            </Link>
          </p>
          <p>
            Price per person: <span>${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Class;
