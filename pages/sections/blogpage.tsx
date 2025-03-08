import { useColorModeValue, Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function BlogPage() {
  return (
    <Box textAlign="center" py={10} px={6} bg={useColorModeValue('gray.50', 'gray.900')}>
      <CheckCircleIcon boxSize={'50px'} color={'yellow.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Blog Posts
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}