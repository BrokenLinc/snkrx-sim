import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Snek } from '../ts/types';
import SnekName from '../components/SnekName';
import SnekTierComponent from '../components/SnekTierComponent';

const SNKRXCharacterComponent: React.FC<{
  onClick: () => any;
  selected?: boolean;
  snek: Snek;
}> = ({ onClick, selected, snek }) => {
  return (
    <Box as="button" display="block" onClick={onClick} opacity={selected ? 0.1 : 1}>
      <Flex py={1} alignItems="center">
        <SnekTierComponent mr={3} snek={snek} />
        <SnekName snek={snek} textAlign="left" />
      </Flex>
    </Box>
  );
};

export default SNKRXCharacterComponent;
