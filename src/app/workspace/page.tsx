import BackBtn from "../components/ui/BackBtn";
import Blocks from "./components/Blocks";

export default function WorkspacePage() {
  return (
    <div className="flex-1 h-full min-h-0 py-6">
      <div className="flex flex-col justify-between max-w-4xl mx-auto">
        <BackBtn />
        <h1 className="text-3xl font-bold text-white mb-6">
          Welcome to your workspace
        </h1>
      </div>
      <Blocks />
    </div>
  );
}
