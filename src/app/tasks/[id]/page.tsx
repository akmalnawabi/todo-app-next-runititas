import { db } from "db"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Pencil, Trash2 } from "lucide-react"
import * as actions from 'actions'

interface PageProps {
    params: {
        id: string
    }
    searchParams?: {
        [key: string]: string | string[] | undefined
    }
}

export default async function ShowTasksPage({ params }: PageProps) {
    const taskId = parseInt(params.id)
    if (isNaN(taskId)) {
        return notFound()
    }

    try {
        const task = await db.task.findFirst({
            where: { id: taskId }
        })

        if (!task) {
            return notFound()
        }

        return (
            <div>
                <Link href={'/'} className="font-bold p-4">Home</Link>

                <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
                    <h1 className="text-xl font-bold mb-4">Task Details</h1>
                    <p>Task: {task.task}</p>
                    <p>Date: {new Date(task.date).toLocaleDateString()}</p>
                    <p>Completed: {task.completed ? "Yes" : "No"}</p>

                    <div className="flex justify-end">
                        <Link
                            href={`/tasks/${task.id}/edit`}
                            className="text-blue-600 hover:text-blue-800 mr-2"
                            aria-label="Edit task"
                        >
                            <Pencil className="w-5 h-5" />
                        </Link>
                        <form action={actions.deleteTask.bind(null, task.id)}>
                            <button
                                className="text-red-600 hover:text-red-800"
                                aria-label="Delete task"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error fetching task:', error)
        return notFound()
    }
}