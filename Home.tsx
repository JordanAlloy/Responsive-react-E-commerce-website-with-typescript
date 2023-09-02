import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import HomeProduct from "../homeproduct";
import { BsArrowRight } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";

const Home = ({ detail, detail, view, close, setClose }) => {
  const [homeProduct, setHomeProduct] = useState(HomeProduct);
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
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>the best note book 2023</h2>
            <Link to="/product" className="link">
              Shop now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="/IMAGES/apple.svg" alt="" />
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="img_box">
                <img src="" alt="mobile" />
              </div>
              <div className="detail">
                <p>23 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="" alt="headphone" />
              </div>
              <div className="detail">
                <p>23 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="" alt="watch" />
              </div>
              <div className="detail">
                <p>23 products</p>
              </div>
            </div>
            <div className="box">
              <div className="img_box">
                <img src="" alt="laptop" />
              </div>
              <div className="detail">
                <p>23 products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>free shipping</h3>
              <p>order above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiOutlineReceiptRefund />
            </div>
            <div className="detail">
              <h3>return & refund</h3>
              <p>monney back guarranty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Warrant Discount</h3>
              <p>on delivery</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>customer support</h3>
              <p>envery time call support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeProduct.map((curElm) => {
            return (
              <>
                <div className="box" key={curElm.id}>
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
              </>
            );
          })}
          <div className="banner">
            <div className="detail">
              <div className="container">
                <h4>LATEST TECH ADDED</h4>
                <h3>Apple laptop 2022</h3>
                <p>
                  <BsCurrencyDollar />
                  986
                </p>
                <Link to="/product" className="link">
                  Shop Now <BsArrowRight />
                </Link>
                <div className="img_box">
                  <img src=".IMAGES/ibook,g3.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
