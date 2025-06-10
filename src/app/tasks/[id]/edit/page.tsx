import { notFound } from "next/navigation";
import { db } from "db";
import TaskEditForm from "components/taskEditForm";
import Link from "next/link";

interface PageProps {
    params: { id: string }
}

export default async function EditTaskPage({ params }: PageProps) {
    const id = parseInt(params.id);
    if (isNaN(id) || id <= 0) return notFound();

    try {
        const task = await db.task.findUnique({
            where: { id }
        });

        if (!task) return notFound();

        return (
            <div className="container mx-auto p-4">
                <Link href="/" className="font-bold hover:text-blue-600 transition-colors">
                    ← Back to Home
                </Link>
                <h1 className="text-2xl font-bold my-4">Edit Task {task.id}</h1>
                <TaskEditForm task={task} />
            </div>
        );
    } catch (error) {
        console.error("Failed too fetch task:", error);
        return notFound();
    }
}