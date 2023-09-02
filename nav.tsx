import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";
const Nav = ({ searchbtn }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { search, setSearch } = useState();

  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>Free shipping when shipping into $1000</p>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src="/IMAGES/ibook,g3.jpg" alt="apple" />
          </div>
          <div className="search-box">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search for product..."
              autoComplete="off"
            />
            <button onClick={() => searchbtn(search)}>search</button>
          </div>

          <div className="icon">
            {user && (
              <div className="account">
                <div className="user_icon">
                  <AiOutlineUser />
                </div>
                <p>Hello,{user.name}</p>
              </div>
            )}

            <div className="second_icon">
              <Link to="/" className="link">
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className="link">
                {" "}
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            <>
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  <CiLogout />
                </button>
              ) : (
                <button onClick={() => loginWithRedirect()}>
                  <CiLogin />
                </button>
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
