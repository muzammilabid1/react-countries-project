import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";


export const Headers = () => {
  const [show, setShow] = useState(false);
  const handleButtonToggle = () => {
    return setShow(!show);
  };

  const handleNav = () => {
    setShow(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav
            className={show ? "menu-mobile" : "menu-web"}
            onClick={handleNav}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              {show ? <ImCross /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
