import { notFound } from "next/navigation";
import { db } from "@/db";
import TaskEditForm from "@/components/taskEditForm";
import Link from "next/link";

interface PageProps {
    params: {
        id: string;
        searchParams?: { [key: string]: string | string[] | undefined };
    };
}

export default async function Page({ params }: PageProps) {
    const id = parseInt(params.id);
    if (isNaN(id)) return notFound();

    const task = await db.task.findUnique({
        where: { id }
    });

    if (!task) return notFound();

    return (
        <div className="container mx-auto p-4">
            <Link href="/" className="font-bold">Home</Link>
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskEditForm task={task} />
        </div>
    );
}