import TaskEditForm from "@/components/taskEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        id: string;
    };
    searchParams?: Record<string, string | string[] | undefined>;
}

export default async function EditTask({ params }: PageProps) {
    const id = parseInt(params.id);

    if (isNaN(id)) {
        return notFound();
    }

    const task = await db.task.findUnique({
        where: { id }
    });

    if (!task) {
        return notFound();
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskEditForm task={task} />
        </div>
    );
}