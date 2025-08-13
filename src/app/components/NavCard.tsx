import { ArrowRight } from "lucide-react";
import Link from "next/link";

type NavCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export default function NavCard({
  title,
  description,
  icon,
  href,
}: NavCardProps) {
  return (
    <Link
      href={href}
      className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer hover:bg-slate-800/70"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-300 group-hover:translate-x-1 transition-all ml-auto" />
      </div>
    </Link>
  );
}
