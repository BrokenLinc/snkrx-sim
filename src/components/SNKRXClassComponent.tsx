import React from 'react';
import _ from 'lodash';
import { Box, Flex, Grid, Image } from '@chakra-ui/react';

import { SNKRXClass } from '../ts/types';
import { SNKRX_COLOR } from '../data/manual-entry';
import SNKRX_CLASS_IMAGES from '../assets/snkrxClassImages';
import { UI_SHADOW } from '../theme';
import PopperElement from '../components/PopperElement';
import Chit from '../components/Chit';
import SNKRXClassName from '../components/SNKRXClassName';

const SNKRXClassComponent: React.FC<{
  snkrxClass: SNKRXClass;
  count: number;
  preview?: boolean;
}> = ({ snkrxClass, count, preview }) => {
  const active = count >= _.first(snkrxClass.setNumbers);
  const color = SNKRX_COLOR[snkrxClass.color].hex;
  const chitSize = [0, 18, 10, 10, 10, 6, 6][_.last(snkrxClass.setNumbers)];
  const chitRows = _.max(snkrxClass.setNumbers) / snkrxClass.setNumbers.length;
  const chitColumns = snkrxClass.setNumbers.length;

  return (
    <PopperElement>
      {({ popper, element }) => (
        <>
          <Flex direction="column" p={2} alignItems="center" {...element}>
            <Box boxShadow={UI_SHADOW} bg={active ? color : 'gray.600'} borderRadius="4" width="32px" p="6px">
              <Image src={SNKRX_CLASS_IMAGES[snkrxClass.key]} opacity={0.25} filter={active ? 'invert()' : null} />
            </Box>
            <Grid
              boxShadow={UI_SHADOW}
              bg="gray.600"
              borderRadius="4"
              height="32px"
              width="32px"
              gap="3px"
              p="4px"
              autoFlow="column"
              templateRows={`repeat(${chitRows}, 1fr)`}
              templateColumns={`repeat(${chitColumns}, 1fr)`}
              mt={2}
            >
              {_.times(_.max(snkrxClass.setNumbers), (i) => {
                return preview && (count || 0) === i ? (
                  <Chit key={i} size={chitSize} color={color} active={(count || 0) >= i} blink />
                ) : (
                  <Chit key={i} size={chitSize} color={color} active={(count || 0) > i} />
                );
              })}
            </Grid>
          </Flex>
          <Box borderRadius="4" p="16px" bg="gray.900" {...popper}>
            <SNKRXClassName snkrxClass={snkrxClass} />
          </Box>
        </>
      )}
    </PopperElement>
  );
};

export default SNKRXClassComponent;
