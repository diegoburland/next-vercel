import React from "react";
import styles from "./Navbar.module.css";
import LinkCustom from "../Link";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {menuItems.map(({ text, href }) => (
        <LinkCustom key={href} href={href} text={text} />
      ))}
    </div>
  );
};

export default Navbar;
