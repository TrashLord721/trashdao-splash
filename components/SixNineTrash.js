import { Image, Text, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useHeight } from "../contexts/heightContext";
import { motion } from "framer-motion";

export default function SixNineTrash() {
  const { height } = useHeight();

  const sixNineXFrames = keyframes`
  0% { left: 0;}
  100% { left: calc(100% - 530px); }
  `;

  const sixNineYFrames = keyframes`
  0% { top: 0; }
  100% { top: calc(100% - 107px); }
  `;
  const calcHeightFrames = () => {
    if (height > 2000) {
      return 30;
    }
    if (height <= 2000) {
      return height / 150;
    }
  };

  const sixNineAnim = `${sixNineXFrames} ${
    height / 200
  }s linear 0s infinite alternate, ${sixNineYFrames} ${calcHeightFrames()}s linear 0s infinite alternate`;

  return (
    <Image
      as={motion.img}
      animation={sixNineAnim}
      id="six-nine"
      src="sixninetrash.png"
      alt="trash"
    />
  );
}
