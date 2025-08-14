"use client";

import { Block, BlockChanges } from "@/app/types/Block";
import { Button } from "@/components/ui/button";
import { defaultBlocks } from "@/data/defaultBlocks";
import { useBlocksStore } from "@/store/useBlocksStore";
import { RefreshCcw, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

export default function Blocks() {
  const {
    blocks,
    activeId,
    zIndexes,
    maxZ,
    setMaxZ,
    setActiveId,
    setZIndexes,
    updateBlock,
    resetBlocks,
    deleteBlock,
  } = useBlocksStore();

  const [isDragging, setIsDragging] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleBlockClick = (id: number) => {
    setActiveId(id);
    const newMaxZ = maxZ + 1;
    setZIndexes({ ...zIndexes, [id]: newMaxZ });
    setMaxZ(newMaxZ);
  };

  const handleDeleteClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteBlock(id);
  };

  const snap10 = (value: number) => Math.round(value / 10) * 10;

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
        backgroundSize: "10px 10px",
      }}
    >
      <Button
        variant="secondary"
        className="absolute top-10 left-20 bg-slate-700 hover:bg-slate-600 hover:scale-105 text-white"
        onClick={resetBlocks}
      >
        <RefreshCcw />
      </Button>

      {isHydrated &&
        blocks.map((block) => (
          <Rnd
            key={block.id}
            size={{ width: block.w, height: block.h }}
            minWidth={120}
            minHeight={50}
            position={{ x: block.x, y: block.y }}
            onDragStart={() => setIsDragging(true)}
            onDragStop={(e, d) => {
              updateBlock(block.id, { x: snap10(d.x), y: snap10(d.y) });
              setIsDragging(false);
            }}
            onResizeStop={(e, dir, ref, delta, pos) =>
              updateBlock(block.id, {
                w: snap10(parseInt(ref.style.width, 10)),
                h: snap10(parseInt(ref.style.height, 10)),
                x: snap10(pos.x),
                y: snap10(pos.y),
              })
            }
            bounds="parent"
            grid={[10, 10]}
            onMouseDown={() => handleBlockClick(block.id)}
            className={`bg-slate-600/50 backdrop-blur-sm rounded-xl hover:bg-slate-600/70 flex items-center justify-center text-[20px] absolute shadow-md
              ${
                activeId === block.id
                  ? "border-2 border-[#cad5e2]"
                  : "border-2 border-[#62748e]"
              }
              `}
            style={{
              zIndex: zIndexes[block.id],
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            <div className="relative w-full h-full">
              <div className="flex justify-center text-md border-b border-slate-800">
                Tile {block.id}
              </div>
              <button
                onClick={(e) => handleDeleteClick(block.id, e)}
                className="group absolute flex justify-center items-center bg-red-600 hover:bg-red-400 text-gray-800 h-4 w-4 top-2 right-2 rounded-full cursor-pointer"
              >
                <X className="w-3 h-3 invisible group-hover:visible" />
              </button>
            </div>
          </Rnd>
        ))}
    </div>
  );
}
