import React from 'react';
import { Box } from '@chakra-ui/react';
import { useHarmonicIntervalFn } from 'react-use';

const Chit = ({ active, blink, color, size }: { active?: boolean; blink?: boolean; color?: string; size: number }) => {
  const [on, setOn] = React.useState(true);
  useHarmonicIntervalFn(() => {
    setOn((value) => !value);
  }, 600);
  const lit = blink ? on : active;

  return <Box height={`${size}px`} width="6px" bg={lit ? color : 'gray.400'} m="auto" />;
};

export default Chit;
