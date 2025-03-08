import {
  Button,
  Link,
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
    IoWarning,IoStatsChartSharp,IoCalendar
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import workers from '../../public/bis.jpg';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
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
  
  export default function SplitWithImage2() {
    return (
      <Container maxW={'5xl'} py={20}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '4fr 2fr' }} columns={{ base: 1, md: 2 }} spacing={6}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'Builder informatics'}
              objectFit={'cover'}
              src={workers.src}
            />
          </Flex>
          <Stack spacing={4}>
            <Heading>Builder informatics</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Gennbi compiles construction projects in to a coordinated informatics
             that involves hundreds of activities with logistical considerations and moving variables...
              <Button 
            as={Link}
            href={'bis'}
            variant={'link'} 
            colorScheme={'yellow'} 
            size={'sm'}>
              Learn more
            </Button>
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoStatsChartSharp} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'gray.700')}
                text={'Cash flow analysis'}
              />
              <Feature
                icon={<Icon as={IoCalendar} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'gray.700')}
                text={'Logistics & schedule review'}
              />
              <Feature
                icon={
                  <Icon as={IoWarning} color={useColorModeValue('yellow.400', 'yellow.200')} w={5} h={5} />
                }
                iconBg={useColorModeValue('gray.100', 'gray.700')}
                text={'Risk mitigation'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }