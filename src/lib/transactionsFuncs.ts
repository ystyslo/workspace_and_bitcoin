import { Transaction } from "@/types/Transaction";

export const formatBTC = (satoshi: number) => {
  return (satoshi / 100000000).toFixed(8);
};

export const formatAddress = (addr: string | null) => {
  if (!addr) return "N/A";
  return addr.length > 20
    ? `${addr.substring(0, 8)}...${addr.substring(addr.length - 8)}`
    : addr;
};

export const getFirstInput = (transaction: Transaction) => {
  if (!transaction.inputs || transaction.inputs.length === 0) return null;
  const input = transaction.inputs[0];
  return input.prev_out?.addr || "Coinbase";
};

export const getFirstOutput = (transaction: Transaction) => {
  if (!transaction.out || transaction.out.length === 0) return null;
  return transaction.out[0].addr || "N/A";
};
