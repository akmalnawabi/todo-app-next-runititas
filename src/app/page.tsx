import Calender from "@/components/calender";
import Dashboard from "@/components/dashboard";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const tasks = await db.task.findMany();
  const renderedTasks = tasks.map((t:any) => {
    return(
      <Link href={`/tasks/${t.id}`} key={t.id}
      className="flex justify-between itmes-center p-1 rounded"
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-lg text-gray-900">{t.task}</div>
            <div className="text-blue-400 text-sm">{t.date.toLocaleDateString()}</div>
          </div>
          <div>{t.completed}</div>
        </div>
      </Link>
    )
  })
  return (
    <div className="flex w-full">
      <div className="w-1/5 p-2">
        <Dashboard />
      </div>
      <div className="w-3/5 p-4">
        <div className="flex justify-between p-3">
          <div className="flex flex-col">
            <h2 className="font-bold">My Day</h2>
            <p className="text-gray-500">May 2025</p>
          </div>
          <Link href={`/tasks/new`} className="bg-green-100 rounded-xl p-3 text-blue-500 text-sm">+ New Task</Link>
        </div>
        <div className="ml-4">{renderedTasks}</div>
      </div>

      <div className="w-1/5 p-2">
        <Calender />
      </div>
    </div>
  );
}
