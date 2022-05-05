import {
  Box,
  UnorderedList,
  ListItem,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Navigation(props) {
  const {
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
  } = props.navProps;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box id="desktop-menu">
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
      <Image ref={btnRef} src="./sandwich.png" onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        id="custom"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton sx={{ color: `#72f44a` }} />
          <Box>
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
            {/* navigation */}
            <UnorderedList id="drawer-menu">
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
