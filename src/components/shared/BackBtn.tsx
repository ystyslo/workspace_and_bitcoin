import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BackBtn() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white mb-4"
    >
      <ChevronLeft size={20} />
      Back to Home
    </Link>
  );
}
