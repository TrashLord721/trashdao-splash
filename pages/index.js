import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function SwapNfts() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Link onClick={onOpen}>Open Modal</Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>stuff</Text>
          </ModalBody>

          <ModalFooter>
            <Button sx={{backgroundColor:'#FDF500'}} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>TrashDAO - A Collab SZNS & Trash Artists</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Box sx={{background:'#58BFAA'}}>
        <header>
          <SimpleGrid columns={2} spacing={0}>
            <Box className="logo" height='120px' sx={{background:'#58BFAA',padding:'25px'}}>
              <Box sx={{background: '#72F44A', transform: 'rotate(-1.68deg)', width:'178px', textAlign:'center'}}>
                <a href="#">TrashDAO</a>
              </Box>
              <br />
              <Text fontSize='sm' sx={{color:'#72F44A',fontWeight:'700'}}>A collab SZNS & Trash Artists</Text>
            </Box>
            <Box height='120px' sx={{background:'#58BFAA',padding:'25px',textAlign:'right'}}>
              <Box>
                <UnorderedList>
                  <Link href="#" sx={{width:'86px', height:'26.57px', background:'#72F44A',transform: 'rotate(0.64deg)',margin:'5px'}}><ListItem sx={{display:'inline-block',fontSize:'16px',textTransform:'uppercase',fontWeight:'700',padding:'5px'}}>Swap NFT</ListItem></Link>

                  <Link href="#" sx={{width:'86px', height:'26.57px', background:'#72F44A',transform: 'rotate(0.64deg)',margin:'5px'}}><ListItem sx={{display:'inline-block',fontSize:'16px',textTransform:'uppercase',fontWeight:'700',padding:'5px'}}>About</ListItem></Link>
                </UnorderedList>
              </Box>
              <Box>
                <UnorderedList sx={{float:'right'}}>
                    <Link href="https://discord.gg/ySPNt97G7P" target="_blank"><ListItem sx={{display:'inline-block',margin:'5px'}}><Image src="/discord.png" alt="Discord" width="28.55" height="21.76" sx={{margin:'0 auto',display:'block'}} /></ListItem></Link>
                    <Link href="https://twitter.com/Trash_DAO" target="_blank"><ListItem sx={{display:'inline-block',margin:'5px'}}><Image src="/twitter.png" alt="Twitter" width="25.5" height="20.55" sx={{margin:'0 auto',display:'block'}} /></ListItem></Link>
                  </UnorderedList>
              </Box>
            </Box>
          </SimpleGrid>
        </header>
        <Image src="/trashbag.png" alt="Trash Bag" width="470" height="596" sx={{margin:'0 auto',display:'block'}} />
      </Box>

      <SwapNfts />
      
    </>
  )
}

