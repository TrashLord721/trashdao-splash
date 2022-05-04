import { Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import SixNineTrash from "../components/SixNineTrash";
import ToggleImages from "../components/ToggleImages";

// Test 2

export default function Home() {
  // toggle stuff
  const [active, setActive] = useState(false);
  // copy & paste the fox

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  const [playing, setPlaying] = useState(false);
  const actx = useRef(null);
  const audioElement = useRef(null);
  useEffect(() => {
    const AudioContext = window?.AudioContext || window?.webkitAudioContext;
    audioElement.current = document.querySelector("#song");
    actx.current = new AudioContext(); // Modern Audio object
  }, []);

  useEffect(() => {
    // This code block waits for the HTML to render before looking for the <audio> element
    const timer = setTimeout(() => {
      audioElement.current.onEnded = () => {
        handleEnd();
      };
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handleClick = useCallback(() => {
    // Initialize the AudioContext State & play / pause
    if (actx.state === "suspended") {
      actx.resume();
    }
    if (playing === false) {
      audioElement.current.play();
      setPlaying(false);
    } else {
      audioElement.current.pause();
      setPlaying(false);
    }
  }, [playing]);

  const handleEnd = useCallback(() => {
    // I'm not sure if this is working...
    setPlaying(false);
    console.log("song ended!");
  }, []);

  /* Main Container */
  return (
    <>
      <Head>
        <title>NFTs are $TRASH</title>
        <meta property="og:image" content="/Trash.gif"></meta>
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          minHeight: `100vh`,
          minWidth: `100vw`,
        }}
      >
        {/* everything lives in here*/}
        <ToggleImages
          sx={{ margin: "0 auto", display: "block" }}
          active={active}
          handleChangeActive={handleChangeActive}
          onClick={() => {
            handleClick();
          }}
        />
        <Box
          paddingBottom={["16px", "32px"]}
          sx={{
            color: "#72F44A",
            textAlign: "end",
            fontFamily: "Roboto Mono, sans-serif",
            fontSize: "12px",
            paddingRight: "25px",
            width: "full",
          }}
        >
          <Link href="https://szns.io" target="#blank">
            Powered by SZNS
          </Link>
        </Box>
        <audio id="song" src="/trashsong.mp3"></audio>
        <SixNineTrash />
      </Box>
    </>
  );
}
