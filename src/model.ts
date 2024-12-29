export type Symbol = {
  name: string;
  url: string | null;
};

export type Picture = {
  src: string;
  source: string;
  caption: string;
};

export type Position = {
  x: number;
  y: number;
};

export type Park = {
  key: string;
  name: string;
  year: number;
  area: number;
  logo: string;
  position: Position;
  symbols: Symbol[];
  background: Picture;
  pictures: Picture[];
};
