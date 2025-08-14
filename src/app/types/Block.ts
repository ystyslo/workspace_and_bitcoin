export interface Block {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export type BlockChanges = Partial<Omit<Block, "id">>;
