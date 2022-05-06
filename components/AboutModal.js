import {
  Box,
  Heading,
  IconButton,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import MarqueeC from "./MarqueeC";

export default function AboutModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={["100%", "50%"]}
          height={["80vh", "90vh"]}
          sx={{
            backgroundColor: "black",
            border: "2px solid white",
            borderRadius: "0px",
            color: "#E332F0",
            maxWidth: "100vw",
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
                outline: "none",
              }}
              icon={
                <Image
                  src="/clickerthinger.png"
                  alt=""
                  onClick={onClose}
                  width="25px"
                  height="27px"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              }
            ></IconButton>
          </Box>
          <ModalBody
            sx={{
              letterSpacing: ".1em",
              textShadow: "0px 3px 5px 0px #00000040;",
              lineHeight: "23px",
              fontSize: "20px",
              textTransform: "uppercase",
              maxHeight: "80vh",
              overflowY: "auto",
              width: "full",
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
              we place value on. One element TrashDAO is experimenting with is
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
                  outline: "none",
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
                  outline: "none",
                }}
              >
                The 64-gallon toter
              </Link>{" "}
              became the memetic symbol of the movement.
            </Text>
            <br />
            <Text>
              The aesthetic: Embodies the ideals of Dada, Punk, and Crypto
              combined with a lo-fi glitch aesthetic or digital folk art style.
              TrashDAO takes inspiration from both the philosophy of the
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
