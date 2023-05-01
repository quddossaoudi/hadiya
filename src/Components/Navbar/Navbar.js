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
  Text,
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
              <Text
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
              >
                Home
              </Text>
            </a>
            <a href="#">
              <Menu>
                <MenuButton
                  color="Gray"
                  _hover={
                    colorMode === "light"
                      ? { color: "Black" }
                      : { color: "White" }
                  }
                >
                  Projects
                </MenuButton>
                <Portal>
                  <MenuList border="none">
                    <MenuItem className={css.MenuItem}>
                      <a href="/weddings">
                        <Text
                          color="Gray"
                          _hover={
                            colorMode === "light"
                              ? { color: "Black" }
                              : { color: "White" }
                          }
                        >
                          Weddings
                        </Text>
                      </a>
                    </MenuItem>
                    <MenuItem className={css.MenuItem}>
                      <a href="/products">
                        <Text
                          color="Gray"
                          _hover={
                            colorMode === "light"
                              ? { color: "Black" }
                              : { color: "White" }
                          }
                        >
                          Brands
                        </Text>
                      </a>
                    </MenuItem>
                    <MenuItem className={css.MenuItem}>
                      <a href="/food">
                        {" "}
                        <Text
                          color="Gray"
                          _hover={
                            colorMode === "light"
                              ? { color: "Black" }
                              : { color: "White" }
                          }
                        >
                          Food
                        </Text>
                      </a>
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </a>
            <span>
              <a href="/about">
                <Text
                  color="Gray"
                  _hover={
                    colorMode === "light"
                      ? { color: "Black" }
                      : { color: "White" }
                  }
                >
                  About
                </Text>
              </a>
            </span>
            <a href="/equipments">
              <Text
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
              >
                Equipments
              </Text>
            </a>
            <a href="/testimonials">
              <Text
                color="Gray"
                _hover={
                  colorMode === "light"
                    ? { color: "Black" }
                    : { color: "White" }
                }
              >
                Testimonials
              </Text>
            </a>
            <Box
              color="Gray"
              _hover={
                colorMode === "light" ? { color: "Black" } : { color: "White" }
              }
            >
              <a
                href="https://www.facebook.com/hadiyasphotography/"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </Box>
            <Box
              color="Gray"
              _hover={
                colorMode === "light" ? { color: "Black" } : { color: "White" }
              }
            >
              <a
                href="https://www.instagram.com/hadiyaali_photography/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </Box>
            <Box
              color="Gray"
              _hover={
                colorMode === "light" ? { color: "Black" } : { color: "White" }
              }
              className={colorMode === "light" ? css.Icon : css.IconDarkMode}
            >
              <a href="https://www.tiktok.com/@ali.hadiya" target="_blank">
                <FaTiktok />
              </a>
            </Box>
            <Box
              color="Gray"
              _hover={
                colorMode === "light" ? { color: "Black" } : { color: "White" }
              }
            >
              <a href="https://wa.me/+60167518350" target="_blank">
                <BsWhatsapp />
              </a>
            </Box>
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
