import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navigation from "./Navigation";

import AboutModal from "./AboutModal";
import DonateModal from "./DonateModal";
import FaqModal from "./FaqModal";
import GovModal from "./GovModal";
import GalleryGrid from "./GalleryGrid";
import IFrame from "./IFrame";
import { useInjectedProvider } from "./InjectedProviderContext";

export default function ToggleImages({
  active,
  handleChangeActive,
  onClick,
  onOpen,
}) {
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

  const handleConnect = useCallback(() => {
    console.log("Connecting to injected provider...");
    connectProvider();
  }, [connectProvider]);

  const [isActive, setActive] = useState();
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const navProps = {
    isFaqOpen,
    onFaqOpen,
    onFaqClose,
    isAboutOpen,
    onAboutOpen,
    onAboutClose,
    isGovOpen,
    onGovOpen,
    onGovClose,
    isDonateOpen,
    onDonateOpen,
    onDonateClose,
  };

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
              onClick={handleChangeActive}
              width={["90%", "40%"]}
              sx={{ cursor: "pointer" }}
              id="trash-bag"
              alt=""
            />
            <Text
              sx={{
                color: "#06FA1D",
                fontFamily: "Roboto Mono",
                fontWeight: "700",
                fontSize: "24px",
                textTransform: "uppercase",
                position: "absolute",
                top: "59%",
                cursor: "pointer",
              }}
              onClick={handleChangeActive}
            >
              Got Trash?
            </Text>
          </Box>
        </Box>

        {/* After Trash Bag Explodes */}
        <Box sx={{ display: active ? "block" : "none" }}>
          <header>
            <SimpleGrid id="header-with-logo" columns={[1, 2]} spacing={0}>
              <UnorderedList>
                <ListItem>
                  <Box>
                    <Image
                      id="mobile-trash-logo"
                      src="/Trash.gif"
                      alt="trash art yo"
                    />
                  </Box>
                </ListItem>
                <ListItem>
                  <Box className="logo" sx={{ padding: "25px" }}>
                    <Box
                      sx={{
                        background: "#72F44A",
                        transform: "rotate(-1.68deg)",
                        width: "178px",
                        textAlign: "center",
                      }}
                      _hover={{
                        backgroundColor: "white",
                      }}
                    >
                      <Link
                        href="/"
                        _hover={{
                          textDecoration: "none",
                        }}
                        _focus={{
                          outline: "none",
                        }}
                      >
                        TrashDAO
                      </Link>
                    </Box>
                    <br />
                    <Text
                      fontSize="sm"
                      sx={{
                        color: "#72F44A",
                        fontWeight: "700",
                        width: "178px",
                      }}
                    >
                      A Trash Artists Collab
                      <br />
                      Powered by SZNS
                    </Text>
                  </Box>
                </ListItem>
              </UnorderedList>
              <Box
                sx={{
                  padding: "25px",
                  textAlign: "right",
                }}
              >
                <Navigation navProps={navProps} />
              </Box>
            </SimpleGrid>
          </header>
          {/* Start Trash Container */}
          {/* Grid time baby */}
          <SimpleGrid id="trash-pillar" columns={[1, 3]} spacing={5}>
            <Box sx={{ margin: "0 auto" }}>
              <Image
                className="active remove-on-mobile"
                src="/jd-collab-edit.gif"
                id="exploded-trash-bag"
                alt=""
              />
            </Box>
            <Box sx={{ textAlign: "center", color: "#72f44a" }}>
              <Heading sx={{ color: "#72f44a" }}>NFTs are $TRASH</Heading>
              <Heading as="h4" size="sm">
                Swap any* NFT for 69 $TRASH
              </Heading>

              <Box
                sx={{
                  marginTop: "50px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {/* TOGGLE GalleryGrid & IFrame */}
                <Button
                  id="swap-button"
                  margin={["15px", "25px"]}
                  sx={{
                    backgroundColor: "#72F44A",
                    color: "black",
                    fontSize: "1.5em",
                    fontFamily: "Roboto Mono, sans-serif",
                    padding: "12px 16px",
                    borderRadius: "unset",
                    transform: "rotate(-1.5deg)",
                  }}
                  _hover={{
                    backgroundColor: "white",
                  }}
                  onClick={ToggleClass}
                >
                  {isActive ? (
                    <Text>SEE DEPOSITED $TRASH</Text>
                  ) : (
                    <Text>SWAP NFTs FOR $TRASH</Text>
                  )}
                </Button>
                {/* TOGGLE GalleryGrid & IFrame */}
              </Box>
            </Box>
            <Box sx={{ margin: "0 auto" }}>
              <Image
                className="active remove-on-mobile"
                src="/jd-collab-edit.gif"
                id="exploded-trash-bag"
                alt=""
              />
            </Box>
          </SimpleGrid>
          {/* Grid time baby */}
          <Divider
            sx={{
              background: "#72f44a",
              height: "4px",
              width: "auto",
              margin: "25px",
              border: "0px",
              opacity: "1",
              borderBottomWidth: "0px",
            }}
          />
          <div className={isActive ? "showgrid" : "hidegrid"}>
            <GalleryGrid />
          </div>
          <div className={isActive ? "hidegrid" : "showgrid"}>
            <IFrame />
          </div>
          {/* End Trash Container */}
        </Box>
      </Box>
    </>
  );
}
