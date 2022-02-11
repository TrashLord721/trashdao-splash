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
import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
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
        <title>TrashDAO - A Collab by Trash Artists</title>
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
                <Link href="/">TrashDAO</Link>
              </Box>
              <br />
              <Text fontSize="sm" sx={{ color: "#72F44A", fontWeight: "700" }}>
              A Collab by Trash Artists
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
                      onClick={onNftOpen}
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
                      onClick={onAboutOpen}
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
        <ToggleImages
          sx={{ margin: "0 auto", display: "block" }}
          active={active}
          handleChangeActive={handleChangeActive}
          onClick={() => {
            handleClick();
          }}
        />
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
    </>
  );
}


function ToggleImages({ active, handleChangeActive, onClick }) {
  return (
    <>
      <Box className="toggle-wrapper" onClick={onClick} sx={{ width: `100%` }}>
        {active ? (
          <Box>
          <img
            className="active"
            src="/jd-collab-edit.gif"
            width="470"
            height="596"
          />
          <br />
          <UnorderedList sx={{color:`#72F44A`,fontFamily:`Roboto Mono`,fontWeight:`700`,fontSize:`16px`,textAlign:`center`,listStyle:`none`}}>
            <ListItem sx={{display:`inline-block`,marginRight:`5px`}}><Link href="https://twitter.com/Jay_Delay" isExternal>JAYDELAY</Link></ListItem>
            <ListItem sx={{display:`inline-block`}}>•</ListItem>
            <ListItem sx={{display:`inline-block`,marginLeft:`5px`}}><Link href="https://twitter.com/robnessofficial" isExternal>ROBNESS</Link></ListItem>
          </UnorderedList>
          <br />
          {/* MACK MACK BUTTON TIME */}
          </Box>
        ) : (
          <img
            className="inactive"
            src="/Trash.gif"
            onClick={() => handleChangeActive()}
            width="470"
            height="596"
          />
        )}
      </Box>
    </>
  );
}

function SwapNFTModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={[`100%`, `50%`]}
          sx={{
            backgroundColor: `#E45050`,
            border: `2px solid white`,
            borderRadius: "0px",
            color: `white`,
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
          <Image
            src="/clickerthinger.png"
            sx={{
              position: `absolute`,
              top: `0px`,
              right: `0px`,
              padding: `50px 25px 0px 0px`,
            }}
            onClick={onClose}
          />
          <ModalBody
            sx={{
              letterSpacing: `.1em`,
              textShadow: `0px 3px 5px 0px #00000040;`,
              lineHeight: `23px`,
              fontSize: `20px`,
              width: [`100%`, `60%`],
              margin: `0 auto`,
            }}
          >
            <Text>
              Trash DAO is an experiment in decentralized governance and art.
              Continue to learn more, join the community (link discord trash
              category), and trade your NFTs for $TRASH.
            </Text>
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
              developer, there are always risks in smart contracts having
              issues. By interacting with this smart contract you accept this
              risk and absolve the developers, community members, and website
              host of [all] responsibility.
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
                width: "105px",
                textAlign: "center",
                fontWeight: `700`,
                marginRight: `5px`,
              }}
              onClick={onClose}
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
                width: "105px",
                textAlign: "center",
                fontWeight: `700`,
                marginLeft: `5px`,
              }}
              href="https://szns.io/explore"
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={[`100%`, `50%`]}
          height={`80vh`}
          sx={{
            backgroundColor: `black`,
            border: `2px solid white`,
            borderRadius: "0px",
            color: `#E332F0`,
            maxWidth: `100vw`,
          }}
        >
          <Image
            src="/clickerthinger.png"
            sx={{
              position: `absolute`,
              top: `0px`,
              right: `0px`,
              padding: `50px 25px 0px 0px`,
              zIndex: "9",
            }}
            onClick={onClose}
          />
          <Marquee gradientWidth="0" speed="100">
            <Text
              sx={{
                color: `#72F44A`,
                textShadow: `0px 4px 4px rgba(0,0,0,0.3)`,
                fontSize: `4vmax`,
                textAlign: `center`,
                fontFamily: `'Epilogue', sans-serif`,
              }}
            >
              ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
            </Text>
          </Marquee>
          <ModalBody
            sx={{
              letterSpacing: `.1em`,
              textShadow: `0px 3px 5px 0px #00000040;`,
              lineHeight: `23px`,
              fontSize: `20px`,
              textTransform: `uppercase`,
              maxHeight: `80vh`,
              overflowY: `scroll`,
              width: [`100%`, `60%`],
              margin: `15px auto`,
            }}
          >
            <Heading>
              How do we assign value in the age of digital reproduction?
            </Heading>
            <br />
            <Text>
              Some believe NFTs are trash. Others believe trash is art. We
              believe it can be all. Value can be subjective, and we get to
              collectively decide in what we place value to. One element
              TrashDAO is experimenting with is decentrally curated image
              practices. Street art or graffiti is a close IRL version of this
              case in point, but we’d like to play with this concept in crypto.{" "}
            </Text>
            <br />
            <Text>
              Each indivual adding an NFT to the ‘trashpile’ is curating and
              therefore adding to the visual dialougue that is TrashDAO.
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
              $TRASH does not have any prior determined allocations. It is truly
              a decentralized approach to tokenomics. At time of launch, the
              only way of acquiring $TRASH is via depositing trash to the Trash
              DAO. Swap any NFT from the qualified contracts and recieve 69
              $TRASH tokens in return. Using the SZNS interface, TrashDAO
              members can make other standardized proposals as a DAO member.
            </Text>
            <br />
            <Text>
              The tokenomics are vague and equal for a reason. We implore the
              community to shape the DAO as they desire and submit
              proposals(link) with SZNS. For example, a proposal to award users
              with even more $TRASH based on certain NFTs, deposit a non-trash
              NFT (or is it still trash) such as a Bored Ape, and receives
              $42069 TRASH in return, Uncap the total supply? The possibilities
              are endless.{" "}
            </Text>
            <br />
            <Heading>
              Inspiration from the Trash Art Movement (uncertain about this
              part){" "}
            </Heading>
            <br />
            <Text>
              Artistic inspiration for the TrashDAO effort comes from visions
              created in the Trash Art community, legends like Jay Delay and
              projects such as Rats.Art. There is existing literature around the
              Crypto Trash Art movement, but to summarize,{" "}
              <Link href="https://nfts.wtf/what-exactly-is-trash-art/" isExternal>
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
              The meme: Robness’ The 64-gallon toter(link) became the memetic
              symbol of the movement.{" "}
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
              contract (link) to prevent spam and aggressive minting of $TRASH.
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
