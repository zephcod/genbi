import {
    Box,
    Container,
    Stack,
    Spacer,
    Text,
    Image,
    Icon,
    Link,
    VStack,
    HStack,
    Button,
    Heading,
    SimpleGrid,
    Divider,
    useColorModeValue,
    ChakraComponent,
    VisuallyHidden,
    Flex,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import Contact from './contact';
  import flag from '../../public/ethiopian_flag.svg';
  import { FaLinkedin } from 'react-icons/fa';
  
  export default function SimpleAbout() {
    return (
      <Container mt={'14'} maxW={'inherit'} bg={useColorModeValue('gray.50', 'gray.900')}
      py={{ base: 12, md: 12 }}
      px={{ base: 6, md: 24 }}>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                About Gennbi
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                The pre-construction fix
              </Text>
            </Box>
            <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '4fr 2fr' }}
            spacing={10}>
              <Stack align={'flex-start'}>
              <Heading as="h2" size="md" mt={6} mb={2}>
                What is Gennbi?
              </Heading>
              <Text color={'gray.500'}>
              Gennbi is a pre-construction diagnostics software. 
              It indicates a project’s range of faults and misalignments in 
              calculations, codes, standards and specifications. 
              Our solutions help the construction industry as a whole overcome the toughest challenges in 
              design, financing, and procurement.
              </Text>
              <Divider/>
              <Spacer/>
              <Heading as="h3" size="md" mt={6} mb={2}>
                Gennbi is mission driven
              </Heading>
              <Text color={'gray.500'}>
              Construction is the second industry prone to corruption; only next to mining. 
              Each year 25% of construction budget is lost in terms of cost or schedule overruns. 
              This is in addition to the customary 5-10% contingency amount. 
              Cost and schedule overruns are not the industry’s normal; 
              they are the manifestation of unforeseen errors requiring extra resources/time 
              before proceeding to the next task. Our mission is to eliminate cost and schedule overruns 
              and reduce construction contingencies to less than 5%.
              </Text>
              <Divider/>
              <Spacer/>
              <Heading as="h2" size="md" mt={6} mb={2}>
                A new approach to pre-construction
              </Heading>
              <Text color={'gray.500'}>
              A vast amount of planning takes place before the actual construction begins. 
              From design assessment, to cost estimation and handling contracts, 
              gennbi takes down the pre-construction tasks in a new way. 
              There is no need to fill out complicated forms, Gennbi can assess projects with just photo of the plans. 
              Once the results are generated, consultants and contractors rule out errors and 
              re-run diagnostics until the optimum scenario is achieved. 
              Finally, variables for gennbi’s default market data and forms can be customized to generate 
              a builder informatics that will guide the construction through the whole process.
              </Text>
              <Divider/>
              <Spacer/>
              <Heading as="h2" size="md" mt={6} mb={2}>
                Our vision for the construction industry
              </Heading>
              <Text color={'gray.500'}>
              Gennbi’s builder informatics will play a key role in the advancement of the construction industry 
              into robotics, modularization and on-site autonomous assembly. In simple analogy; 
              as there are compilers for software, our builder informatics compiles the whole construction process 
              in to small chunks of tasks. 
              </Text>
              <Divider/>
              <Spacer/>
              <HStack mt={6} mb={2}>
              <Heading as="h2" size="md" >
                Under the hood
              </Heading>
              <Image
                    width={35}
                    height={25}
                    alt={'Gennbi Logo'}
                    src={flag.src}
                    display={'inline'}
                  />
              </HStack>
              <Box as={'span'} color={'gray.500'} d={'inline'}>
              Gennbi is originally created in Ethiopia{' '}
              
              by two brothers,{' '}
              <Icon as={FaLinkedin} display={'inline-flex'} mt={0}/>
              <Link href={'https://www.linkedin.com/in/amanuel-melesse-1150a0161/'} isExternal >Amanuel</Link>
              {' '}and{' '}
              <Icon as={FaLinkedin} display={'inline-flex'} mt={0}/>
              <Link href={'https://www.linkedin.com/in/sofonias-melesse/'} isExternal >Sofonias</Link>.
              Their multi-disciplinary expertise in architecture, computer science, engineering, economics 
              and urban planning is the key to the excellence in the services we provide. 
              The algorithm that fuels Gennbi took a great deal of commitment to reach where we are now 
              and we are further evolving and iterating to deliver the best diagnostics tool for the construction industry. 
              </Box>
              <Divider/>
              <Spacer/>
              <Heading as="h2" size="md" mt={6} mb={2}>
                Work with us
              </Heading>
              <Text color={'gray.500'}>
              If you are interested in working with an agile team to develop, customize, integrate, test 
              and maintain web, mobile and desktop-based construction applications built on 
              various technology frameworks we are the right fit for you. 
              Join our growing team to be a part of a brighter future!
              </Text>
              <Spacer/>
              <Text color={'gray.500'}>
              We are looking for self-directed learners who take full responsibility for growth and skill development. 
              We compensate our team very attractively. The ones that delay gratification will reap the best pay-off. 
              In exchange we will hold you accountable to meeting deadlines regardless of normal working hours 
              and take ownership of problems and shepherd the process until resolved; 
              even at the price of other commitments at the extremes.
              </Text>
              <Divider/>
              <Spacer/>
              <Contact/>
              </Stack>
              <Stack display={{ base: 'none', md: 'flex' }}>
              <Container 
              bg={useColorModeValue('gray.50', 'gray.900')} 
              width="md"
              centerContent overflow="hidden">
                  <VStack
                  // maxW="inherit"
                  spacing={2}
                  align={'flex-start'}
                  bg={useColorModeValue('white', 'gray.800')}
                  color="gray"
                  borderRadius="md"
                  direction={'row'}
                  // m={{ sm: 2, md: 2, lg: 2 }}
                  p={{ sm: 2, md: 2, lg: 4 }}
                  >
                    <Heading p={'4'} as={'h4'} size={"xl"}>Contents here</Heading>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          What is Gennbi?
                      </Button>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          Gennbi mission
                      </Button>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          Pre-construction
                      </Button>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          Gennbi vision
                      </Button>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          Team
                      </Button>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          Careers
                      </Button>
                      <Button 
                      pl={8}
                      variant={'link'}
                        _hover={{
                          textDecoration: 'none',
                          transform: 'translateY(1px)',
                        }}>
                          Contact
                      </Button>
                  </VStack>
              </Container>
              </Stack>
            </SimpleGrid>
          </Stack>
      </Container>
    );
  }