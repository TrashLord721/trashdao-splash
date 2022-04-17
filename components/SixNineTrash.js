import { useState, useEffect } from "react";
import { Text, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function SixNineTrash() {
  const [windowDimensions, setWindowDimensions] = useState();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [speedX, setSpeedX] = useState(10);
  const [speedY, setSpeedY] = useState(10);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    window.setInterval(() => {
      animate();
    }, 1000 / 20);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function animate() {
    if (x == window.innerWidth) {
      setSpeedX(speedX * -1);
    }
    if (y == window.innerHeight) {
      setSpeedY(speedY * -1);
    }
    setX((previousValue) => {
      return previousValue + speedX;
    });
    setY((previousValue) => {
      return previousValue + speedY;
    });
  }

  console.log(windowDimensions);
  return (
    <Image
      sx={{
        width: `250px`,
        position: `absolute`,
        zIndex: `5`,
        left: `${x}px`,
        top: `${y}px`,
      }}
      src="sixninetrash.png"
    />
  );
}
