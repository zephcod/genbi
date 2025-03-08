import { ReactElement, ReactNode } from 'react';
import {
  Box,
  Button,
  Link,
  Divider,
  Icon,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BsChatDots,
} from 'react-icons/bs';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderBottom: 'solid',
        borderBottomWidth: 16,
        borderBottomColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        top: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};
interface FeatureProps {
  question: string;
  icon?: ReactElement;
}
const TestimonialQuestion = ({ question, icon }: FeatureProps) => {
  return (
    <Flex  direction={'row'} p={4} flex={2} alignContent={'center'} justify={'center'}>
      {icon}
    <Text 
    pb={'4'}
    pl={'2'}
    textAlign={'center'}
    color={useColorModeValue('gray.600', 'gray.400')}
    fontSize={'sm'}>
      {question}
    </Text>
    </Flex>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'start'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};


export default function FaqAbout() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={6} as={Stack} spacing={4}>
        <Stack spacing={0} align={'center'}>
          <Heading>Frequently asked questions</Heading>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialQuestion
              question={'What is Gennbi?'}
              icon={<Icon as={BsChatDots} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />}/>
            <TestimonialContent>
              <TestimonialText>
              Gennbi is a pre-construction diagnostics software. It indicates a project’s 
              range of faults and misalignments in calculations, codes, standards and specifications.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialQuestion
              question={'Why the name Gennbi?'}
              icon={<Icon as={BsChatDots} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />}/>
            <TestimonialContent>
              <TestimonialText>
              Gennbi is an acronym for “Global engineering neural networks and builder informatics”. 
              Gennbi in Amharic language also means; a maker, a builder or a constructor.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialQuestion
              question={'Who can use Gennbi?'}
              icon={<Icon as={BsChatDots} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />}/>
            <TestimonialContent>
              <TestimonialText>
              Contractors and consultants get the best of Gennbi, it’s helps them in spotting unchecked errors in 
              pre-construction phase. It’s also insightful for developers, suppliers and inspectors.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
        <Stack spacing={0} align={'center'}>
        <Button 
            as={Link}
            href={'faq'}
            variant={'link'} 
            colorScheme={'yellow'} 
            size={'sm'}
            _hover={{
              textDecoration: 'none',
              transform: 'translateY(1px)',
            }}>
              Check more FAQ
            </Button>
        </Stack>
      </Container>
      <Divider/>
    </Box>
  );
}