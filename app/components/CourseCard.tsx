type CourseCardProps = {
  title: string;
  progress: number;
};

export default function CourseCard({ title, progress }: CourseCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-zinc-900 p-5">
      <h2 className="text-lg font-semibold">{title}</h2>

      <p className="mt-2 text-sm text-gray-400">Progress</p>

      <div className="mt-4 h-3 w-full rounded-full bg-zinc-800">
        <div
          className="h-3 rounded-full bg-purple-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-purple-300">
        {progress}% Completed
      </p>
    </article>
  );
}