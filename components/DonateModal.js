import {
  Box,
  Button,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useCallback } from "react";
import toast from "react-hot-toast";

import MarqueeC from "./MarqueeC";

export default function DonateModal({ isOpen, onOpen, onClose }) {
  const CopyAddress = useCallback(async () => {
    const res = await navigator.clipboard.writeText(
      "0x2Ea988868c0575a5803e841291B605BAfAD0A9cD"
    );
    toast.success("Address In Clipboard");
  }, []);

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
            <Text>CLICKING DONATE WILL COPY AN ADDRESS TO YOUR CLIPBOARD.</Text>
            <br />
            <Text>
              TRANSFER WHICHEVER TOKENS YOU LIKE THERE FROM YOUR WALLET.
            </Text>
            <br />
            <Text>DONATIONS WILL SUPPORT ARTISTS INVOLVED IN THE PROJECT.</Text>
            <br />
          </ModalBody>
          <ModalFooter
            sx={{ margin: "0 auto" }}
            paddingBottom={["32px", "64px"]}
          >
            <Button
              sx={{
                backgroundColor: "#72F44A",
                borderRadius: "25px",
                textTransform: "uppercase",
                color: "#E332F0",
                boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.25);",
                padding: "4px",
                textAlign: "center",
                fontWeight: "700",
                marginLeft: "5px",
              }}
              _focus={{
                outline: "none",
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
