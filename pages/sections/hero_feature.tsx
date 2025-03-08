import { ReactElement } from 'react';
import { useColorModeValue, Container, Divider, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { BsCloudArrowUp, BsArrowRepeat, BsColumnsGap } from 'react-icons/bs';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
    bg={useColorModeValue('gray.50', 'gray.900')}
    boxShadow={
      'inner'
    }
    rounded={'2xl'}
    p={6}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'gray.400'}
        rounded={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={
          'md'
        }
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Divider/>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW={'6xl'}>
    <Divider mt={8} mb={8} />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={BsCloudArrowUp} w={10} h={10} />}
          title={'Multi-platform'}
          text={
            'Gennbi is in the cloud. It can be accessed from the web, android, iOS or desktop applications. Teams can easily collaborate from everywhere.'
          }
        />
        <Feature
          icon={<Icon as={BsArrowRepeat} w={10} h={10} />}
          title={'Gennbi insights'}
          text={
            'Gennbi maintains over 1M market price, code, standard and spec insights. You will get instant updates along with calculation constants and variables.'
          }
        />
        <Feature
          icon={<Icon as={BsColumnsGap} w={10} h={10} />}
          title={'Customization'}
          text={
            'Enjoy a fully customizable dashboard. Set custom permissions for your team and choose from a variety of formats, themes, units and languages.'
          }
        />
      </SimpleGrid>
      <Divider mt={12} mb={12} />
    </Container>
  );
}