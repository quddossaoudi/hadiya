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
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#">
              <Menu>
                <MenuButton className={css.MenuButton}>Projects</MenuButton>
                <Portal>
                  <MenuList border="none">
                    <MenuItem className={css.MenuItem}>
                      <a href="/weddings">Weddings</a>
                    </MenuItem>
                    <MenuItem className={css.MenuItem}>
                      <a href="/products">Brands</a>
                    </MenuItem>
                    <MenuItem className={css.MenuItem}>
                      <a href="/food">Food</a>
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/contact">
              <li>Testimonials</li>
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
