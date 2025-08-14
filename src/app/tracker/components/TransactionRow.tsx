import { Transaction } from "@/types/Transaction";

interface TransactionRowProps {
  transaction: Transaction;
}

export const TransactionRow = ({ transaction }: TransactionRowProps) => {
  const formatAddress = (addr: string | null) => {
    if (!addr) return "N/A";
    return addr.length > 20
      ? `${addr.substring(0, 10)}...${addr.substring(addr.length - 10)}`
      : addr;
  };

  const formatBTC = (satoshi: number) => {
    return (satoshi / 100000000).toFixed(8);
  };

  const getFirstInput = () => {
    if (!transaction.inputs || transaction.inputs.length === 0) return null;
    const input = transaction.inputs[0];
    return input.prev_out?.addr || "Coinbase";
  };

  const getFirstOutput = () => {
    if (!transaction.out || transaction.out.length === 0) return null;
    return transaction.out[0].addr || "N/A";
  };

  return (
    <div className="grid grid-cols-4 gap-40 p-4 border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
      <div className="text-sm text-slate-300 font-mono">
        {formatAddress(getFirstInput())}
      </div>
      <div className="text-sm text-slate-300 font-mono">
        {formatAddress(getFirstOutput())}
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
