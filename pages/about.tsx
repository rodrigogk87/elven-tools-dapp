import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';

const About: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'mint']} />
      </HeaderMenu>
      <Box
        sx={{
          a: {
            color: 'elvenTools.color3.base',
          },
        }}
      >
        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="black"
          mb={10}
          mt={{ xl: 6, '2xl': 16 }}
        >
          About
        </Text>
        <Text mb={4}>
          Vibe Tribe is the next NFT project on MULTIVERSX network
        </Text>
      </Box>
    </MainLayout>
  );
};

export default About;
