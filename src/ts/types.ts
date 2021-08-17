export type SNKRXColorKey =
  | 'bg'
  | 'fg'
  | 'fg_alt'
  | 'yellow'
  | 'orange'
  | 'blue'
  | 'green'
  | 'red'
  | 'purple'
  | 'blue2'
  | 'yellow2';

export type SNKRXColor = {
  key?: string;
  hex: string;
};

export type SNKRXClassKey =
  | 'conjurer'
  | 'curser'
  | 'enchanter'
  | 'explorer'
  | 'forcer'
  | 'healer'
  | 'mage'
  | 'mercenary'
  | 'nuker'
  | 'psyker'
  | 'ranger'
  | 'rogue'
  | 'sorcerer'
  | 'swarmer'
  | 'voider'
  | 'warrior';

export type SNKRXClass = {
  key?: string;
  name?: string;
  color: SNKRXColorKey;
  passive1?: string;
  passive2?: string;
  passive3?: string;
  passive4?: string;
  passive6?: string;
  setNumbers: number[];
};

export type Snek = { [Property in SNKRXClassKey]?: boolean } & {
  key?: string;
  name?: string;
  color: SNKRXColorKey;
  tier: number;
  level1: string;
  level3: string;
};

export type BooleanKeys = { [key: string]: boolean };

export type SNKRXClassCounts = { [Property in SNKRXClassKey]?: number };
