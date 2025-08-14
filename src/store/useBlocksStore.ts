import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Block, BlockChanges } from "@/types/Block";
import { defaultBlocks } from "@/data/defaultBlocks";

interface BlocksState {
  blocks: Block[];
  activeId: number | null;
  zIndexes: Record<number, number>;
  maxZ: number;
  setBlocks: (blocks: Block[]) => void;
  setActiveId: (id: number | null) => void;
  setZIndexes: (z: Record<number, number>) => void;
  setMaxZ: (z: number) => void;
  updateBlock: (id: number, changes: BlockChanges) => void;
  deleteBlock: (id: number) => void;
  resetBlocks: () => void;
}

const initialZ = Object.fromEntries(defaultBlocks.map((b) => [b.id, 1]));

export const useBlocksStore = create<BlocksState>()(
  persist(
    (set, get) => ({
      blocks: defaultBlocks,
      activeId: null,
      zIndexes: initialZ,
      maxZ: 1,

      setBlocks: (blocks) => set({ blocks }),
      setActiveId: (id) => set({ activeId: id }),
      setZIndexes: (z) => set({ zIndexes: z }),
      setMaxZ: (z) => set({ maxZ: z }),

      updateBlock: (id, changes) =>
        set({
          blocks: get().blocks.map((b) =>
            b.id === id ? { ...b, ...changes } : b
          ),
        }),

      deleteBlock: (id) =>
        set((state) => ({
          blocks: state.blocks.filter((b) => b.id !== id),
          activeId: state.activeId === id ? null : state.activeId,
        })),

      resetBlocks: () =>
        set({
          blocks: defaultBlocks,
          activeId: null,
          zIndexes: initialZ,
          maxZ: 1,
        }),
    }),
    {
      name: "blocks-storage",
    }
  )
);
