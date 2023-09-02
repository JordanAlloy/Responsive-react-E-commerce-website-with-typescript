import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./product";
import Cart from "./cart";

const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addtocart,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product"
        element={
          <Product
            product={product}
            setProduct={setProduct}
            detail={detail}
            view={view}
          />
        }
        close={close}
        setClose={setClose}
      />
      <Route
        path="/Cart"
        element={<Cart cart={cart} setCart={setCart} addtocart={addtocart} />}
      />
    </Routes>
  );
};

export default Rout;
