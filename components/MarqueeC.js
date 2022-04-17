import { useState } from "react";
import { Text, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function MarqueeC(props) {
  return (
    <Marquee gradientWidth="0" speed="100">
      <Text
        paddingTop={["16px", "32px"]}
        sx={{
          color: `#72F44A`,
          textShadow: `0px 4px 4px rgba(0,0,0,0.3)`,
          fontSize: `6vmax`,
          textAlign: `center`,
          fontFamily: `'Epilogue', sans-serif`,
          marginRight: `15px`,
        }}
      >
        {props.children}
      </Text>
    </Marquee>
  );
}
