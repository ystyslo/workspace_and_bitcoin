import { Code, Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    href: "https://github.com/ystyslo",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: "https://www.linkedin.com/in/yurii-styslo-608800366/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: "mailto:yuriistyslo@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function Header() {
  return (
    <header className="p-4">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
            <Code className="w-4 h-4 text-slate-300" />
          </div>
          <span className="text-lg font-medium text-white">
            Test Assignment
          </span>
        </div>

        <div className="flex gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
