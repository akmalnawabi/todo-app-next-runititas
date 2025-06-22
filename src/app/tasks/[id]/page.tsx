import { db } from "db";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import * as actions from 'actions';

interface PageProps {
    params: { id: string };
}

export default async function ShowTasksPage({ params }: PageProps) {
    const taskId = parseInt(params.id);
    if (isNaN(taskId) || taskId <= 0) {
        return notFound();
    }

    try {
        const task = await db.task.findUnique({
            where: { id: taskId }
        });

        if (!task) {
            return notFound();
        }

        async function deleteTask() {
            "use server";
            await actions.deleteTask(taskId);
            redirect('/');
        }

        return (
            <div className="container mx-auto p-4">
                <Link href="/" className="font-bold hover:underline p-4 inline-block">
                    ← Back to Home
                </Link>

                <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Task Details</h1>
                    <div className="space-y-3">
                        <p className="font-medium">Task: <span className="font-normal">{task.task}</span></p>
                        <p className="font-medium">Date: <span className="font-normal">
                            {new Date(task.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span></p>
                        <p className="font-medium">Status: <span className={task.completed ? "text-green-600" : "text-yellow-600"}>
                            {task.completed ? "Completed" : "Pending"}
                        </span></p>
                    </div>

                    <div className="flex justify-end gap-2 mt-6">
                        <Link
                            href={`/tasks/${task.id}/edit`}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            aria-label="Edit task"
                        >
                            <Pencil className="w-5 h-5" />
                        </Link>
                        <form action={deleteTask}>
                            <button
                                type="submit"
                                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                aria-label="Delete task"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching task:', error);
        return notFound();
    }
}