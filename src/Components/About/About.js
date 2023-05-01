import React from "react";
import {
  Box,
  Image,
  Text,
  Wrap,
  WrapItem,
  Center,
  Button,
} from "@chakra-ui/react";
import Hadiya from "../../assets/About/hadiya.PNG";
import "./About.css";

function About() {
  return (
    <section className="about">
      <Box className="main">
        <Image src={Hadiya} />
        <Box className="about-text">
          <Text as="h2">
            Hadiya Ali, is a creative photgrapher and filmmaker, residing in
            Malaysia, Kuala Lumpur.
          </Text>
          {/* <Text as="h5">Photographer & Filmmaker</Text> */}
          <Text as="p">
            Hi, I'm Hadiya Ali, a passionate photographer and filmmaker with
            over 5 years of experience in the industry. I specialize in
            capturing stunning visuals that tell a story and leave a lasting
            impression. I believe that every moment is unique, and my goal is to
            capture those special moments in a way that highlights the beauty
            and emotion of the moment.
          </Text>
        </Box>
      </Box>
    </section>
  );
}

export default About;
