import { Box } from '@chakra-ui/react';

export const HeroImage = () => {
  return (
    <Box
      minWidth="100%"
      height="100%"
      display="block"
    >
      <Box
        padding={10}
        userSelect="none"
        color="elvenTools.shadowColor"
        display="block"
      >
        <Box as="img" src="/img.gif" alt="" height="300px" display="block" marginLeft="auto" marginRight="auto" width="300px"></Box>
      </Box>
    </Box>
  );
};
