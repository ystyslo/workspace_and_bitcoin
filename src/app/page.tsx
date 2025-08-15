import NavCard from "../components/shared/NavCard";
import { NAV_CARDS } from "@/data/NAV_CARDS";

export default function HomePage() {
  return (
    <main className="flex-1 flex min-h-screen items-center justify-center px-6 pb-30">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Yurii Styslo</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Hi, I’m Yurii — a passionate Front-End Developer I build fast,
            responsive, and visually engaging web applications using modern
            JavaScript frameworks like React and Next.js. My focus is on clean
            code, great user experience, and delivering pixel-perfect designs.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-200 mb-6">
            Test tasks
          </h2>

          <div className="grid gap-4 max-w-xl mx-auto">
            {NAV_CARDS.map((card) => (
              <NavCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
