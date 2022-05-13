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
import styles from "./ModalContent.module.scss";
import MarqueeC from "./MarqueeC";

export default function GovModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width={["100%", "50%"]}
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
                cursor: "pointer",
              }}
            />
          </Box>
          <ModalBody
            sx={{
              letterSpacing: ".1em",
              textShadow: "0px 3px 5px 0px #00000040;",
              lineHeight: "23px",
              fontSize: "16px",
              fontFamily: "'Roboto Mono', sans-serif",
              textTransform: "uppercase",
              maxHeight: "80vh",
              overflowY: "auto",
              width: "full",
            }}
          >
            <Text className={styles.modalContent}>
              TrashDAO is governed as a{" "}
              <Link
                href="https://docs.szns.io/core-components/albums"
                target="_blank"
                rel="noreferrer"
              >
                <a>SZNS Album</a>
              </Link>{" "}
              by the holders of $TRASH token. Anyone can acquire $TRASH by
              depositing NFTs into the{" "}
              <Link
                href="https://szns.io/album/trashdao/bounty_board"
                target="_blank"
                rel="noreferrer"
              >
                <a>Bounty Board</a>
              </Link>{" "}
              where all eligible NFTs equal 69 $TRASH.
            </Text>
            <br />
            <Text className={styles.modalContent}>
              Anyone holding $TRASH is able to submit proposals via the{" "}
              <Link
                href="https://szns.io/album/trashdao/"
                target="_blank"
                rel="noreferrer"
              >
                <a>Album Interface</a>
              </Link>
              , or via{" "}
              <Link
                href="https://snapshot.org/#/trashdao.szns.eth"
                target="_blank"
                rel="noreferrer"
              >
                <a>Snapshot</a>
              </Link>
              . Ask any further questions in the{" "}
              <Link
                href="https://discord.com/invite/ySPNt97G7P"
                target="_blank"
                rel="noreferrer"
              >
                <a>TrashDAO Discord</a>
              </Link>
              !
            </Text>
            <br />
          </ModalBody>
          <ModalFooter
            sx={{ margin: "0 auto" }}
            paddingBottom={["32px", "64px"]}
          ></ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
}
