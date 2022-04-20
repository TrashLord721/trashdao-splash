import {
  Box,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import MarqueeC from "./MarqueeC";

export default function FaqModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={[`100%`, `50%`]}
          sx={{
            backgroundColor: `black`,
            border: `2px solid white`,
            borderRadius: "0px",
            color: `#E332F0`,
            maxWidth: `100vw`,
          }}
        >
          <Box
            paddingX={["16px", "32px"]}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MarqueeC>FAQ FAQ FAQ FAQ</MarqueeC>
            <Image
              src="/clickerthinger.png"
              alt=""
              onClick={onClose}
              width="25px"
              height="27px"
              placeSelf={"center"}
              marginLeft={["16px", "36px"]}
              _hover={{
                cursor: `pointer`,
              }}
            />
          </Box>
          <ModalBody
            sx={{
              letterSpacing: `.1em`,
              textShadow: `0px 3px 5px 0px #00000040;`,
              lineHeight: `23px`,
              fontSize: `16px`,
              fontFamily: `'Roboto Mono', sans-serif`,
              textTransform: `uppercase`,
              maxHeight: `80vh`,
              overflowY: `auto`,
              width: `full`,
            }}
          >
            <Text>CLICKING DONATE WILL COPY AN ADDRESS TO YOUR CLIPBOARD.</Text>
            <br />
            <Text>
              TRANSFER WHICHEVER TOKENS YOU LIKE THERE FROM YOUR WALLET.
            </Text>
            <br />
            <Text>DONATIONS WILL SUPPORT ARTISTS INVOLVED IN THE PROJECT.</Text>
            <br />
            <Text>
              SWAP NFTS FOR $TRASH AT THE
              <Link
                href="https://szns.io/album/trashdao/bounty_board"
                isExternal
                color="#FFEE04"
                _focus={{
                  outline: `none`,
                }}
              >
                BOUNTY BOARD
              </Link>{" "}
              .
            </Text>
            <br />
          </ModalBody>
          <ModalFooter
            sx={{ margin: `0 auto` }}
            paddingBottom={["32px", "64px"]}
          ></ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
}
