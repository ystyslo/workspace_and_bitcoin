import BackBtn from "../components/ui/BackBtn";

export default function TrackerPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <BackBtn />
        <h1 className="text-3xl font-bold text-white mb-6">
          Bitcoin transaction tracker
        </h1>
        <p className="text-slate-300 mb-4">
          This is the Bitcoin transaction tracker page.
        </p>
      </div>
    </div>
  );
}
