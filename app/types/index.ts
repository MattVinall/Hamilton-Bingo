export type Business = {
  id: number;
  name: string;
  address: string;
};

export type Businesses = {
  [key: string]: Business[];
};

export type BingoBoard = {
  B: Business[];
  I: Business[];
  N: Business[];
  G: Business[];
  O: Business[];
};
