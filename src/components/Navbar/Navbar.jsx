import './Navbar.css'
import Gerícht from "../../assets/Gerícht.svg";
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineRestaurantMenu} from "react-icons/md"
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navItems = [
    { id: 1, title: "Home", link: "#home", active: true },
    { id: 2, title: "Pages", link: "#pages", active: false },
    { id: 3, title: "Contact Us", link: "#contact", active: false },
    { id: 4, title: "Blogs", link: "#blogs", active: false},
    { id: 5, title: "Landing", link: "#landing", active: false}
  ]
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if(menu) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
  }, [menu])

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <img src={Gerícht} alt="logo" className="logo" />
          </div>
        </div>
        <div className="center">
          <div className="list">
            {navItems.map((item, index) => (
              <a
                href={item.link}
                key={item.id}
                className={item.active ? "active" : ""}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="btns">
            <button className="btn">Login / Register</button>
            <button className="btn">Book a table</button>
          </div>
        </div>
        <div className="icon">
          {!menu && (
            <GiHamburgerMenu
              color="#fff"
              fontSize={27}
              cursor="pointer"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>
      {menu && (
        <div className="nav-menu slide-bottom">
          <MdOutlineRestaurantMenu
            color="#fff"
            fontSize={27}
            cursor="pointer"
            onClick={() => setMenu(false)}
          />

          {navItems.map((item, index) => (
            <div className="nav-item" key={item.id}>
              <a
                href={item.link}
                className={item.active ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {item.title}
              </a>
            </div>
          ))}
          <div className="btns">
            <button className="btn">Login / Register</button>
            <button className="btn">Book a table</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar