import {
  Spacer,
  Divider,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import {BsCompass } from 'react-icons/bs';
import { BiNetworkChart,BiBuildings } from "react-icons/bi";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      
    bg={useColorModeValue('gray.50', 'gray.900')}
    boxShadow={
      'inner'
    }
    p={6}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'} color={'gray.600'}>
            {stat}
          </StatNumber>
          <StatLabel fontWeight={'medium'} isTruncated color={'gray.600'}>
            {title}
          </StatLabel>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.600', 'gray.400')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="6xl" mx={'auto'} py={10} px={{ base: 8, sm: 16, md: 24 }}>
      <Spacer/>
      <Divider/>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Gennbi is expanding, grow with us!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Insights'}
          stat={'1,000,000+'}
          icon={<BsCompass size={'3em'} />}
        />
        <StatsCard
          title={'Assessments'}
          stat={'350+'}
          icon={<BiNetworkChart size={'3em'} />}
        />
        <StatsCard
          title={'Projects'}
          stat={'170+'}
          icon={<BiBuildings size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}