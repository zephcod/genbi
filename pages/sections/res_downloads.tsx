import { 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Container,
  Spacer,
  chakra,
  Link,
  Stack,
  Divider,
  useColorModeValue,
  Box,
  Heading,
  Text } from '@chakra-ui/react';
  import DemoModal from '../sections/modaldemo';
  import { CheckCircleIcon } from '@chakra-ui/icons';

export default function ResDownload() {
  return (
    <Box mt={'14'} textAlign="center" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Heading as="h2" size="xl" mt={6} p={6}>
        Download Gennbi
      </Heading>
      <Text
        pb={4}
        fontSize={'2xl'}
        fontWeight={'300'}>
        Built for collaboration across all operating system.
      </Text>
      <Container 
      maxW={'4xl'}>
      <Stack
      alignSelf={'center'}
      justify={'center'}
      m={6}
      bg={useColorModeValue('gray.50', 'gray.900')}
      border={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.400')}
      rounded={'2xl'}
      p={6}>
      <Stack 
      direction={'row'}
      alignSelf={'center'}
      justify={'center'}>
      <CheckCircleIcon boxSize={'20px'} color={'gray.500'}/>
      <Text fontWeight={'300'} fontSize={'lg'} pb={4}>
        Gennbi can be accessed with most web browsers along with these applications. 
      </Text>
      </Stack>
      <Divider/>
      <Table variant='simple'>
        <TableCaption>Download gennbi today and assess your project!</TableCaption>
        <Thead  p={4}>
          <Tr>
            <Th>OS</Th>
            <Th>Ver.</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Windows</Td>
            <Td>1.0.8</Td>
            <Td>
            <Button 
                size={'xs'}
                as={Link}
                href={'#'}
                target={'_blank'}
                download={'gennbi_winX64_1.0.8'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Download
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Mac</Td>
            <Td>1.0.8</Td>
            <Td>
            <Button 
                size={'xs'}
                as={Link}
                href={'#'}
                target={'_blank'}
                download={'gennbi_winX64_1.0.8'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Download
              </Button>
              </Td>
          </Tr>
          <Tr>
            <Td>Linux</Td>
            <Td>1.0.8</Td>
            <Td>
            <Button 
                size={'xs'}
                as={Link}
                href={'#'}
                target={'_blank'}
                download={'gennbi_winX64_1.0.8'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Download
              </Button>
              </Td>
          </Tr>
          <Tr>
            <Td>Android</Td>
            <Td>Beta</Td>
            <Td>
            <Button 
                size={'xs'}
                as={Link}
                href={'#'}
                target={'_blank'}
                download={'gennbi_winX64_1.0.8'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Get access
              </Button>
              </Td>
          </Tr>
          <Tr>
            <Td>iOS</Td>
            <Td>Beta</Td>
            <Td>
            <Button 
                size={'xs'}
                as={Link}
                href={'#'}
                target={'_blank'}
                download={'gennbi_winX64_1.0.8'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Get access
              </Button>
              </Td>
          </Tr>
          <Tr>
            <Td>Revit plugin</Td>
            <Td>Beta</Td>
            <Td>
            <Button 
                size={'xs'}
                as={Link}
                href={'#'}
                target={'_blank'}
                download={'gennbi_winX64_1.0.8'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Get access
              </Button>
              </Td>
          </Tr>
        </Tbody>
      </Table>
      </Stack>
      </Container>
            <Stack 
                  bg={useColorModeValue('gray.50', 'gray.900')}
                  py={6}
                  spacing="20px" 
                  textAlign={'center'}
                  alignContent={'center'}
                  align={'center'}>
              <chakra.h2 fontSize="3xl" fontWeight="700" px={4}>
                Already have Gennbi on your device?
              </chakra.h2>
        <Text fontSize="lg" color={'gray.500'} maxW={'2xl'} px={2} align={'center'}>
        Learn how you can assess a project with simple instructions or 
        get a demo to see how the application works in action. 
        </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} alignSelf={'center'} py={4}>
              <Button 
                as={Link}
                href={'gettingstarted'}
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
                Getting started
              </Button>
              <DemoModal/>
              </Stack>
            </Stack>
              <Spacer/>
              <Divider/>
    </Box>
  );
}