import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";
import CourseCard from "./components/CourseCard";
import ActivityTile from "./components/ActivityTile";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-4 gap-4">
        <Sidebar />

        <div className="col-span-3 grid gap-4">
          <HeroTile />

          <div className="grid md:grid-cols-2 gap-4">
           <CourseCard title="Advanced React Patterns" progress={75} />
<CourseCard title="UI Animation Mastery" progress={60} />
<CourseCard title="Database Design" progress={45} />
<CourseCard title="Next.js Server Components" progress={85} />
          </div>

          <ActivityTile />
        </div>
      </div>
    </main>
  );
}