import { Block } from "@/app/types/Block";

export const defaultBlocks: Block[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  x: 80 + i * 40,
  y: 100 + i * 40,
  w: 300,
  h: 100,
}));
