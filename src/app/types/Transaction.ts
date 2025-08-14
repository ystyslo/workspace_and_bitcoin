export interface Transaction {
  hash: string;
  time: number;
  inputs: Array<{ prev_out: { value: number; addr?: string } }>;
  out: Array<{ value: number; addr?: string }>;
  totalValue: number;
}
