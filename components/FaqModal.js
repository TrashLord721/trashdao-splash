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

export default function FaqModal({ isOpen, onOpen, onClose }) {
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
              fontFamily: '"Roboto Mono", sans-serif',
              textTransform: "uppercase",
              maxHeight: "80vh",
              overflowY: "auto",
              width: "full",
            }}
          >
            <h3 className={styles.faqQuestion}>Q: How do I acquire Trash?</h3>
            <Text>
              A: CLICKING DONATE WILL COPY AN ADDRESS TO YOUR CLIPBOARD.
            </Text>
            <br />
            <h3 className={styles.faqQuestion}>
              Q: What makes these NFTs qualified?
            </h3>
            <Text>
              The initial list of NFTs added to the TrashDAO acceptance included
              the first 5000 contracts on OpenSea that had more than 0.3 ETH in
              trading volume. See the current list{" "}
              <Link
                href="https://docs.google.com/spreadsheets/d/1V9ZFSONEML4hqf1qySDiETZq6ZQmIEeZLpwdA9Ssm7A/edit#gid=0"
                target="_blank"
                rel="noreferrer"
              >
                <a>here</a>
              </Link>
              .
            </Text>
            <br />
            <h3 className={styles.faqQuestion}>
              Q: Where is the TrashDAO going?
            </h3>
            <Text>
              The future of the TrashDAO will be determined by the $TRASH token
              holders. As a SZNS Album, the TrashDAO is governed via proposals
              voted on by token holders.
            </Text>
            <br />
          </ModalBody>
          <ModalFooter
            sx={{ margin: "0 auto" }}
            paddingBottom={["32px", "64px"]}
          ></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
