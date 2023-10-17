export type Business = {
  name: string;
  address: string;
};

export type Businesses = {
  [key: string]: Business[];
};
