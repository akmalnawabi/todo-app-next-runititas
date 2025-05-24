import TaskEditForm from "@/components/taskEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";
import { JSX } from "react";

type Params = {
    id: string;
};

interface PageProps {
    params: Params;
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function EditTask({ params }: PageProps): Promise<JSX.Element> {
    const id = parseInt(params.id);

    if (isNaN(id)) {
        notFound();
    }

    const task = await db.task.findUnique({
        where: { id }
    });

    if (!task) {
        notFound();
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskEditForm key={task.id} task={task} />
        </div>
    );
}
