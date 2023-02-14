import { Box, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { getActiveNetworkConfiguration } from '../config/network';
import { shortenHash } from '../utils/shortenHash';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;

export const Hero = () => {
  const { data: collectionSize, isLoading: collectionSizeLoading } =
    useElvenScQuery<number>({
      funcName: 'getTotalSupply',
      type: SCQueryType.NUMBER,
    });

  const { data: totalTokensLeft, isLoading: totalTokensLeftIsLoading } =
    useElvenScQuery<number>({
      type: SCQueryType.NUMBER,
      funcName: 'getTotalTokensLeft',
    });

  const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });

  const minted =
    collectionSize && totalTokensLeft ? collectionSize - totalTokensLeft : 0;
  return (
    <Box width="100%">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        Welcome to the {' '}


        <Text
          as="a"
          color="elvenTools.color2.base"
          href="https://multiversx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vibe Tribe MultiversX
        </Text>{' '}

        ecosystem.
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        Where you can join the Vibe tribe of digital nomads. For just 0.1 EGLD, you can mint your own digital identity and gain access to exciting features like a DAO, VIBE ESDT rewards, and a multiverse game. Come be a part of a thriving community of like-minded individuals!
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
      >
        <CollectionInfoBox
          content={collectionTicker || '-'}
          label="Collection ticker. Click for details."
          isLoading={collectionTickerLoading}
          href={`${getActiveNetworkConfiguration().explorerAddress
            }/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={
            smartContractAddress
              ? shortenHash(smartContractAddress || '', 12)
              : 'No minter smart contract provided!'
          }
          label={`Minter smart contract. Click for details.`}
          href={
            smartContractAddress
              ? `${getActiveNetworkConfiguration().explorerAddress
              }/accounts/${smartContractAddress}`
              : undefined
          }
        />
        <CollectionInfoBox
          content={`${minted} / ${collectionSize || 0}`}
          isLoading={collectionSizeLoading || totalTokensLeftIsLoading}
          label="Minted per collection supply"
        />
      </Box>
    </Box>
  );
};
