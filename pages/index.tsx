import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { Hero } from '../components/Hero';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HeroImage } from '../components/HeroImage';
import { Faq } from '../components/Faq';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'mint']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="space-between"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <Hero />
        <HeroImage />
      </Box>
      <Faq />
    </MainLayout>
  );
};

export default Home;
