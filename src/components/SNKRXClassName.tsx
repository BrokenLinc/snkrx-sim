import React from 'react';
import { Text } from '@chakra-ui/react';

import { SNKRXClass } from '../ts/types';
import { SNKRX_COLOR } from '../data/manual-entry';

const SNKRXClassName: React.FC<{ snkrxClass: SNKRXClass; [key: string]: any }> = ({ snkrxClass, ...restProps }) => {
  return (
    <Text color={SNKRX_COLOR[snkrxClass.color].hex} {...restProps}>
      {snkrxClass.name}
    </Text>
  );
};

export default SNKRXClassName;
