import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { HeroImage } from '../components/HeroImage';

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <Box
        display="block"
        textAlign="center"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <HeroImage />
        <MintHero />
      </Box>
    </MainLayout>
  );
};

export default Mint;
