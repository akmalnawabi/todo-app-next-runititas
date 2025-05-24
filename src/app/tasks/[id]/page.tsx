import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Pencil, Trash2 } from "lucide-react"
import * as actions from '@/actions'

interface PageProps {
    params: {
        id: string
    }
    searchParams?: {
        [key: string]: string | string[] | undefined
      }
}

export default async function ShowTasksPage({params}: PageProps) {
    const task = await db.task.findFirst({
        where: {id: parseInt(params.id)}
    })

    if(!task){
        return notFound()
    }

    const deleteTaskAction = actions.deleteTask.bind(null, task.id)
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">Task Details</h1>
            <p>Task: {task.task}</p>
            <p>Date: {new Date(task.date).toLocaleDateString()}</p>
            <p>Completed: {task.completed ? "Yes" : "No"}</p>

            <div className="flex justify-end">
                <Link href={`/tasks/${task.id}/edit`} className="text-blue-600 hover:text-blue-800 mr-2">
                    <Pencil className="w-5 h-5" />
                </Link>
                <form action={deleteTaskAction}>
                    <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    )
}
