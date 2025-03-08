import {
    useColorModeValue,
    Text,
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import DemoCard from './cardsdemo';

  export default function DemoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'l'}
            //   colorScheme={'yellow'}
              fontWeight={400}
              variant={'outline'}
              mr={2}
              _hover={{
                transform: 'translateY(1px)',
              }}
                onClick={onOpen}>
            Browse Videos
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
          <ModalOverlay />
          <ModalContent bg={useColorModeValue('gray.100', 'gray.900')}>
            <ModalHeader>Demo options</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <Text fontWeight={600} color={'gray.500'} mb={4} px={6}>
            How do you want to get your demo?
            </Text>
            <DemoCard/>
          </ModalContent>
        </Modal>
      </>
    )
  }