import { ReactNode } from 'react';
import {
  Link,
  Divider,
  Spacer,
  chakra,
  Radio, 
  RadioGroup,
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import React from 'react';
import DemoModal from '../sections/modaldemo';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  const [value, setValue] = React.useState('1')
  return (
    <Box mt={'14'}pt={12} bg={useColorModeValue('gray.50', 'gray.900')}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans tailored to needs.
        </Heading>
        <Text fontSize="lg" color={'gray.500'} maxW={'2xl'} paddingTop={3} px={2}>
          We offer subscription in three packages. 
          Test Gennbi Essential monthly plan and see our services in action! 
          Our Business and Premium packages will also be available starting from April 2022. 
          You can pre-order now, refunds are guaranteed.
        </Text>
        <Text fontSize="lg" color={'gray.500'} maxW={'2xl'} paddingBottom={3}>
          All prices include 15% VAT.
        </Text>
        <Divider/>
        <Spacer/>
        <RadioGroup onChange={setValue} value={value} px={'2'}>
          <Stack direction='row'>
            <Radio size='lg' colorScheme='yellow' value='1'>Billed Monthly</Radio>
            <Radio size='lg' colorScheme='yellow' value='2'>Billed Yearly</Radio>
            <Radio size='lg' colorScheme='yellow' value='3'>Pre-order</Radio>
          </Stack>
        </RadioGroup>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Essential
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                100
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
              <Text fontWeight="300" fontSize="sm">
                ETB payments @ daily forex rate
              </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.100', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                10 Projects
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                100 diagnostics/mo.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                Gennbi insights
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                Advanced & Expert tools
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="yellow" variant="solid">
                Buy Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Business
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  250
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
              <Text fontWeight="300" fontSize="sm">
                ETB payments @ daily forex rate
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue('gray.100', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="gray.500" />
                  Gennbi Essential +
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="gray.500" />
                  100 Projects
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="gray.500" />
                  1000 diagnostics/mo.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="gray.500" />
                  Team workspace
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="yellow">
                  Pre-order
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Premium
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                700
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
              <Text fontWeight="300" fontSize="sm">
                ETB payments @ daily forex rate
              </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.100', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                Gennbi Business +
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                Unlimited projects
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                Unlimited diagnostics
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="gray.500" />
                Premium support
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="yellow">
                Pre-order
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
        <Spacer/>
        <Divider/>
        <Spacer/>
            <Stack 
                  bg={useColorModeValue('gray.50', 'gray.900')}
                  py={6}
                  spacing="20px" 
                  textAlign={'center'}
                  alignContent={'center'}
                  align={'center'}>
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Not ready to buy yet?
              </chakra.h2>
        <Text fontSize="lg" color={'gray.500'} maxW={'2xl'} px={2} align={'center'}>
        Get a demo to see the key diagnostic workflows or start with Gennbi free 
        and get access to our standard tools and pre-construction databases. 
        </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} alignSelf={'center'} py={4}>
              <Button 
                as={Link}
                href={'#'}
                colorScheme="yellow"
                bgGradient="linear(yellow.200, yellow.300)"
                color={'black'}
                boxShadow={
                  '0px 1px 25px -5px rgb(236 200 50 / 48%), 0 10px 10px -5px rgb(236 200 50 / 43%)'
                }
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                  bg: 'yellow.300',
                }}>
                Start Gennbi Free
              </Button>
              <DemoModal/>
              </Stack>
            </Stack>
              <Divider/>
    </Box>
  );
}