import _ from 'lodash';

import { BooleanKeys } from '../ts/types';

export const hashBooleanKeys = (booleanKeys: BooleanKeys): string[] => {
  return _.compact(_.map(booleanKeys, (selected, snekKey) => selected && snekKey));
};

export const unhashBooleanKeys = (hash: string[]): BooleanKeys => {
  return _.reduce(
    hash,
    (agg: BooleanKeys, key) => {
      if (!key) return agg;
      return { ...agg, [key]: true };
    },
    {},
  );
};

export default hashBooleanKeys;
