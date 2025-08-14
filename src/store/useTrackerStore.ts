import { Transaction } from "@/app/types/Transaction";
import { create } from "zustand";

export interface TrackerState {
  transactions: Transaction[];
  totalSum: number;
  isConnected: boolean;
  socket: WebSocket | null;
  startTracking: () => void;
  stopTracking: () => void;
  resetTransactions: () => void;
}

export const useTrackerStore = create<TrackerState>((set, get) => ({
  transactions: [],
  totalSum: 0,
  isConnected: false,
  socket: null,

  startTracking: () => {
    const state = get();
    if (
      state.socket &&
      (state.socket.readyState === WebSocket.OPEN ||
        state.socket.readyState === WebSocket.CONNECTING)
    ) {
      return;
    }

    const socket = new WebSocket("wss://ws.blockchain.info/inv");
    set({ socket });

    socket.onopen = () => {
      console.log("Connected to Blockchain WebSocket");
      socket.send(JSON.stringify({ op: "unconfirmed_sub" }));
      set({ isConnected: true, socket });
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.op === "utx" && data.x) {
          const transaction = {
            hash: data.x.hash,
            time: data.x.time,
            inputs: data.x.inputs || [],
            out: data.x.out || [],
            totalValue:
              data.x.out?.reduce(
                (sum: number, output: { value?: number }) =>
                  sum + (output.value || 0),
                0
              ) || 0,
          };

          set((state) => ({
            transactions: [transaction, ...state.transactions.slice(0, 49)],
            totalSum: state.totalSum + transaction.totalValue / 100000000,
          }));
        }
      } catch (error) {
        console.error("Error parsing transaction data:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      set({ isConnected: false });
    };

    socket.onclose = () => {
      console.log("Disconnected from Blockchain WebSocket");
      set({ isConnected: false });
    };
  },

  stopTracking: () => {
    const state = get();
    if (state.socket) {
      state.socket.close();
      set({ socket: null, isConnected: false });
    }
  },

  resetTransactions: () => {
    set({ transactions: [], totalSum: 0 });
  },
}));
