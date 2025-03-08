import {
    Spacer,
    Flex,
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { basename } from 'path/posix';
import {BsFillPlayBtnFill, BsFillCalendarPlusFill} from 'react-icons/bs';

  export default function DemoCard() {
    return (
      <Center py={6}>
        <Flex
        px={4}
        direction={{base:'column', md:'row'}}>
        <Box
          w={{base:'100%', md:'48%'}}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Stack direction={'column'} spacing={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            VOD Demo
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Watch a 10-minute Video-on-demand that illustrates how you can utilize Gennbi effeciently.
          </Text>
            <Spacer/>
            <Button
                colorScheme="yellow"
                bgGradient="linear(to-r, yellow.300, yellow.200)"
                color={'black'}
                fontWeight={500}
                leftIcon={<BsFillPlayBtnFill />}
                boxShadow={
                  '0px 1px 25px -5px rgb(236 200 50 / 48%), 0 10px 10px -5px rgb(236 200 50 / 43%)'
                }
                _hover={{
                  transform: 'translateY(1px)',
                  bg: 'yellow.300',
                }}
                variant={'solid'}
                size={'md'}>
              Play demo
            </Button>
          </Stack>
        </Box>
        <Spacer/>
        <Box
          w={{base:'100%', md:'48%'}}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Stack direction={'column'} spacing={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Live Demo
          </Heading>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Join a live, guided online tour of the diagnostics process hosted by the creators of Gennbi.
          </Text>
            <Spacer/>
            <Button
                colorScheme="yellow"
                bgGradient="linear(to-r, yellow.300, yellow.200)"
                color={'black'}
                fontWeight={500}
                leftIcon={<BsFillCalendarPlusFill />}
                boxShadow={
                  '0px 1px 25px -5px rgb(236 200 50 / 48%), 0 10px 10px -5px rgb(236 200 50 / 43%)'
                }
                _hover={{
                  transform: 'translateY(1px)',
                  bg: 'yellow.300',
                }}
                variant={'solid'}
                size={'md'}>
              Schedule demo
            </Button>
          </Stack>
        </Box>
        </Flex>
      </Center>
    );
  }