import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";
import css from "./Navbar.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className={css.mainContainer}>
        <div className={css.Container}>
          <p>Hadiya Ali</p>
        </div>
        <div className={css.listItem}>
          <ul>
            <a href="#">
              <Menu>
                <MenuButton className={css.MenuButton}>Projects</MenuButton>
                <Portal>
                  <MenuList border="none">
                    <MenuItem className={css.MenuItem}>Commercial</MenuItem>
                    <MenuItem className={css.MenuItem}>Weddings</MenuItem>
                    <MenuItem className={css.MenuItem}>
                      Interior Design
                    </MenuItem>
                    <MenuItem className={css.MenuItem}>Model Shoot</MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
            <span className={css.Icon}>
              <AiFillInstagram />
            </span>

            <span className={css.Icon}>
              <FaTiktok />
            </span>

            <span className={css.Icon}>
              <BsWhatsapp />
            </span>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
