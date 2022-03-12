import ClassStyled from "./Styles";
import productData from "../../data/products.json";
import { ProductType } from "../cart/Cart";
import Class from "./Class";

const products: ProductType[] = productData;

const ClassPage = () => {
  return (
    <ClassStyled>
      {products.map(({ id, ...props }) => (
        <Class key={id} id={id} {...props}></Class>
      ))}
    </ClassStyled>
  );
};

export default ClassPage;
