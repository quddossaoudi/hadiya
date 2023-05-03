import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Hadiya from "../../assets/About/hadiya.PNG";
import "./About.css";
import { FiBookOpen } from "react-icons/fi";
import { BsFillChatLeftTextFill } from "react-icons/bs";

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
          <Text as="p">
            Hi, I'm Hadiya Ali, a passionate photographer and filmmaker with
            over 5 years of experience in the industry. I specialize in
            capturing stunning visuals that tell a story and leave a lasting
            impression. I believe that every moment is unique, and my goal is to
            capture those special moments in a way that highlights the beauty
            and emotion of the moment.
          </Text>
          <Box
            margin="25px 0px"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <a
              target="__blank"
              href="https://glaszart.com/an-interview-with-photographer-hadiya-ali/ "
            >
              <BsFillChatLeftTextFill title="My Interview with Glaszart" />
            </a>
            <a
              target="__blank"
              href="https://www.amazon.com/Seizing-Bygone-Light-Tribute-Photography-ebook/dp/B08Z33CRH1 "
            >
              <FiBookOpen title="My book" />
            </a>
            <a
              target="__blank"
              href="https://picturesfromthekitchen.wordpress.com/2021/03/16/my-blog-today-is-from-the-bygone-light-tour-a-tribute-to-early-photography/ "
            >
              <BsFillChatLeftTextFill title="My Interview with Pictures From The Kitchen" />
            </a>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default About;
