import { Transaction } from "@/types/Transaction";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatBTC } from "@/lib/transactionsFuncs";
import { MoreHorizontal } from "lucide-react";
import { AddrTooltip } from "./AddrTooltip";

interface MobileTransactionRowProps {
  transaction: Transaction;
}

export const MobileTransactionRow = ({
  transaction,
}: MobileTransactionRowProps) => {
  const popoverContent = (
    <div className="space-y-3">
      <div>
        <label className="text-xs text-slate-400 uppercase tracking-wider">
          From
        </label>
        <p className="text-sm text-slate-200 font-mono break-all">
          <AddrTooltip transaction={transaction} />
        </p>
      </div>
      <div>
        <label className="text-xs text-slate-400 uppercase tracking-wider">
          To
        </label>
        <p className="text-sm text-slate-200 font-mono break-all">
          <AddrTooltip transaction={transaction} isInput={false} />
        </p>
      </div>
      <div>
        <label className="text-xs text-slate-400 uppercase tracking-wider">
          Time
        </label>
        <p className="text-sm text-slate-200">
          {new Date(transaction.time * 1000).toLocaleString()}
        </p>
      </div>
      <div>
        <label className="text-xs text-slate-400 uppercase tracking-wider">
          Hash
        </label>
        <p className="text-xs text-slate-300 font-mono break-all">
          {transaction.hash}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-between p-3 border-b border-slate-700">
      <div className="flex-1">
        <div className="text-amber-400 font-mono text-sm font-medium">
          {formatBTC(transaction.totalValue)} BTC
        </div>
        <div className="text-xs text-slate-500 mt-1">
          {new Date(transaction.time * 1000).toLocaleTimeString()}
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <MoreHorizontal className="w-10 h-10 p-2 text-slate-400 hover:text-slate-300 hover:bg-slate-700 rounded-lg transition-colors" />
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="bg-slate-800 border border-slate-700"
        >
          {popoverContent}
        </PopoverContent>
      </Popover>
    </div>
  );
};
