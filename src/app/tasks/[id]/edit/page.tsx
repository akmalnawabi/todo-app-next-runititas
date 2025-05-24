import TaskEditForm from "@/components/taskEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

export const dynamicParams = true;


export default async function EditTask({
    params,
}: {
    params: { id: string };
}) {
    const id = Number(params.id);

    if (isNaN(id)) {
        return notFound();
    }

    const task = await db.task.findUnique({
        where: { id },
    });

    if (!task) {
        return notFound();
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskEditForm key={task.id} task={task} />
        </div>
    );
}
