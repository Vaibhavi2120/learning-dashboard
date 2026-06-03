import { BookOpen, Home, Trophy } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="hidden md:flex h-[90vh] flex-col gap-4 rounded-3xl border border-white/10 bg-zinc-950 p-4">
      <h2 className="text-xl font-bold">LearnX</h2>

      <a className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
        <Home size={18} /> Home
      </a>

      <a className="flex items-center gap-3 rounded-2xl p-3 text-gray-400">
        <BookOpen size={18} /> Courses
      </a>

      <a className="flex items-center gap-3 rounded-2xl p-3 text-gray-400">
        <Trophy size={18} /> Progress
      </a>
    </nav>
  );
}