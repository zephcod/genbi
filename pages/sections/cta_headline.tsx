import {
    Link,
    VStack,
  Box,
  Switch,
  FormControl,
  FormLabel,
  Spacer,
  Flex,
  Image,
  SimpleGrid,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Divider,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import enn from '../../public/gennbi_enn.jpg';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'6xl'}
            h={'100%'}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 6, md: 8 }}
          py={{ base: 6, md: 8 }}>
          <Heading
            fontWeight={400}
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            lineHeight={'110%'}>
            Save your project<br />
            <Text as={'span'}>
              from unchecked errors.
            </Text>
          </Heading>
                <Text color={'gray.500'}>
                There are many inherent risks in every construction project that must be managed along the way. 
                Contracts, standards, compliance, materials and safety are among the few that 
                Gennbi ensures to highlight and prevent from happening. 
                </Text>
                <Box
                flex={1}
                bg={'red'}
                width={'100%'}
                ></Box>
        </Stack>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              <FormControl display='flex' alignSelf='center' alignItems='center' paddingTop={4}>
                <FormLabel htmlFor='email-alerts' mb='0'>
                  Enable email alerts?
                </FormLabel>
                <Switch size='lg' id='email-alerts' />
              </FormControl>
            <Flex>
              <Box
              p={6}>
                  <Image
                  w={'90%'}
                  rounded={'md'}
                  alt={'Engineering neural networks'}
                  objectFit={'cover'}
                  src={enn.src}
                />
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Flex
        p={6}
        maxW={'sm'}>
            <Button
                as={Link}
                colorScheme="yellow"
                bgGradient="linear(yellow.200, yellow.300)"
                color={'black'}
                fontWeight={500}
                href={'http://localhost/gennbi/'}
                boxShadow={
                  '0px 1px 25px -5px rgb(236 200 50 / 48%), 0 10px 10px -5px rgb(236 200 50 / 43%)'
                }
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                  bg: 'yellow.300',
                }}
                variant={'solid'}
                size={'md'}>
              Diagnose a sample
            </Button>
            <Spacer/>
            <Button 
            as={Link}
            href={'diags'}
            variant={'link'} 
            colorScheme={'yellow'} 
            size={'sm'}>
              Learn more
            </Button>
            </Flex>
      </Container>
    </>
  );
}
