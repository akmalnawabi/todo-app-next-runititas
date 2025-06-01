import { db } from "db";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Prisma } from '@prisma/client';

export default function CreateNewTask() {
    async function createTask(formData: FormData) {
        'use server';

        const task = formData.get('task')?.toString();
        const dateString = formData.get('date')!.toString();
        const completed = formData.get('completed') === 'on';
        const category = formData.get('category')?.toString() || null;

        const date = new Date(dateString);

        await db.task.create({
            data: {
                task,
                date,
                completed,
                category
            } as Prisma.TaskCreateInput
        });

        redirect('/');
    }

    const categories = [
        "Personal",
        "Important",
        "Assigned to me",
        "GoPay",
        "Kretya Studio",
        "Content Dump"
    ] as const;

    return (
        <div className="p-4">
            <Link href={'/'} className="text-blue-500 hover:underline mb-4 inline-block">
                ← Back to Home
            </Link>
            <form action={createTask} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Add New Task</h3>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="task" className="text-sm font-medium text-gray-700">Task:</label>
                        <input
                            type="text"
                            name="task"
                            id="task"
                            required
                            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Enter task description"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="date" className="text-sm font-medium text-gray-700">Date:</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            required
                            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700">Category:</label>
                        <select
                            name="category"
                            id="category"
                            required
                            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            defaultValue="Personal"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="completed"
                            id="completed"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="completed" className="text-sm font-medium text-gray-700">Completed</label>
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
    );
}