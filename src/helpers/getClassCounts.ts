import _ from 'lodash';

import { BooleanKeys, SNKRXClassCounts } from '../ts/types';
import { SNKRX_CLASS, SNEK } from '../data/manual-entry';

const getClassCounts = (snekKeys: BooleanKeys): SNKRXClassCounts => {
  return _.reduce(
    snekKeys,
    (agg, hasSnek, snekKey) => {
      const result = { ...agg };
      if (!hasSnek) {
        return result;
      }
      const snek = SNEK[snekKey];
      if (snek) {
        _.each(SNKRX_CLASS, (snkrxClass) => {
          if (!snek[snkrxClass.key]) {
            return;
          }
          result[snkrxClass.key] = (result[snkrxClass.key] || 0) + 1;
        });
      }
      return result;
    },
    {},
  );
};

export default getClassCounts;
