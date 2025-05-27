import CalendarPage from "@/components/calender";
import Dashboard from "@/components/dashboard";
import { db } from "@/db";
import { Task } from "@/generated/prisma";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const tasks: Task[] = await db.task.findMany();

  const totalCount = tasks.length;

  const today = new Date();
  const todayCount = tasks.filter((t) => {
    const taskDate = new Date(t.date);
    return (
      taskDate.getFullYear() === today.getFullYear() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getDate() === today.getDate()
    );
  }).length;

  const renderedTasks = tasks.map((t: Task) => {
    return (
      <Link href={`/tasks/${t.id}`} key={t.id}
        className="flex justify-between items-center p-3 rounded hover:bg-gray-50"
      >
        <div className="flex flex-col">
          <div className="text-md text-gray-900">{t.task}</div>
          <div className="text-blue-400 text-sm">{t.date.toLocaleDateString()}</div>
        </div>
        <Star className={`w-4 h-4 rounded-full ${t.completed ? 'text-blue-500 fill-blue-500' : 'text-gray-300'}`}></Star>
      </Link>
    )
  })

  const completedTasks = tasks.filter((t) => t.completed)
  const completedCount = completedTasks.length;
  const renderedCompleted = completedTasks.map((t: Task) => {
    return (
      <Link
        href={`/tasks/${t.id}`}
        key={t.id}
        className="flex items-center p-2 text-sm rounded hover:bg-gray-100"
      >
        <Check className="text-white bg-blue-500 rounded w-4 h-4" />
        <span className="text-gray-900 ml-2">{t.task}</span>
      </Link>
    )
  })

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="md:w-1/5">
        <Dashboard totalCount={totalCount}
          completedCount={completedCount}
          todayCount={todayCount} />
      </div>

      <div className="w-full md:w-3/5 p-4">
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">My Day</h2>
            <p className="text-gray-500">May 2025</p>
          </div>
          <Link href="/tasks/new" className="bg-gray-100 rounded-xl p-3 text-blue-500 text-sm hover:bg-blue-200 transition-colors">
            + New Task
          </Link>
        </div>
        <div className="space-y-2">{renderedTasks}</div>
      </div>

      <div className="hidden md:block md:w-1/5 p-2">
        <CalendarPage />
        <div>
          <p className="font-semibold mt-3 mb-2">Completed Tasks</p>
          <div className="space-y-1">{renderedCompleted}</div>
        </div>
      </div>
    </div>
  );
}