import { Link } from "react-router-dom";
import NavStyled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <NavStyled>
      <div className="logo">
        <Link to={"/"}>
          Clay<span>.</span>co
        </Link>
      </div>
      <div>
        <ul>
          <Link to={"/about"} className="link">
            About
          </Link>
          <Link to={"/classes"} className="link">
            Classes
          </Link>
          <Link to={"/contact"} className="link">
            Contact
          </Link>
        </ul>
      </div>
      <div>
        <Link to={"/cart"}>
          <FontAwesomeIcon icon={faShoppingBasket} className="cart-icon" />
        </Link>
      </div>
    </NavStyled>
  );
};

export default Nav;
