import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    useColorModeValue,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
  export default function Contact() {
    return (
      <Container bg={useColorModeValue('gray.50', 'gray.900')} maxW="full" mt={0}  centerContent overflow="hidden">
        <Flex>
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            color="gray"
            // shadow="inner"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 6 }}
            p={{ sm: 5, md: 5, lg: 6 }}>
            <Box p={4}>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 4 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                  <Box bg={useColorModeValue('white', 'gray.700')} borderRadius="lg" border="1px" borderColor="#E0E1E7">
                    <Box  p={6} color="gray">
                      <VStack spacing={4}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Your Message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            colorScheme="yellow"
                            bgGradient="linear(yellow.200, yellow.300)"
                            color={'black'}
                            boxShadow={
                            '0px 1px 25px -5px rgb(236 200 50 / 48%), 0 10px 10px -5px rgb(236 200 50 / 43%)'
                            }
                            _hover={{
                            textDecoration: 'none',
                            bg: 'yellow.300',
                            transform: 'translateY(1px)',
                            }}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }