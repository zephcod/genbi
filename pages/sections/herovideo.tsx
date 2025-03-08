import {
    Button,
    Link,
    AspectRatio,
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Divider,
    Icon,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithVideo() {
    return (
      <Container maxW={'6xl'}>
      <Divider/>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 15, md: 20 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}>
                How does
              </Text>
              <br />
              <Text
                as={'span'}
                position={'relative'}>
                Gennbi work?
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            Diagnosing construction projects is very easy with Gennbi. 
            Provide the latest project design with few parameters according to the level of 
            complexity needed, and just run the analysis.
            {'  '}
            <Button 
            as={Link}
            href={'howitworks'}
            variant={'link'} 
            colorScheme={'yellow'} 
            size={'sm'}>
              Explore how Gennbi works
            </Button>
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
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
          </Flex>
        </Stack>
      <Divider/>
      </Container>
    );
  }
