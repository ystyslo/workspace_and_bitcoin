import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  formatAddress,
  getFirstInput,
  getFirstOutput,
} from "@/lib/transactionsFuncs";
import { Transaction } from "@/types/Transaction";

type AddrTooltipProps = {
  transaction: Transaction;
  isInput?: boolean;
};
export const AddrTooltip = ({
  transaction,
  isInput = true,
}: AddrTooltipProps) => {
  const address = isInput
    ? getFirstInput(transaction)
    : getFirstOutput(transaction);

  return (
    <Tooltip>
      <TooltipTrigger>{formatAddress(address)}</TooltipTrigger>
      <TooltipContent>{address}</TooltipContent>
    </Tooltip>
  );
};
