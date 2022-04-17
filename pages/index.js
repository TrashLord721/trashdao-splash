import Head from "next/head";
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  IconButton,
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
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";
import Columned from "react-columned";
import MarqueeC from "../components/MarqueeC";
import SixNineTrash from "../components/SixNineTrash";
import { useInjectedProvider } from "../components/InjectedProviderContext";

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

  const handleClick = () => {
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
  };
  const handleEnd = () => {
    // I'm not sure if this is working...
    setPlaying(false);
    console.log("song ended!");
  };

  {
    /* Main Container */
  }
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
{
  /* End Main Container */
}

function ToggleImages({ active, handleChangeActive, onClick, onOpen }) {
  const {
    isOpen: isFaqOpen,
    onOpen: onFaqOpen,
    onClose: onFaqClose,
  } = useDisclosure();
  const {
    isOpen: isAboutOpen,
    onOpen: onAboutOpen,
    onClose: onAboutClose,
  } = useDisclosure();
  const {
    isOpen: isGovOpen,
    onOpen: onGovOpen,
    onClose: onGovClose,
  } = useDisclosure();
  const {
    isOpen: isDonateOpen,
    onOpen: onDonateOpen,
    onClose: onDonateClose,
  } = useDisclosure();

  const CopyAddress = async () => {
    const res = await navigator.clipboard.writeText(
      "0x2Ea988868c0575a5803e841291B605BAfAD0A9cD"
    );
    toast.success("Address In Clipboard");
  };

  const {
    address,
    isUpdating,
    connectProvider,
    disconnectDapp,
    injectedChain,
    injectedProvider,
  } = useInjectedProvider();

  return (
    <>
      <Box
        className="toggle-wrapper"
        onClick={onClick}
        sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
      >
        <FaqModal isOpen={isFaqOpen} onOpen={onFaqOpen} onClose={onFaqClose} />
        <AboutModal
          isOpen={isAboutOpen}
          onOpen={onAboutOpen}
          onClose={onAboutClose}
        />
        <GovModal isOpen={isGovOpen} onOpen={onGovOpen} onClose={onGovClose} />
        <DonateModal
          isOpen={isDonateOpen}
          onOpen={onDonateOpen}
          onClose={onDonateClose}
          copyAddress={CopyAddress}
        />

        {/* Before Trash Bag Explodes */}
        <Box
          className="inactive trash-container"
          sx={{ display: active ? "none" : "block" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/Trash.gif"
              onClick={() => handleChangeActive()}
              width={["90%", "40%"]}
              sx={{ cursor: `pointer` }}
              id="trash-bag"
              alt=""
            />
            <Text
              sx={{
                color: "#06FA1D",
                fontFamily: "Roboto Mono",
                fontWeight: `700`,
                fontSize: `24px`,
                textTransform: "uppercase",
                position: "absolute",
                top: "59%",
                cursor: `pointer`,
              }}
              onClick={() => handleChangeActive()}
            >
              Got Trash?
            </Text>
          </Box>
        </Box>

        {/* After Trash Bag Explodes */}
        <Box sx={{ display: active ? "block" : "none" }}>
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
                  _hover={{
                    backgroundColor: `white`,
                  }}
                >
                  <Link
                    href="/"
                    _hover={{
                      textDecoration: `none`,
                    }}
                    _focus={{
                      outline: `none`,
                    }}
                  >
                    TrashDAO
                  </Link>
                </Box>
                <br />
                <Text
                  fontSize="sm"
                  sx={{ color: "#72F44A", fontWeight: "700", width: "178px" }}
                >
                  A Trash Artists Collab
                  <br />
                  Powered by SZNS
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
                  {/* navigation */}
                  <UnorderedList>
                    <Link
                      href="#"
                      _focus={{
                        outline: `none`,
                      }}
                    >
                      <ListItem className="nav-link" onClick={onFaqOpen}>
                        FAQ
                      </ListItem>
                    </Link>
                    <Link
                      href="#"
                      _focus={{
                        outline: `none`,
                      }}
                    >
                      <ListItem className="nav-link" onClick={onAboutOpen}>
                        About
                      </ListItem>
                    </Link>

                    <Link
                      href="#"
                      _focus={{
                        outline: `none`,
                      }}
                    >
                      <ListItem className="nav-link" onClick={onGovOpen}>
                        Governance
                      </ListItem>
                    </Link>

                    <Link
                      href="#"
                      _focus={{
                        outline: `none`,
                      }}
                    >
                      <ListItem className="nav-link" onClick={onDonateOpen}>
                        Donate
                      </ListItem>
                    </Link>
                  </UnorderedList>
                  {/* navigation */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                  }}
                >
                  <Link
                    href="https://discord.gg/ySPNt97G7P"
                    target="_blank"
                    _focus={{
                      outline: `none`,
                    }}
                  >
                    <Image
                      src="/discord.png"
                      alt="Discord"
                      width="28.55"
                      height="21.76"
                      sx={{ marginRight: "16px", cursor: "pointer" }}
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/Trash_DAO"
                    target="_blank"
                    _focus={{
                      outline: `none`,
                    }}
                  >
                    <Image
                      src="/twitter.png"
                      alt="Twitter"
                      width="25.5"
                      height="20.55"
                      sx={{ cursor: "pointer" }}
                      _focus={{
                        outline: `none`,
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </SimpleGrid>
          </header>

          {/* Start Trash Container */}

          {/* Grid time baby */}
          <SimpleGrid id="trash-pillar" columns={3} spacing={5}>
            <Box sx={{ margin: `0 auto` }}>
              <Image
                className="active"
                src="/jd-collab-edit.gif"
                id="exploded-trash-bag"
                alt=""
              />
            </Box>
            <Box sx={{ textAlign: `center`, color: `#72f44a` }}>
              <Heading sx={{ color: `#72f44a` }}>NFTs are $TRASH</Heading>
              <Heading as="h4" size="sm">
                Swap any* NFT for 69 $TRASH
              </Heading>
              <Box
                sx={{
                  marginTop: `50px`,
                  display: `flex`,
                  flexDirection: `row`,
                  justifyContent: `center`,
                }}
              >
                <Button
                  sx={{
                    backgroundColor: `#72F44A`,
                    color: `black`,
                    fontSize: `1.5em`,
                    fontFamily: "Roboto Mono, sans-serif",
                    margin: `15px`,
                    padding: `12px 16px`,
                    borderRadius: `unset`,
                    transform: `rotate(-1.5deg)`,
                  }}
                  _hover={{
                    backgroundColor: `white`,
                  }}
                  onClick={() => connectProvider()}
                >
                  CONNECT WALLET
                </Button>

                {address}
                <Button
                  sx={{
                    opacity: `.5`,
                    backgroundColor: `#72F44A`,
                    color: `black`,
                    fontSize: `1.5em`,
                    fontFamily: "Roboto Mono, sans-serif",
                    margin: `15px`,
                    padding: `12px 16px`,
                    borderRadius: `unset`,
                    transform: `rotate(-1.5deg)`,
                  }}
                  _hover={{
                    backgroundColor: `white`,
                  }}
                >
                  SWAP NFTs FOR $TRASH
                </Button>
              </Box>
            </Box>
            <Box sx={{ margin: `0 auto` }}>
              <Image
                className="active"
                src="/jd-collab-edit.gif"
                id="exploded-trash-bag"
                alt=""
              />
            </Box>
          </SimpleGrid>
          {/* Grid time baby */}

          <Divider
            sx={{
              background: `#72f44a`,
              height: `4px`,
              width: `auto`,
              margin: `25px`,
              border: `0px`,
              opacity: `1`,
              borderBottomWidth: `0px`,
            }}
          />
          <Columned>
            <img
              alt="Image 1"
              src={
                "https://lh3.googleusercontent.com/hnSy8Iglj6l_OGCl4LryWQoakHNRz8xVISSP6cWYdTHFbQ8BJMiwZ-xVuhmwAYvfgFyKsA8yVxDW4ZuCSD2tWpqWQ4bE5i7-RE6Q=s0"
              }
            />
            <img
              alt="Image 2"
              src={
                "https://lh3.googleusercontent.com/UM-9DqeCM5vvs8N753h0YbRbjavyuubEfUn0R2Nw7bl2GtAAuw1_fVc201Q_z4AVmAHHLH9sDzbqiTK1WGsK3FcSG74s69faJH9ZNX0=s0"
              }
            />
            <img
              alt="Image 3"
              src={
                "https://lh3.googleusercontent.com/4IZW2e-nqWCedNPFQsL_ttS3dYaIEDRZDbZ38OFTnBHQIDejKPWYqBmqsSPvyZh70ePR5BOFxxorBwdHNkduXmYcRB66nGjEJ2GGyw=s0"
              }
            />
            <img
              alt="Image 4"
              src={
                "https://lh3.googleusercontent.com/bANPR-eNS3n-UplgXGWEZ3H-S161WxgoC4MeVGNmxOZlGsN2ZJdr-D-793quy3Zxi5rQCHD7Ui9BCKzZrUiPikVIOTxgVjCrs1AJhg"
              }
            />
            <img
              alt="Image 5"
              src={
                "https://lh3.googleusercontent.com/LOTYDNEFGYE5n5IwEDjWTCxkquIz33Ir0szcxzEA9DTts9Xpa7Q4y59wcdz8BGJezGYw85ImlGIMmFyEGcr0trQXP6Tg4ZeZJCY1_l4"
              }
            />
            <img
              alt="Image 6"
              src={
                "https://lh3.googleusercontent.com/2-GlZGSFW9ilzadcL2c28SV6sOdWKIfklEdA6hlmg996LvYeyk5AjZUOBoK64EIru_sgslLCk3g1QbCURzPE8xNy_k8dcTGxatfS3Es"
              }
            />
            <img
              alt="Image 7"
              src={
                "https://lh3.googleusercontent.com/EYWYyffuoWIkntbYLOPPmH-TuqxVQiZUefwDOD_3ApYgzBtQCCZCYjNo13hpyovRK9nreXFD0kb08JYSYSaKRAJxzP-rAgkm1cg2MQ=w600"
              }
            />
            <img
              alt="Image 8"
              src={
                "https://lh3.googleusercontent.com/E5rNkPPaBQcAjLc_JZe0vlQhdD8B8qGEFkJAWOJiY8TydiapTJarsN4lcyWCITSgQXF7gLw8L-WTyKqZ8QKMNmpdryHumyNnj1ybGmg"
              }
            />
            <img
              alt="Image 8"
              src={
                "https://lh3.googleusercontent.com/nFFIjV1c8G3sdBDST7OmziHZMTJmc54Hm4iFxKuUOOO37DdF1lKL0c6Ko4rk1lm-p7jk6oygRXi2o4wiOpmuWliPWl45cL9wr3wB1w=w600"
              }
            />
            <img
              alt="Image 8"
              src={
                "https://openseauserdata.com/files/a7b989d5795924748453e104e165bbd5.svg"
              }
            />
          </Columned>
          {/* End Trash Container */}
        </Box>
      </Box>
    </>
  );
}

function AboutModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={[`100%`, `50%`]}
          height={[`80vh`, "90vh"]}
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
            <MarqueeC>ABOUT ABOUT ABOUT ABOUT ABOUT</MarqueeC>
            <IconButton
              colorScheme="black"
              onClick={onClose}
              placeSelf={"center"}
              marginLeft={["16px", "36px"]}
              _focus={{
                outline: `none`,
              }}
              icon={
                <Image
                  src="/clickerthinger.png"
                  alt=""
                  onClick={onClose}
                  width="25px"
                  height="27px"
                  _hover={{
                    cursor: `pointer`,
                  }}
                />
              }
            ></IconButton>
          </Box>
          <ModalBody
            sx={{
              letterSpacing: `.1em`,
              textShadow: `0px 3px 5px 0px #00000040;`,
              lineHeight: `23px`,
              fontSize: `20px`,
              textTransform: `uppercase`,
              maxHeight: `80vh`,
              overflowY: `auto`,
              width: `full`,
            }}
          >
            <Heading>
              How do we assign value in the age of digital reproduction?
            </Heading>
            <br />
            <Text>
              Some believe NFTs are trash. Others believe trash is art. We
              believe it can be all.
              <br />
              <br />
              Value can be subjective, and we get to collectively decide in what
              we place value to. One element TrashDAO is experimenting with is
              decentralizing curated image practices. Curation has historically
              been a centralized process involving a few key individuals within
              the confines of esteemed institutions. With TrashDAO, each
              individual adding an NFT to the ‘trashpile’ is curating and
              therefore adding value to the visual dialogue that is TrashDAO.
            </Text>
            <br />
            <Heading>How is TrashDAO fostering collective ownership?</Heading>
            <br />
            <Text>
              We are currently in the earliest innings in the development of
              DAOs where lots of challenges exist with regard to decentralized
              coordination. TrashDAO is an experiment by which we aim to explore
              the limits and possibilities of truly decentralized coordination
              via tokenholder voting that gets executed on-chain without
              trusting a simple multisig of owners.
            </Text>
            <br />
            <Text>
              DAO token holders vote to determine the direction of the project
              to create an evolving and living work of TRASH ART.
            </Text>
            <br />
            <Heading>TrashDAO Tokenomics and Album Governance</Heading>
            <br />
            <strong>Total Supply:</strong> ∞
            <br />
            <strong>Community:</strong> 100%
            <br />
            <strong>Treasury:</strong> To be determined by Community
            <br />
            <strong>LP Incentive:</strong> To be determined by community
            <br />
            <strong>Founders:</strong> 0%
            <br />
            <strong>Investors:</strong> N/A
            <br />
            <br />
            <Text>
              $TRASH does not have any prior determined allocations and is 100%
              minted by the community. It is truly a decentralized “fair launch”
              approach to tokenomics. At time of launch, the only way of
              acquiring $TRASH is via depositing trash to the TrashDAO. Swap any
              NFT from the qualified contracts and receive 69 $TRASH tokens in
              return. Using the SZNS interface, TrashDAO members can make other
              standardized proposals as a DAO member.
            </Text>
            <br />
            <Text>
              The tokenomics are vague and equal for a reason. And the future of
              the project is unwritten. We implore the community to shape the
              DAO as they desire and submit proposals with SZNS. For example, a
              proposal to award users with even more $TRASH based on certain
              NFTs, deposit a non-trash NFT (or is it still trash) such as a
              Bored Ape, and receives 42069 $TRASH in return. Uncap the total
              supply? The possibilities are endless.
            </Text>
            <br />
            <Heading>Inspiration from the Trash Art Movement</Heading>
            <br />
            <Text>
              Artistic inspiration for the TrashDAO effort comes from visions
              created in the TRASH ART community, legends like Jay Delay and
              projects such as Rats.Art. There is existing literature around the
              Crypto Trash Art movement, but to summarize,{" "}
              <Link
                href="https://nfts.wtf/what-exactly-is-trash-art/"
                isExternal
                color="#72F44A"
                _focus={{
                  outline: `none`,
                }}
              >
                Trash Art
              </Link>{" "}
              has three essential parts – the movement, the meme and the
              aesthetic.
            </Text>
            <br />
            <Text>
              The movement: Trash Art brings an irreverent attitude to the NFT
              space promoting decentralized open-platforms, anti-gatekeeping,
              remix culture, and the democratization of art.
            </Text>
            <br />
            <Text>
              The meme: Robness’{" "}
              <Link
                href="https://opensea.io/assets/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/7323"
                isExternal
                color="#72F44A"
                _focus={{
                  outline: `none`,
                }}
              >
                The 64-gallon toter
              </Link>{" "}
              became the memetic symbol of the movement.
            </Text>
            <br />
            <Text>
              The aesthetic: Embodies the ideals of Dada, Punk, and Crypto
              combined with a lo-fi glitch aesthetic or digital folk art
              style.TrashDAO takes inspiration from both the philosophy of the
              movement as well as the aesthetic.
            </Text>
            <br />
            <Heading>Disclaimers</Heading>
            <br />
            <Text>
              There is a dedicated list of NFTs defined in the Bounty Board
              contract to prevent spam and aggressive minting of $TRASH. The DAO
              only accepts qualified ETH Mainnet ERC721s at launch. Proceed at
              your own risk and DYOR. The contract has been examined by big
              brain solidity folks, but no official audit has been performed!
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function DonateModal({ isOpen, onOpen, onClose }) {
  const CopyAddress = async () => {
    const res = await navigator.clipboard.writeText(
      "0x2Ea988868c0575a5803e841291B605BAfAD0A9cD"
    );
    toast.success("Address In Clipboard");
  };
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
            <MarqueeC>DONATE DONATE DONATE DONATE</MarqueeC>
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
          >
            <Button
              sx={{
                backgroundColor: "#72F44A",
                borderRadius: `25px`,
                textTransform: `uppercase`,
                color: `#E332F0`,
                boxShadow: `0px 8px 12px rgba(0, 0, 0, 0.25);`,
                padding: `4px`,
                textAlign: "center",
                fontWeight: `700`,
                marginLeft: `5px`,
              }}
              _focus={{
                outline: `none`,
              }}
              onClick={() => CopyAddress()}
            >
              COPY ADDRESS
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
}

function GovModal({ isOpen, onOpen, onClose }) {
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
            <MarqueeC>GOVERNANACE GOVERNANCE GOVERNANCE</MarqueeC>
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

function FaqModal({ isOpen, onOpen, onClose }) {
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
