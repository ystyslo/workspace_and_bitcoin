import { TrackerState } from "@/store/useTrackerStore";
import { Play, RotateCcw, Square } from "lucide-react";

export const trackerControlBtns = [
  {
    icon: <Play className="w-4 h-4" />,
    label: "Start",
    action: "startTracking",
    className: "bg-green-600 hover:bg-green-700",
    disabledCondition: (state: TrackerState) => state.isConnected,
  },
  {
    icon: <Square className="w-4 h-4" />,
    label: "Stop",
    action: "stopTracking",
    className: "bg-red-600 hover:bg-red-700",
    disabledCondition: (state: TrackerState) => !state.isConnected,
  },
  {
    icon: <RotateCcw className="w-4 h-4" />,
    label: "Reset",
    action: "resetTransactions",
    className: "bg-slate-600 hover:bg-slate-700",
    disabledCondition: () => false,
  },
];
