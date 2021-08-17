import React from 'react';
import { Text } from '@chakra-ui/react';

import { Snek } from '../ts/types';
import { SNKRX_COLOR } from '../data/manual-entry';

const SnekName: React.FC<{ snek: Snek; [key: string]: any }> = ({ snek, ...restProps }) => {
  return (
    <Text color={SNKRX_COLOR[snek.color].hex} {...restProps}>
      {snek.name}
    </Text>
  );
};

export default SnekName;
