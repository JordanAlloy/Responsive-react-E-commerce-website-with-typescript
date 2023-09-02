import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./IMAGES/ibook,g3.jpg" alt="img" />
            </div>
            <div className="detail">
              <p>
                we are a team of designers and developers that create high
                quality websites
              </p>
              <div className="icon">
                <li>
                  <BiLogoFacebook />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <BiLogoTwitter />
                </li>
                <li>
                  <BiLogoYoutube />
                </li>
              </div>
            </div>
            <div className="account">
              <h3>my Account</h3>
              <ul>
                <li>Account</li>
                <li>order</li>
                <li>cart</li>
                <li>shipping</li>
                <li>return</li>
              </ul>
            </div>
            <div className="page">
              <h3>Pages</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
