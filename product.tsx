import productdetail from "./productdetail";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const filterProduct = (product) => {
    const update = productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(productdetail);
  };
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={setClose(false)}>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>A screen everyone will love: family and friends</p>
                    <h3>{curElm.Price}</h3>
                    <button>Add to cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="products">
        <h2>
          <span>#</span> products
        </h2>
        <p> Home products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All products</li>
                <li onClick={() => filterProduct(" Tablet")}>Tablet</li>
                <li onClick={() => filterProduct(" smart watch")}>
                  smart watch
                </li>
                <li onClick={() => filterProduct(" Head phone")}>Head Phone</li>
                <li onClick={() => filterProduct(" camera")}>camera</li>
                <li onClick={() => filterProduct(" Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contont">
              {productdetail.map((curElm) => {
                return (
                  <>
                    <div className="box">
                      {" "}
                      <div className="bon" key={curElm.id}>
                        <div className="img_box">
                          <img src={curElm.img} alt={curElm.Title} />
                          <div className="icon">
                            <li onClick={() => addtocart(curElm)}>
                              <AiOutlineShoppingCart />
                            </li>
                            <li onClick={() => view(curElm)}>
                              <BsEye />
                            </li>
                            <li>
                              <AiOutlineHeart />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Title}</h3>
                          <h4>{curElm.price}</h4>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
