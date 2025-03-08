import {
    Link,
    Button,
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    BsFillLightningChargeFill,
    BsCurrencyDollar,
    BsJournalCheck,
  } from 'react-icons/bs';
  import { ReactElement } from 'react';
  import enn from '../../public/gennbi_enns.jpg';

  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack as={Link} direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={20}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 4fr' }} columns={{ base: 1, md: 2 }} spacing={6}>
          <Stack spacing={4}>
            <Heading>Engineering neural networks</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Gennbi uses statistical machine learning techniques to give computer systems the ability to learn from data, without being explicitly programmed....
            <Button 
            as={Link}
            href={'enns'}
            variant={'link'} 
            colorScheme={'yellow'} 
            size={'sm'}>
              Learn more
            </Button>
            </Text>
            <Stack
              spacing={6}>
              <Feature
                icon={
                  <Icon as={BsFillLightningChargeFill} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'gray.700')}
                text={'BIM optimization'}
              />
              <Feature
                icon={<Icon as={BsJournalCheck} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'gray.700')}
                text={'Constructability review'}
              />
              <Feature
                icon={
                  <Icon as={BsCurrencyDollar} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'gray.700')}
                text={'Cost estimation control'}
              />
            </Stack>
          </Stack>
          <Flex>
        <Image
          rounded={'md'}
          alt={'Engineering neural networks'}
          objectFit={'cover'}
          src={enn.src}
        />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }