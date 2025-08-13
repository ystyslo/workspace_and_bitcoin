import { Grid3X3, Bitcoin } from "lucide-react";

export const navCards = [
  {
    title: "Interactive Workspace",
    description: "Draggable & Resizable Blocks",
    icon: <Grid3X3 className="w-5 h-5 text-slate-300" />,
    href: "/workspace",
  },
  {
    title: "Bitcoin Tracker",
    description: "Real-time WebSocket API",
    icon: <Bitcoin className="w-5 h-5 text-slate-300" />,
    href: "/tracker",
  },
];
