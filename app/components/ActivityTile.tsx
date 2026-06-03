export default function ActivityTile() {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Activity
      </h2>

      <div className="flex items-end gap-2">
        <div className="h-12 w-6 rounded bg-purple-500"></div>
        <div className="h-20 w-6 rounded bg-purple-500"></div>
        <div className="h-10 w-6 rounded bg-purple-500"></div>
        <div className="h-24 w-6 rounded bg-purple-500"></div>
        <div className="h-16 w-6 rounded bg-purple-500"></div>
        <div className="h-28 w-6 rounded bg-purple-500"></div>
      </div>
    </section>
  );
}