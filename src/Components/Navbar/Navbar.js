import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import css from "./Navbar.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsMoon } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

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
            <a href="/equipments">
              <li>Equipments</li>
            </a>
            <a href="/contact">
              <li>Testimonials</li>
            </a>
            <span className={css.Icon}>
              <a
                href="https://www.facebook.com/hadiyasphotography/"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </span>
            <span className={css.Icon}>
              <a
                href="https://www.instagram.com/hadiyaali_photography/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </span>
            <span className={css.Icon}>
              <a href="https://www.tiktok.com/@ali.hadiya" target="_blank">
                <FaTiktok />
              </a>
            </span>
            <span className={css.Icon}>
              <a href="https://wa.me/+60167518350" target="_blank">
                <BsWhatsapp />
              </a>
            </span>
            <Box className={css.box} cursor="pointer" onClick={toggleColorMode}>
              {colorMode === "light" ? <MdSunny /> : <BsMoon />}
            </Box>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
