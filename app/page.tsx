import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";
import CourseCard from "./components/CourseCard";
import ActivityTile from "./components/ActivityTile";
import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-4 gap-4">
        <Sidebar />

        <section className="col-span-3 grid gap-4">
          <HeroTile />

          {error && (
            <p className="rounded-2xl bg-red-500/20 p-4 text-red-300">
              Failed to load courses.
            </p>
          )}

          <section className="grid md:grid-cols-2 gap-4">
            {courses?.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}
          </section>

          <ActivityTile />
        </section>
      </div>
    </main>
  );
}