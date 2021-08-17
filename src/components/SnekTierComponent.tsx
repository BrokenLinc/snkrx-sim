import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { Snek } from '../ts/types';
import { SNKRX_COLOR } from '../data/manual-entry';
import { UI_SHADOW } from '../theme';

const SnekTierComponent: React.FC<{ snek: Snek; [key: string]: any }> = ({ snek, ...restProps }) => {
  return (
    <Flex
      boxShadow={UI_SHADOW}
      alignItems="center"
      justifyContent="center"
      borderRadius="4"
      height="32px"
      width="32px"
      bg={SNKRX_COLOR[snek.color].hex}
      {...restProps}
    >
      <Text textShadow="" color="rgba(0,0,0,0.25)">
        {snek.tier}
      </Text>
    </Flex>
  );
};

export default SnekTierComponent;
