import { formatBTC } from "@/lib/transactionsFuncs";
import { Transaction } from "@/types/Transaction";
import { AddrTooltip } from "./AddrTooltip";

interface TransactionRowProps {
  transaction: Transaction;
}

export const TransactionRow = ({ transaction }: TransactionRowProps) => {
  return (
    <div className="grid grid-cols-4 gap-40 p-4 border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
      <div className="text-sm text-slate-300 font-mono">
        <AddrTooltip transaction={transaction} />
      </div>
      <div className="text-sm text-slate-300 font-mono">
        <AddrTooltip transaction={transaction} isInput={false} />
      </div>
      <div className="text-sm text-amber-400 font-mono">
        {formatBTC(transaction.totalValue)} BTC
      </div>
      <div className="text-xs text-slate-500">
        {new Date(transaction.time * 1000).toLocaleTimeString()}
      </div>
    </div>
  );
};
