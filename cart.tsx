import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container">
        {Cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product"> Shop Now</Link>
          </div>
        )}
        <div className="contant">
          {Cart.map((curElm) => {
            {
              return (
                <div className="cart_item" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>{curElm.Price}</p>
                    <button>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
