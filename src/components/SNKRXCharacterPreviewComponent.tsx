import React from 'react';
import _ from 'lodash';
import { Box, Flex } from '@chakra-ui/react';

import { Snek, SNKRXClassCounts } from '../ts/types';
import { SNKRX_CLASS } from '../data/manual-entry';
import SnekName from '../components/SnekName';
import SnekTierComponent from '../components/SnekTierComponent';
import SNKRXClassComponent from '../components/SNKRXClassComponent';

const SNKRXCharacterPreviewComponent: React.FC<{
  onClick: () => any;
  selected?: boolean;
  snek: Snek;
  classCounts: SNKRXClassCounts;
}> = ({ onClick, selected, snek, classCounts }) => {
  return (
    <Box as="button" display="inline-block" onClick={onClick} opacity={selected ? 0.1 : 1} width={180} mb={4}>
      <Flex py={1} alignItems="center" direction="column">
        <SnekTierComponent mb={2} snek={snek} />
        <SnekName snek={snek} textAlign="left" />
        <Flex>
          {_.map(SNKRX_CLASS, (snkrxClass, key) => {
            if (!snek[key]) return false;
            return (
              <SNKRXClassComponent key={key} snkrxClass={snkrxClass} count={classCounts[snkrxClass.key]} preview />
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SNKRXCharacterPreviewComponent;
