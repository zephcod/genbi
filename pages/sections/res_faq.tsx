/* eslint-disable */
import { useColorModeValue, 
  Box, 
  Heading, 
  SimpleGrid,
  Container,
  Text, 
  VStack,
  HStack,
  Button,
  Stack,
  Link,
  Icon,
  Image,
  Divider,
  Spacer,
  AspectRatio,
  Accordion, 
  AccordionButton, 
  AccordionItem, 
  AccordionIcon, 
  AccordionPanel } from '@chakra-ui/react';
  import { ReactElement, ReactNode } from 'react';
  import logo from '../../public/gennbi_logo.svg';
  import {
    BsPlayBtn,BsQuestionSquare,BsGlobe,BsLinkedin
  } from 'react-icons/bs';

  const FaqText = ({ children }: { children: ReactNode }) => {
    return (
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {children}
          </Box>
          <AccordionIcon />
        </AccordionButton>
    );
  };

  const AnswerText = ({ children }: { children: ReactNode }) => {
    return (
      <AccordionPanel pb={4} textAlign='left'>
        {children}
      </AccordionPanel>
    );
  };

export default function ResFaq() {
  return (
    <Box justifyItems="center" textAlign="center" mt={10} py={4} bg={useColorModeValue('gray.50', 'gray.900')}>
      <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 4fr 2fr' }}
            spacing={2}
            p={4}
            >
              <Stack align={'flex-start'}></Stack>
              <Stack align={'flex-start'}>
                <Box bg={useColorModeValue('gray.100', 'gray.700')} rounded={'2xl'}>
                <Heading as="h2" size="sm" p={4} fontWeight={400} >
                  What do you want to know about gennbi?
                </Heading>
                </Box>
              </Stack>
      </SimpleGrid>
      <Divider/>
      <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 3fr 2fr' }}
            spacing={2}
            mt={6}
            >
              <Stack align={'flex-start'}></Stack>
              <Stack px={2} align={'flex-start'}>
                <HStack px={2} alignItems={'baseline'}>
                  <Icon as={BsPlayBtn}/>
                  <Spacer/>
                  <Heading size={'md'}>
                    Videos 
                  </Heading>
                </HStack>
                <Divider/>
                <SimpleGrid px={2} m="4" templateColumns={{ sm: '2fr 4fr', md: '2fr 4fr' }} spacing={2} alignItems="center">
                  <Stack>
                    <Box
                      position={'relative'}
                      rounded={'md'}
                      // width={'full'}
                      overflow={'hidden'}>
                        <AspectRatio ratio={16/9}>
                            <Box
                            as="iframe"
                            title="naruto"
                            src="https://www.youtube.com/embed/BlpwBD-Mx34"
                            allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                  </Stack>
                  <Stack alignItems={'flex-start'} p={2}>
                    <Heading as="h2" size="md" >Gennbi sketch explainer</Heading>
                    <Text >1:00min  Feb 20, 2022</Text>
                  </Stack>
                </SimpleGrid>
                <Divider/>
                <SimpleGrid px={2} m="4" templateColumns={{ sm: '2fr 4fr', md: '2fr 4fr' }} spacing={2} alignItems="center">
                  <Stack>
                    <Box
                      position={'relative'}
                      rounded={'md'}
                      // width={'full'}
                      overflow={'hidden'}>
                        <AspectRatio ratio={16/9}>
                            <Box
                            as="iframe"
                            title="naruto"
                            src="https://www.youtube.com/embed/BlpwBD-Mx34"
                            allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                  </Stack>
                  <Stack alignItems={'flex-start'} p={2}>
                    <Heading as="h2" size="md" >How does gennbi work?</Heading>
                    <Text >3:00min  Mar 03, 2022</Text>
                  </Stack>
                </SimpleGrid>
                <Divider/>
                <SimpleGrid px={2} m="4" templateColumns={{ sm: '2fr 4fr', md: '2fr 4fr' }} spacing={2} alignItems="center">
                  <Stack>
                    <Box
                      position={'relative'}
                      rounded={'md'}
                      overflow={'hidden'}>
                        <AspectRatio ratio={16/9}>
                            <Box
                            as="iframe"
                            title="naruto"
                            src="https://www.youtube.com/embed/BlpwBD-Mx34"
                            allowFullScreen
                            />
                        </AspectRatio>
                    </Box>
                  </Stack>
                  <Stack alignItems={'flex-start'} p={2}>
                    <Heading as="h2" size="md" >Gennbi solutions index</Heading>
                    <Text >1:00min  Feb 26, 2022</Text>
                  </Stack>
                </SimpleGrid>
                <Divider/>
                <HStack pt={10} px={2} alignItems={'baseline'}>
                  <Icon as={BsQuestionSquare}/>
                  <Spacer/>
                  <Heading size={'md'}>
                    People ask these 
                  </Heading>
                </HStack>
                  <Container>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <FaqText children={'What is Gennbi?'}/>
                      <AnswerText children={'Gennbi is a pre-construction diagnostics software. It indicates a project’s range of faults and misalignments in calculations, codes, standards and specifications.'}/>
                    </AccordionItem>
                    {/* <AccordionItem>
                      <FaqText children={undefined}>Why the name Gennbi?</FaqText>
                      <AnswerText children={undefined}>
                      Gennbi is an acronym for “Global engineering neural networks and builder informatics”. 
                      Gennbi in Amharic language also means; a maker, a builder or a constructor.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>Who can use Gennbi?</FaqText>
                      <AnswerText children={undefined}>
                      Contractors and consultants get the best of Gennbi, it’s helps them in spotting unchecked errors 
                      in pre-construction phase. It’s also insightful for developers, suppliers and inspectors.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>How can Gennbi help me?</FaqText>
                      <AnswerText children={undefined}>
                      Gennbi helps in spotting unchecked errors in a construction project. 
                      Roughly 75% of construction errors can be prevented through a well-planned construction coordination.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>What kind of result can I expect?</FaqText>
                      <AnswerText children={undefined}>
                      Gennbi identifies and sorts 99% of compliance, constructability and cost efficiency errors in a 
                      construction project. It also compiles a useful builder informatics.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>What makes Gennbi different?</FaqText>
                      <AnswerText children={undefined}>
                      Gennbi is for people for who make things. We are makers ourself. We know the process is full of errors, 
                      but we collect and study them so you can create and do more with minimum waste.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>How do I use Gennbi?</FaqText>
                      <AnswerText children={undefined}>
                      Gennbi is cloud based. It can be accessed from the web, android, iOS or desktop applications. 
                      You can upload details, collaborate and get results from any operating system.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>How does Gennbi’s algorithm work?</FaqText>
                      <AnswerText children={undefined}>
                      The algorithm first translates the project data through image recognition and dissects it to standard 33/50 
                      standard coordination. And gives weight after sub-dividing and applying insights. 
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>What integrations are supported?</FaqText>
                      <AnswerText children={undefined}>
                      Gennbi currently supports only Revit integration. We are working on to include more BIM 
                      and project management tools, if you have a recommendation please reach out.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>What can I do with Gennbi free?</FaqText>
                      <AnswerText children={undefined}>
                      With gennbi free you get access to search our insights repository and check 
                      codes, market prices. You can also use few of our cost calculators and tools.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>What if I need a custom solution?</FaqText>
                      <AnswerText children={undefined}>
                      Unfortunately, we are highly preoccupied and we can’t offer custom solutions. 
                      But we will start addressing custom solutions soon. Don’t hesitate to contact us.
                      </AnswerText>
                    </AccordionItem>
                    <AccordionItem>
                      <FaqText children={undefined}>I have more questions…</FaqText>
                      <AnswerText children={undefined}>
                      We are available to chat with you 18/7. If we are not around, 
                      leave your questions at the help center, we will get back to you the soonest
                      </AnswerText>
                    </AccordionItem> */}
                  </Accordion>
                  </Container>
              </Stack>
              
              <Stack display={{ base: 'flex', md: 'flex' }}>
              <Container 
              bg={useColorModeValue('gray.50', 'gray.900')} 
              width="full"
              centerContent overflow="hidden"
              pr={6}>
                  <VStack
                  spacing={2}
                  align={'flex-start'}
                  border={'1px solid'}
                  rounded={'lg'}
                  borderColor={useColorModeValue('gray.300', 'gray.700')}
                  direction={'row'}
                  p={6}
                  >
                  <Image
                    width={'full'}
                    alt={'Gennbi Logo'}
                    src={logo.src}
                  />
                    <Divider/>
                    <HStack alignItems={'baseline'}>
                      <Icon as={BsGlobe}/>
                      <Spacer/>
                      <Text>gennbi.com</Text>
                    </HStack>
                    <Divider/>
                      <Text align={'start'}>Gennbi is a software as a service technoloby company. 
                        The company primarily offers disgnostics tools and data for 
                        construction consultants and contractors.
                      </Text>
                    <Divider/>
                      <Text>Head quarters: Addis Ababa, Ethiopia</Text>
                      <Box as={'span'}>CEO:{' '}
                      <Icon as={BsLinkedin} display={'inline-flex'} mt={0}/>
                      <Link href={'https://www.linkedin.com/in/amanuel-melesse-1150a0161/'} isExternal >Amanuel Melesse</Link>
                      </Box>
                      <Box as={'span'} >Founders:{' '}
                      <Icon as={BsLinkedin} display={'inline-flex'} mt={0}/>
                      <Link href={'https://www.linkedin.com/in/amanuel-melesse-1150a0161/'} isExternal >Amanuel Melesse,</Link>
                      {' '}
                      <Icon as={BsLinkedin} display={'inline-flex'} mt={0}/>
                      <Link href={'https://www.linkedin.com/in/sofonias-melesse/'} isExternal >Sofonias Melesse</Link>.
                      </Box>
                  </VStack>
              </Container>
              </Stack>
      </SimpleGrid>
      <Container maxW="inherit" mt={14} bg={useColorModeValue('white', 'gray.700')} >
      <Divider mb={12} />
            <Stack spacing="20px" 
                  alignContent={'center'}
                  align={'center'}
                  textAlign={'center'}>
              <Heading fontSize="3xl" fontWeight="700">
                Want to know more?
              </Heading>
                <Text fontSize="lg" color={'gray.500'} maxW={'2xl'} px={2} align={'center'}>
                Check our getting started instructions to get up and running quickly or visit 
                our help center if you have further inquiries. 
                </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} alignSelf={'center'}>
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
              <Button 
                as={Link}
                href={'help'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Help center
              </Button>
              </Stack>
            </Stack>
        <Divider mt={12} />
      </Container>
     </Box>
  );
}