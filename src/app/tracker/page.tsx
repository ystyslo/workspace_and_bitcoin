"use client";

import { Bitcoin, Wifi, WifiOff } from "lucide-react";
import BackBtn from "../components/ui/BackBtn";
import { useTrackerStore } from "@/store/useTrackerStore";

import { tabHeaders } from "@/data/tabHeaders";
import { Button } from "@/components/ui/button";
import { trackerControlBtns } from "@/data/trackerControlBtns";
import { TransactionRow } from "./components/TransactionRow";
import { MobileTransactionRow } from "./components/MobileTransactionRow";

export default function BitcoinTracker() {
  const {
    transactions,
    totalSum,
    isConnected,
    startTracking,
    stopTracking,
    resetTransactions,
  } = useTrackerStore();

  const state = useTrackerStore.getState();

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-6">
          <BackBtn />

          <div className="flex items-center gap-3">
            <Bitcoin className="w-6 h-6 text-amber-400" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Bitcoin Transaction Tracker
            </h1>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-4 md:p-6 border border-slate-700 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <Wifi className="w-4 h-4 text-green-400" />
                ) : (
                  <WifiOff className="w-4 h-4 text-slate-400" />
                )}
                <span className="text-slate-400 text-sm">Total:</span>
              </div>
              <span className="text-2xl md:text-3xl font-bold text-amber-400 font-mono">
                {totalSum.toFixed(8)} BTC
              </span>
            </div>

            <div className="flex gap-3">
              {trackerControlBtns.map((btn) => (
                <Button
                  key={btn.label}
                  onClick={
                    btn.action === "startTracking"
                      ? startTracking
                      : btn.action === "stopTracking"
                      ? stopTracking
                      : resetTransactions
                  }
                  size="lg"
                  disabled={btn.disabledCondition(state)}
                  className={`flex items-center gap-2 px-4 py-2 ${btn.className} disabled:bg-slate-600 disabled:text-slate-400 text-white rounded-lg transition-colors`}
                >
                  {btn.icon}
                  <span className="hidden sm:flex">{btn.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className="hidden md:grid md:grid-cols-4 gap-4 p-4 bg-slate-700/50 border-b border-slate-600">
            {tabHeaders.map((header) => (
              <div key={header} className="text-sm font-medium text-slate-300">
                {header}
              </div>
            ))}
          </div>

          <div className="md:hidden p-4 bg-slate-700/50 border-b border-slate-600">
            <div className="text-sm font-medium text-slate-300">
              Live Transactions ({transactions.length})
            </div>
          </div>

          <div className="max-h-85 overflow-y-auto">
            {transactions.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                <Bitcoin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-lg font-medium">No transactions yet</p>
                <p className="text-sm">
                  Click &quot;Start&quot; to begin tracking live Bitcoin
                  transactions
                </p>
              </div>
            ) : (
              <>
                {transactions.map((transaction) => (
                  <div key={transaction.hash}>
                    <TransactionRow transaction={transaction} />
                    <MobileTransactionRow transaction={transaction} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500">
            {isConnected ? "Connected to Blockchain WebSocket" : "Disconnected"}{" "}
            • {transactions.length} transactions loaded
          </p>
        </div>
      </div>
    </div>
  );
}
