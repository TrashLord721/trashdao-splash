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
<<<<<<< HEAD
  const { isOpen: isNftOpen , onOpen: onNftOpen, onClose: onNftClose } = useDisclosure()
  const { isOpen: isAboutOpen , onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure()
=======
  const { isOpen, onOpen, onClose } = useDisclosure();
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e

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
<<<<<<< HEAD
                <a href="/">TrashDAO</a>
=======
                <a href="#">TrashDAO</a>
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
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
<<<<<<< HEAD
                      onClick={onNftOpen}
=======
                      onClick={onOpen}
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
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
<<<<<<< HEAD
                      onClick={onAboutOpen}
=======
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
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
<<<<<<< HEAD
      <SwapNFTModal isOpen={isNftOpen} onOpen={onNftOpen} onClose={onNftClose} />
      <BasicUsage isOpen={isAboutOpen} onOpen={onAboutOpen} onClose={onAboutClose} />
=======
      <SwapNFTModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
    </>
  );
}

function SwapNFTModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
<<<<<<< HEAD
        <ModalContent width={[`100%`, `50%`]}
          sx={{
            backgroundColor: `#E45050`,
            border: `2px solid white`,
            borderRadius: '0px',
            color: `white`,
=======
        <ModalContent
          sx={{
            backgroundColor: `#E45050`,
            border: `2px solid white`,
            color: `white`,
            width: `clamp(100px, 50vw, 1200px)`,
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
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
<<<<<<< HEAD
          <Image src="/clickerthinger.png" sx={{position:`absolute`, top:`0px`, right: `0px`, padding:`50px 25px 0px 0px`}} onClick={onClose} />
          <ModalBody sx={{letterSpacing:`.1em`,textShadow:`0px 3px 5px 0px #00000040;`,lineHeight:`23px`,fontSize:`20px`}}>
=======
          <ModalCloseButton />
          <ModalBody>
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
            <Text>
              Trash DAO is an experiment in decentralized governance and art.
              Continue to learn more, join the community (link discord trash
              category), and trade your NFTs for $TRASH.
            </Text>
<<<<<<< HEAD
            <Heading sx={{letterSpacing:'.1em',fontSize:'20px',textDecoration:`underline`,padding:`10px 0px`}}>Smart Contract</Heading>
            <Text>
              While the contracts have been reviewed by an experienced solidity developer, there are always risks in smart contracts having issues. By interacting with this smart contract you accept this risk and absolve the developers, community members, and website host of [all] responsibility.
            </Text>
          </ModalBody>

          <ModalFooter sx={{margin:`0 auto`}}>
            <Link sx={{ backgroundColor: "white", borderRadius:`25px`, textTransform:`uppercase`,color:`#E45050`,boxShadow: `0px 8px 12px rgba(0, 0, 0, 0.25);`, padding:`4px`, width:'105px',textAlign:'center',fontWeight:`700`,marginRight:`5px` }} onClick={onClose}>Cancel</Link>
            <Link sx={{ backgroundColor: "#FFEE04", borderRadius:`25px`, textTransform:`uppercase`,color:`#E45050`,boxShadow: `0px 8px 12px rgba(0, 0, 0, 0.25);`, padding:`4px`, width:'105px',textAlign:'center',fontWeight:`700`,marginLeft:`5px` }} href="https://szns.io/explore" target="_blank">Continue</Link>
=======
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
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

<<<<<<< HEAD

function BasicUsage({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={[`100%`, `50%`]}
          sx={{
            backgroundColor: `black`,
            border: `2px solid white`,
            borderRadius: '0px',
            color: `#E332F0`,
            maxWidth: `100vw`,
          }}
        >
          <ModalHeader
            sx={{
              color: `#72F44A`,
              textShadow: `0px 4px 4px rgba(0,0,0,0.3)`,
              fontSize: `4vmax`,
              textAlign: `center`,
              fontFamily: `'Epilogue', sans-serif`,
            }}
          >
            ABOUT
          </ModalHeader>
          <Image src="/clickerthinger.png" sx={{position:`absolute`, top:`0px`, right: `0px`, padding:`50px 25px 0px 0px`}} onClick={onClose} />
          <ModalBody sx={{letterSpacing:`.1em`,textShadow:`0px 3px 5px 0px #00000040;`,lineHeight:`23px`,fontSize:`20px`}}>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
=======
function TrashMouse({ x, y }) {
  return (
    <Image
      src="/trashmouse.png"
      sx={{ position: `absolute`, left: `${x}`, top: `${y}` }}
      alt={""}
    />
  );
}
>>>>>>> d21e5a95bf8c51047c69cf53442548ad56b7631e
