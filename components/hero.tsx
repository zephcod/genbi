import {
    Link,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Img,
    useColorModeValue,
  } from '@chakra-ui/react';
import robo from '../public/hero.png';
import DemoModal from '../pages/sections/modaldemo';
  
  export default function SplitScreen() {
    return (
      <Stack mt={'14'} minH={'100vh'} direction={{ base: 'column', md:'column', lg: 'row' }}
      bg={useColorModeValue('gray.50', 'gray.900')}>
      <Flex flex={1} justify={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={robo.src}
        />
      </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
             lineHeight={1.1}
             fontWeight={600}>
              <Text
                as={'span'}
                position={'relative'}>
                ገንቢ | Genbi
              </Text>
              <br />{' '}
              <Text fontSize={{ base: 'lg', lg: '2xl' }} as={'span'}>
                Ethiopian Builders Community!
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Guiding visions and laying foundations for Ethiopian Builders!<br />
            A community dedicated to Precision and Innovation. 
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
              as={Link}
              href={'downloads'}
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
                Gennbi Assets
              </Button>
              <DemoModal/>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }