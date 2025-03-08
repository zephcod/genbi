import {
  Link,
  Stack,
    Text,
    Button,
    Divider,
    chakra,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function GridListWithCTA() {
    return (
      <Container maxW="7xl" mt={14} p={4} >
      <Divider mb={12} />
            <Stack spacing="20px" 
                  alignContent={'center'}
                  align={'center'}
                  textAlign={'center'}>
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Assess your project now.
              </chakra.h2>
                <Text fontSize="lg" color={'gray.500'} maxW={'2xl'} px={2} align={'center'}>
                Check the pricing for our diagnostic service or start with Gennbi free 
                and get access to our standard tools and pre-construction databases. 
                </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} alignSelf={'center'}>
              <Button 
                as={Link}
                href={'http://localhost/gennbi/'}
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
              <Button 
                as={Link}
                href={'pricing'}
                variant={'outline'}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(1px)',
                }}>
                Check Pricing
              </Button>
              </Stack>
            </Stack>
        <Divider mt={12} mb={12} />
      </Container>
    );
  }