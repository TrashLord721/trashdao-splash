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
import { useCallback } from "react";
import Columned from "react-columned";
import toast from "react-hot-toast";

import AboutModal from "./AboutModal";
import DonateModal from "./DonateModal";
import FaqModal from "./FaqModal";
import GovModal from "./GovModal";
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
                        outline: "none",
                      }}
                    >
                      <ListItem className="nav-link" onClick={onFaqOpen}>
                        FAQ
                      </ListItem>
                    </Link>
                    <Link
                      href="#"
                      _focus={{
                        outline: "none",
                      }}
                    >
                      <ListItem className="nav-link" onClick={onAboutOpen}>
                        About
                      </ListItem>
                    </Link>

                    <Link
                      href="#"
                      _focus={{
                        outline: "none",
                      }}
                    >
                      <ListItem className="nav-link" onClick={onGovOpen}>
                        Governance
                      </ListItem>
                    </Link>

                    <Link
                      href="#"
                      _focus={{
                        outline: "none",
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
                      outline: "none",
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
                      outline: "none",
                    }}
                  >
                    <Image
                      src="/twitter.png"
                      alt="Twitter"
                      width="25.5"
                      height="20.55"
                      sx={{ cursor: "pointer" }}
                      _focus={{
                        outline: "none",
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
            <Box sx={{ margin: "0 auto" }}>
              <Image
                className="active"
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
                <Button
                  sx={{
                    backgroundColor: "#72F44A",
                    color: "black",
                    fontSize: "1.5em",
                    fontFamily: "Roboto Mono, sans-serif",
                    margin: "15px",
                    padding: "12px 16px",
                    borderRadius: "unset",
                    transform: "rotate(-1.5deg)",
                  }}
                  _hover={{
                    backgroundColor: "white",
                  }}
                  onClick={handleConnect}
                >
                  {address !== null ? (
                    <Text>{address}</Text>
                  ) : (
                    <Text>Connect Wallet</Text>
                  )}
                </Button>
                <Button
                  sx={{
                    opacity: ".5",
                    backgroundColor: "#72F44A",
                    color: "black",
                    fontSize: "1.5em",
                    fontFamily: "Roboto Mono, sans-serif",
                    margin: "15px",
                    padding: "12px 16px",
                    borderRadius: "unset",
                    transform: "rotate(-1.5deg)",
                  }}
                  _hover={{
                    backgroundColor: "white",
                  }}
                >
                  SWAP NFTs FOR $TRASH
                </Button>
              </Box>
            </Box>
            <Box sx={{ margin: "0 auto" }}>
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
              background: "#72f44a",
              height: "4px",
              width: "auto",
              margin: "25px",
              border: "0px",
              opacity: "1",
              borderBottomWidth: "0px",
            }}
          />
          <Columned>
            <Image
              alt="Image 1"
              src={
                "https://lh3.googleusercontent.com/hnSy8Iglj6l_OGCl4LryWQoakHNRz8xVISSP6cWYdTHFbQ8BJMiwZ-xVuhmwAYvfgFyKsA8yVxDW4ZuCSD2tWpqWQ4bE5i7-RE6Q=s0"
              }
            />
            <Image
              alt="Image 2"
              src={
                "https://lh3.googleusercontent.com/UM-9DqeCM5vvs8N753h0YbRbjavyuubEfUn0R2Nw7bl2GtAAuw1_fVc201Q_z4AVmAHHLH9sDzbqiTK1WGsK3FcSG74s69faJH9ZNX0=s0"
              }
            />
            <Image
              alt="Image 3"
              src={
                "https://lh3.googleusercontent.com/4IZW2e-nqWCedNPFQsL_ttS3dYaIEDRZDbZ38OFTnBHQIDejKPWYqBmqsSPvyZh70ePR5BOFxxorBwdHNkduXmYcRB66nGjEJ2GGyw=s0"
              }
            />
            <Image
              alt="Image 4"
              src={
                "https://lh3.googleusercontent.com/bANPR-eNS3n-UplgXGWEZ3H-S161WxgoC4MeVGNmxOZlGsN2ZJdr-D-793quy3Zxi5rQCHD7Ui9BCKzZrUiPikVIOTxgVjCrs1AJhg"
              }
            />
            <Image
              alt="Image 5"
              src={
                "https://lh3.googleusercontent.com/LOTYDNEFGYE5n5IwEDjWTCxkquIz33Ir0szcxzEA9DTts9Xpa7Q4y59wcdz8BGJezGYw85ImlGIMmFyEGcr0trQXP6Tg4ZeZJCY1_l4"
              }
            />
            <Image
              alt="Image 6"
              src={
                "https://lh3.googleusercontent.com/2-GlZGSFW9ilzadcL2c28SV6sOdWKIfklEdA6hlmg996LvYeyk5AjZUOBoK64EIru_sgslLCk3g1QbCURzPE8xNy_k8dcTGxatfS3Es"
              }
            />
            <Image
              alt="Image 7"
              src={
                "https://lh3.googleusercontent.com/EYWYyffuoWIkntbYLOPPmH-TuqxVQiZUefwDOD_3ApYgzBtQCCZCYjNo13hpyovRK9nreXFD0kb08JYSYSaKRAJxzP-rAgkm1cg2MQ=w600"
              }
            />
            <Image
              alt="Image 8"
              src={
                "https://lh3.googleusercontent.com/E5rNkPPaBQcAjLc_JZe0vlQhdD8B8qGEFkJAWOJiY8TydiapTJarsN4lcyWCITSgQXF7gLw8L-WTyKqZ8QKMNmpdryHumyNnj1ybGmg"
              }
            />
            <Image
              alt="Image 8"
              src={
                "https://lh3.googleusercontent.com/nFFIjV1c8G3sdBDST7OmziHZMTJmc54Hm4iFxKuUOOO37DdF1lKL0c6Ko4rk1lm-p7jk6oygRXi2o4wiOpmuWliPWl45cL9wr3wB1w=w600"
              }
            />
            <Image
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
