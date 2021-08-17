import React from 'react';
import _ from 'lodash';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import useQueryState from 'use-query-state';

import { SNKRX_CLASS, SNEK } from './data/manual-entry';
import SNKRXCharacterComponent from './components/SNKRXCharacterComponent';
import SNKRXClassComponent from './components/SNKRXClassComponent';
import SNKRXCharacterPreviewComponent from './components/SNKRXCharacterPreviewComponent';
import getClassCounts from './helpers/getClassCounts';
import { hashBooleanKeys, unhashBooleanKeys } from './helpers/hashBooleanKeys';

const App: React.FC = () => {
  const [characterHash, setCharacterHash] = useQueryState([], 'c');
  const selectedSnekKeys = unhashBooleanKeys(characterHash);
  const classCounts = getClassCounts(selectedSnekKeys);
  const snekLength = _.filter(selectedSnekKeys, _.identity).length;

  const toggleSnek = (snekKey: string) => {
    const booleanKeys = unhashBooleanKeys(characterHash);
    booleanKeys[snekKey] = !booleanKeys[snekKey];
    setCharacterHash(hashBooleanKeys(booleanKeys));
  };

  return (
    <Flex height="100%">
      <Flex
        py={4}
        px={4}
        pb={100}
        overflowY="auto"
        flex="10 10 480px"
        bg="gray.800"
        alignItems="center"
        direction="column"
      >
        <Heading size="xs" mb={6}>
          Characters
        </Heading>
        <Box textAlign="center">
          {_.map(SNEK, (snek) => (
            <SNKRXCharacterPreviewComponent
              key={snek.key}
              snek={snek}
              onClick={() => toggleSnek(snek.key)}
              selected={selectedSnekKeys[snek.key]}
              classCounts={classCounts}
            />
          ))}
        </Box>
      </Flex>
      <Box py={4} px={4} pb={100} overflowY="auto" flex="1 1 280px">
        <Flex direction="column" alignItems="center">
          <Heading size="xs" mb={6}>
            Classes
          </Heading>
          <SimpleGrid columns={4}>
            {_.map(SNKRX_CLASS, (snkrxClass) => (
              <SNKRXClassComponent key={snkrxClass.key} snkrxClass={snkrxClass} count={classCounts[snkrxClass.key]} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
      <Box py={4} px={4} pb={100} overflowY="auto" flex="1 1 280px">
        <Heading size="xs" mb={6}>
          {snekLength}/{Math.max(snekLength, 7)} {snekLength > 7 ? `(NG+${snekLength - 7})` : null}
        </Heading>
        {_.map(selectedSnekKeys, (hasSnek, snekKey) => {
          if (!hasSnek) return null;
          const snek = SNEK[snekKey];
          if (!snek) return null;
          return <SNKRXCharacterComponent key={snek.key} snek={snek} onClick={() => toggleSnek(snek.key)} />;
        })}
      </Box>
      <Box position="absolute" bottom={4} right={4} py={4} px={8} borderRadius={8} bg="gray.900">
        <Text fontSize={12}>This fan-site is unaffilliated with SNKRX or a327ex.</Text>
      </Box>
    </Flex>
  );
};

export default App;
