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
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";

export default function Home() {
  const CopyAddress = async () => {
    const res = await navigator.clipboard.writeText(
      "0x2Ea988868c0575a5803e841291B605BAfAD0A9cD"
    );
    toast.success("Address In Clipboard");
  };

  const {
    isOpen: isNftOpen,
    onOpen: onNftOpen,
    onClose: onNftClose,
  } = useDisclosure();
  const {
    isOpen: isAboutOpen,
    onOpen: onAboutOpen,
    onClose: onAboutClose,
  } = useDisclosure();
  const {
    isOpen: isDonateOpen,
    onOpen: onDonateOpen,
    onClose: onDonateClose,
  } = useDisclosure();

  // toggle stuff
  const [active, setActive] = useState(false);

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
              <Text fontSize="sm" sx={{ color: "#72F44A", fontWeight: "700", width: "178px" }}>
                A Trash Artists Collab
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
                    _focus={{
                      outline: `none`,
                    }}
                  >
                    <ListItem
                      marginRight={["0px", "16px"]}
                      sx={{
                        background: "#72F44A",
                        width: "87px",
                        textAlign: "center",
                        display: "inline-block",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "700",
                        cursor: "pointer",
                        marginBottom: "16px",
                      }}
                      _hover={{
                        backgroundColor: `white`,
                      }}
                      onClick={onDonateOpen}
                    >
                      Donate
                    </ListItem>
                  </Link>

                  <Link
                    href="#"
                    _focus={{
                      outline: `none`,
                    }}
                  >
                    <ListItem
                      sx={{
                        background: "#72F44A",
                        width: "87px",
                        textAlign: "center",
                        display: "inline-block",
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "700",
                        cursor: "pointer",
                        marginBottom: "16px",
                      }}
                      _hover={{
                        backgroundColor: `white`,
                      }}
                      onClick={onAboutOpen}
                    >
                      About
                    </ListItem>
                  </Link>
                </UnorderedList>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                <Link
                  href="https://discord.gg/ySPNt97G7P"
                  target="_blank"
                  _focus={{
                    outline: `none`,
                  }}>
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
        <ToggleImages
          sx={{ margin: "0 auto", display: "block" }}
          active={active}
          handleChangeActive={handleChangeActive}
          onClick={() => {
            handleClick();
          }}
          isOpen={isNftOpen}
          onOpen={onNftOpen}
          onClose={onNftClose}
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
          <Link
            href="https://szns.io"
            target="#blank"
          >
            Powered by SZNS
          </Link>
        </Box>
        <audio id="song" src="/trashsong.mp3"></audio>
      </Box>
      <SwapNFTModal
        isOpen={isNftOpen}
        onOpen={onNftOpen}
        onClose={onNftClose}
      />
      <BasicUsage
        isOpen={isAboutOpen}
        onOpen={onAboutOpen}
        onClose={onAboutClose}
      />
      <DonateModal
        isOpen={isDonateOpen}
        onOpen={onDonateOpen}
        onClose={onDonateClose}
        copyAddress={CopyAddress}
      />
    </>
  );
}

function ToggleImages({ active, handleChangeActive, onClick, onOpen }) {
  return (
    <>
      <Box className="toggle-wrapper" onClick={onClick} sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
        <Box className="inactive" sx={{ display: active ? "none" : "block" }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/Trash.gif"
              onClick={() => handleChangeActive()}
              width={['90%', '40%']}
              sx={{ cursor: `pointer` }}
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

        <Box sx={{ display: active ? "block" : "none" }}>
          <Box  
            paddingBottom={["16px", "32px"]}
            sx={{display: "flex", justifyContent: "center", width: "full"}}
          >
            <Text 
              width={["327px", "366px"]}
              sx={{
                color: "#72F44A",
                textTransform: "uppercase",
                fontFamily: "Roboto Mono",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              An experiment in collective ownership & decentralized curation
            </Text>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              className="active"
              src="/jd-collab-edit.gif"
              width={['90%', '40%']}
              alt=""
            />
          </Box>
          <br />
          <UnorderedList
            sx={{
              color: `#72F44A`,
              fontFamily: `Roboto Mono`,
              fontWeight: `700`,
              fontSize: `16px`,
              textAlign: `center`,
              listStyle: `none`,
              marginLeft: '0px'
            }}
          >
            <ListItem sx={{ display: `inline-block`, marginRight: `5px` }}>
              <Link href="https://twitter.com/Jay_Delay" isExternal _hover={{
                textDecoration: `none`,
              }}>
                JAYDELAY
              </Link>
            </ListItem>
            <ListItem sx={{ display: `inline-block` }}>•</ListItem>
            <ListItem sx={{ display: `inline-block`, marginLeft: `5px` }}>
              <Link href="https://twitter.com/bitttylabs" isExternal _hover={{
                textDecoration: `none`,
              }}>
                BITTTY
              </Link>
            </ListItem>
          </UnorderedList>
          <br />
          <Box sx={{ display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
            <Button
              sx={{
                backgroundColor: `#72F44A`,
                color: `black`,
                fontSize: `2vmax`,
                fontFamily: 'Roboto Mono, sans-serif',
                padding: `8px`,
                borderRadius: `unset`
              }}
              _hover={{
                backgroundColor: `white`,
                transform: `translateY(-8px)`,
              }}
              _focus={{
                outline: `none`,
              }}
              onClick={onOpen}
            >
              SWAP NFT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function SwapNFTModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={[`100%`, `50%`]}
          height={'80vh'}
          sx={{
            backgroundColor: `#E45050`,
            border: `2px solid white`,
            borderRadius: "0px",
            color: `white`,
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
            <Text
              paddingTop={["16px", "32px"]}
              sx={{
                color: `#FFEE04`,
                textShadow: `0px 4px 4px rgba(0,0,0,0.3)`,
                fontSize: `6vmax`,
                textAlign: `center`,
                fontFamily: `'Epilogue', sans-serif`,
                width: "full"
              }}
            >
              SWAP NFT!
            </Text>
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
              textShadow: `0px 3px 5px rgba(0,0,0,0.25)`,
              lineHeight: `23px`,
              fontSize: `20px`,
              fontFamily: "Roboto Mono",
              width: "full",
              overflowY: 'auto',
            }}
          >
            <Text>
              Trash DAO is an art and governance experiment.
              Continue to swap NFTs for $TRASH!, {" "}
            </Text>
            <br />
            <Heading
              sx={{
                letterSpacing: ".1em",
                fontSize: "20px",
                textDecoration: `underline`,
                padding: `10px 0px`,
              }}
            >
              Smart Contract
            </Heading>
            <Text>
              While the contracts have been reviewed by an experienced solidity
              developer, there are always risks in smart contracts. Smart contracts
              are still new and experimental technology. By interacting with this smart
              contract you accept this risk and absolve the developers, community members, 
              and website host of all responsibility.
            </Text>
            <br />
          </ModalBody>
          <ModalFooter sx={{ margin: `0 auto` }}>
            <Link
              sx={{
                backgroundColor: "white",
                borderRadius: `25px`,
                textTransform: `uppercase`,
                color: `#E45050`,
                boxShadow: `0px 8px 12px rgba(0, 0, 0, 0.25);`,
                padding: `4px`,
                textAlign: "center",
                fontWeight: `700`,
                marginRight: `8px`,
              }}
              onClick={onClose}
              _focus={{
                outline: `none`,
              }}
              _hover={{
                textDecoration: `none`,
              }}
            >
              Cancel
            </Link>
            <Link
              sx={{
                backgroundColor: "#FFEE04",
                borderRadius: `25px`,
                textTransform: `uppercase`,
                color: `#E45050`,
                boxShadow: `0px 8px 12px rgba(0, 0, 0, 0.25);`,
                padding: `4px`,
                textAlign: "center",
                fontWeight: `700`,
                marginLeft: `8px`,
              }}
              _focus={{
                outline: `none`,
              }}
              _hover={{
                textDecoration: `none`,
              }}
              href="https://szns.io/album/trashdao/bounty_board"
              target="_blank"
            >
              Continue
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function BasicUsage({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={[`100%`, `50%`]}
          height={[`80vh`, '90vh']}
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
              flexDirection: "row"
            }}
          >
            <Marquee gradientWidth="0" speed="100">
              <Text
                paddingTop={["16px", "32px"]}
                sx={{
                  color: `#72F44A`,
                  textShadow: `0px 4px 4px rgba(0,0,0,0.3)`,
                  fontSize: `6vmax`,
                  fontFamily: `'Epilogue', sans-serif`,
                  marginRight: `15px`,
                }}
              >
                ABOUT ABOUT ABOUT ABOUT ABOUT
              </Text>
            </Marquee>
            <IconButton
              colorScheme="black"
              onClick={onClose}
              placeSelf={"center"}
              marginLeft={["16px", "36px"]}
              _focus={{
                outline: `none`,
              }}
              icon={<Image
                src="/clickerthinger.png"
                alt=""
                onClick={onClose}
                width="25px"
                height="27px"
                _hover={{
                  cursor: `pointer`,
                }}
              />}
            >
            </IconButton>

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
              <br /><br />
              Value can be subjective, and we get to collectively decide in
              what we place value to. One element TrashDAO is experimenting with
              is decentralizing curated image practices. Curation has historically
              been a centralized process involving a few key individuals within the
              confines of esteemed institutions. With TrashDAO, each individual adding
              an NFT to the ‘trashpile’ is curating and therefore adding value to the
              visual dialogue that is TrashDAO. 
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
              DAO token holders vote to determine the direction of the project to
              create an evolving and living work of TRASH ART.
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
              approach to tokenomics. At time of launch, the only way of acquiring
              $TRASH is via depositing trash to the TrashDAO. Swap any NFT from the
              qualified contracts and receive 69 $TRASH tokens in return. Using the SZNS
              interface, TrashDAO members can make other standardized proposals
              as a DAO member.
            </Text>
            <br />
            <Text>
              The tokenomics are vague and equal for a reason. And the future of the
              project is unwritten. We implore the community to shape the DAO as they
              desire and submit proposals with SZNS. For example, a proposal to award users
              with even more $TRASH based on certain NFTs, deposit a non-trash NFT (or is
              it still trash) such as a Bored Ape, and receives 42069 $TRASH in return.
              Uncap the total supply? The possibilities are endless.
            </Text>
            <br />
            <Heading>
              Inspiration from the Trash Art Movement
            </Heading>
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
              The meme: Robness’ {" "}
              <Link
                href="https://opensea.io/assets/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/7323"
                isExternal
                color="#72F44A"
                _focus={{
                  outline: `none`,
                }}
              >
                The 64-gallon toter
              </Link>{" "} became the memetic symbol of the movement.
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
              contract to prevent spam and aggressive minting of $TRASH.
              The DAO only accepts qualified ETH Mainnet ERC721s at launch.
              Proceed at your own risk and DYOR. The contract has been examined
              by big brain solidity folks, but no official audit has been
              performed!
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function DonateModal({ isOpen, onOpen, onClose, copyAddress }) {
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
              flexDirection: "row"
            }}
          >
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
                DONATE DONATE DONATE DONATE DONATE
              </Text>
            </Marquee>
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
            <Text>
              CLICKING DONATE WILL COPY AN ADDRESS TO YOUR CLIPBOARD.
            </Text>
            <br />
            <Text>
              TRANSFER WHICHEVER TOKENS YOU LIKE THERE FROM YOUR WALLET.
            </Text>
            <br />
            <Text>
              DONATIONS WILL SUPPORT ARTISTS INVOLVED IN THE PROJECT.
            </Text>
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
              </Link>.
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
              onClick={copyAddress}
            >
              COPY ADDRESS
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
