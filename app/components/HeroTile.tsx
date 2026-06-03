export default function HeroTile() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8">
      <p className="text-sm text-purple-300">Daily Dashboard</p>

      <h1 className="mt-3 text-4xl font-bold">
        Welcome back, Student 👋
      </h1>

      <p className="mt-3 text-gray-400">
        You are on a 12 day learning streak. Keep going!
      </p>

      <div className="mt-6 w-fit rounded-full bg-purple-500/20 px-4 py-2 text-purple-200">
        🔥 12 Day Streak
      </div>
    </section>
  );
}