import Calendar from "@/components/calender";
import Dashboard from "@/components/dashboard";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const tasks = await db.task.findMany();

  const renderedTasks = tasks.map((t: any) => {
    return (
      <Link href={`/tasks/${t.id}`} key={t.id}
        className="flex justify-between items-center p-3 rounded hover:bg-gray-50"
      >
        <div className="flex flex-col">
          <div className="text-lg text-gray-900">{t.task}</div>
          <div className="text-blue-400 text-sm">{t.date.toLocaleDateString()}</div>
        </div>
        <div className={`w-4 h-4 rounded-full ${t.completed ? 'bg-green-500' : 'border border-gray-300'}`}></div>
      </Link>
    )
  })

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="md:w-1/5">
        <Dashboard />
      </div>

      <div className="w-full md:w-3/5 p-4">
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl">My Day</h2>
            <p className="text-gray-500">May 2025</p>
          </div>
          <Link href="/tasks/new" className="bg-green-100 rounded-xl p-3 text-blue-500 text-sm hover:bg-green-200 transition-colors">
            + New Task
          </Link>
        </div>
        <div className="space-y-2">{renderedTasks}</div>
      </div>
      
      <div className="hidden md:block md:w-1/5 p-2">
        <Calendar />
      </div>
    </div>
  );
}