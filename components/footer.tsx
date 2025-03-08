/* eslint-disable */
import {
    Image,
    Spacer,
    Flex,
    useColorMode,
    Button,
    Divider,
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Icon,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaFacebook, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import logo from '../public/gennbi_logo.svg';
import { IconType } from 'react-icons';
  
  
  const SocialButton = ({
    children,
    href,
  }: {
    children: ReactNode;
    href: string;
  }) => {
    return (
      <Button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        // w={10}
        // h={10}
        cursor={'pointer'}
        as={'a'}
        href={href}
        target={'_blank'}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        aria-label={'Call Segun'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
        >
          {children}
          </Button>

    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
            spacing={10}>
            <Stack spacing={2}>
              <Flex>
              <Box>
              <Image
                    width={150}
                    height={35}
                    alt={'Gennbi Logo'}
                    src={logo.src}
                  />
              </Box>
              <Spacer />
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              </Flex>
              <Text fontSize={'sm'}>
                2022 Gennbi.
              </Text>
              <Divider/>
              <Text fontSize={'md'}>
                Subscribe to our newsletter.
              </Text>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'blackAlpha.200',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('yellow.300', 'yellow.300')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'yellow.400',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
              <Stack direction={'row'} spacing={6}>
                <SocialButton href={'https://www.linkedin.com/company/gennbi'} children={<Icon as= {FaLinkedin}/>}/>
                <SocialButton href={'https://www.youtube.com/channel/UCGZxkkizB8i7D-npzJmqIhQ'} children={<Icon as= {FaYoutube}/>}/>
                <SocialButton href={'https://www.facebook.com/Gennbicom'} children={<Icon as= {FaFacebook}/>}/>
                <SocialButton href={'#'} children= {<Icon as= {FaTelegram}/>}/>
              <Text fontSize={'sm'} alignSelf={'flex-end'}>
                info@gennbi.com
              </Text>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader children={'Company'} />
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'about'}>
                  About us
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'about'}>
                  Careers
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'about'}>
                  Contact us
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'pricing'}>
                  Pricing
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'privacy'}>
                  Privacy Policy
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'terms'}>
                  Terms and conditions
              </Button>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader children={'Gennbi'}/>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'casestudies'}>
                  Case Studies
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'#'}>
                  Contributors
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'howitworks'}>
                  How Gennbi woks
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'enns'}>
                  Enginnering assessments
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'bis'}>
                  Builder Informatics
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'workflows'}>
                  Workflows
              </Button>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader children={'Support'}/>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'blog'}>
                  Blogs
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'documentation'}>
                  Documentation
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'downloads'}>
                  Downloads
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'faq'}>FAQs
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'gettingstarted'}>
                  Getting started
              </Button>
              <Button 
              as={Link} 
              variant={'link'} 
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}href={'help'}>
                  Help center
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }