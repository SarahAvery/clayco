import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CheckoutStyled from "./Styles";

const Checkout = () => {
  return (
    <CheckoutStyled>
      <div className="container">
        <div className="confirmed">
          <p>Confirmed</p>
        </div>
        <h2>Your order is complete!</h2>
        <p>You will be receiving a confirmation email with class details.</p>
        <div className="link-container">
          <Link to="/classes" className="step-btn">
            <FontAwesomeIcon icon={faCompass} className="icon"></FontAwesomeIcon>
            <p>Explore more classes</p>
          </Link>
        </div>
      </div>
    </CheckoutStyled>
  );
};

export default Checkout;
