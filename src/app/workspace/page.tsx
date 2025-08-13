import BackBtn from "../components/ui/BackBtn";

export default function WorkspacePage() {
  return (
    <div
      className="flex-1 p-6"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "10px 10px",
      }}
    >
      <div className="flex justify-between max-w-4xl mx-auto">
        <BackBtn />
        <h1 className="text-3xl font-bold text-white mb-6">
          Welcome to your workspace
        </h1>
      </div>
    </div>
  );
}
