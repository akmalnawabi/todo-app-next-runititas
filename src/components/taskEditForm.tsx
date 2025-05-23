'use client'

import type { Task } from "@/generated/prisma"
import { useState } from "react"
import * as actions from "@/actions"

interface TaskEditFormProps {
    task: Task
}

export default function TaskEditForm({task}: TaskEditFormProps){

    const [newTask, setNewTask] = useState(task.task)
    const [newDate, setNewDate] = useState(task.date.toISOString().split("T")[0])

    const handleChange = (value: string = '') => {
        setNewTask(value);
    }

    const editTaskAction = actions.editTask.bind(null, task.id)

    return (
        <div>
            <form action={editTaskAction} className="max-w-md mx-auto p-4 space-y-4 bg-white shadow rounded">
                <h2 className="text-lg font-semibold">Edit Task</h2>

                <div className="flex flex-col gap-2">
                    <label htmlFor="task" className="text-sm font-medium">Task Description:</label>
                    <input
                        type="text"
                        id="task"
                        name="task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Save
                </button>
            </form>
        </div>
    )
}