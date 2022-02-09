import Head from "next/head";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>TrashDAO - A Collab SZNS & Trash Artists</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: `100vh`,
          cursor: `url('/trashmouse.png'), auto`,
          minWidth: `100vw`,
        }}
      >
        <header>
          <SimpleGrid columns={2} spacing={0}>
            <Box className="logo" height="120px" sx={{ padding: "25px" }}>
              <Box
                sx={{
                  background: "#72F44A",
                  transform: "rotate(-1.68deg)",
                  width: "178px",
                  textAlign: "center",
                }}
              >
                <a href="#">TrashDAO</a>
              </Box>
              <br />
              <Text fontSize="sm" sx={{ color: "#72F44A", fontWeight: "700" }}>
                A collab SZNS & Trash Artists
              </Text>
            </Box>
            <Box
              height="120px"
              sx={{
                padding: "25px",
                textAlign: "right",
              }}
            >
              <Box>
                <UnorderedList>
                  <Link
                    href="#"
                    sx={{
                      width: "86px",
                      height: "26.57px",
                      background: "#72F44A",
                      transform: "rotate(0.64deg)",
                      margin: "5px",
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "inline-block",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "700",
                        padding: "5px",
                      }}
                      onClick={onOpen}
                    >
                      Swap NFT
                    </ListItem>
                  </Link>

                  <Link
                    href="#"
                    sx={{
                      width: "86px",
                      height: "26.57px",
                      background: "#72F44A",
                      transform: "rotate(0.64deg)",
                      margin: "5px",
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "inline-block",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "700",
                        padding: "5px",
                      }}
                    >
                      About
                    </ListItem>
                  </Link>
                </UnorderedList>
              </Box>
              <Box>
                <UnorderedList sx={{ float: "right" }}>
                  <Link href="https://discord.gg/ySPNt97G7P" target="_blank">
                    <ListItem sx={{ display: "inline-block", margin: "5px" }}>
                      <Image
                        src="/discord.png"
                        alt="Discord"
                        width="28.55"
                        height="21.76"
                        sx={{ margin: "0 auto", display: "block" }}
                      />
                    </ListItem>
                  </Link>
                  <Link href="https://twitter.com/Trash_DAO" target="_blank">
                    <ListItem sx={{ display: "inline-block", margin: "5px" }}>
                      <Image
                        src="/twitter.png"
                        alt="Twitter"
                        width="25.5"
                        height="20.55"
                        sx={{ margin: "0 auto", display: "block" }}
                      />
                    </ListItem>
                  </Link>
                </UnorderedList>
              </Box>
            </Box>
          </SimpleGrid>
        </header>
        <Image
          src="/Trash.gif"
          alt="Trash Bag"
          width="470"
          height="596"
          sx={{ margin: "0 auto", display: "block" }}
        />
      </Box>
      <SwapNFTModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

function SwapNFTModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          sx={{
            backgroundColor: `#E45050`,
            border: `2px solid white`,
            color: `white`,
            width: `clamp(100px, 50vw, 1200px)`,
            maxWidth: `100vw`,
          }}
        >
          <ModalHeader
            sx={{
              color: `#FFEE04`,
              textShadow: `0px 4px 4px rgba(0,0,0,0.3)`,
              fontSize: `4vmax`,
              textAlign: `center`,
              fontFamily: `'Epilogue', sans-serif`,
            }}
          >
            SWAP NFT!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Trash DAO is an experiment in decentralized governance and art.
              Continue to learn more, join the community (link discord trash
              category), and trade your NFTs for $TRASH.
            </Text>
            <Heading>Smart Contract</Heading>
            <Text></Text>
          </ModalBody>

          <ModalFooter>
            <Button
              sx={{ backgroundColor: "#FDF500" }}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function TrashMouse({ x, y }) {
  return (
    <Image
      src="/trashmouse.png"
      sx={{ position: `absolute`, left: `${x}`, top: `${y}` }}
      alt={""}
    />
  );
}
