import { Transaction } from "@/types/Transaction";

const SATOSHI_PER_BTC = 100_000_000;
const MAX_ADDRESS_LENGTH = 20;
const SUBSTR_LENGTH = 8;

export const formatBTC = (satoshi: number) => {
  return (satoshi / SATOSHI_PER_BTC).toFixed(8);
};

export const formatAddress = (addr: string | null) => {
  if (!addr) return "N/A";
  return addr.length > MAX_ADDRESS_LENGTH
    ? `${addr.substring(0, SUBSTR_LENGTH)}...${addr.substring(
        addr.length - SUBSTR_LENGTH
      )}`
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
