
import { db } from "@/db";
import { Link } from "lucide-react";
import { redirect } from "next/navigation";


export default function CreateNewTask() {
    async function createTask(formData:FormData) {
        'use server';

        const task = formData.get('task') as string
        const dateString = formData.get('date') as string
        const completed = formData.get('completed') === 'on'

        const date = new Date(dateString)

        // create records in database 
        const Task = await db.task.create({
            data: {
                task,
                date,
                completed
            }
        })

        redirect('/')
    }

    return (
        <div>

            <form action={createTask} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Add New Task</h3>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="task">Task:</label>
                        <input type="text" name="task" id="task"
                            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Enter task description" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700">Date:</label>
                        <input type="date" name="date" id="date"
                            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="completed">Completed:</label>
                        <input type="checkbox" name="completed" id="completed"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}