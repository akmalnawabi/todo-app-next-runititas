import { notFound } from "next/navigation";
import { db } from "@/db";
import TaskEditForm from "@/components/taskEditForm";

// interface PageProps {
//     params: {
//         id: string;
//     };
//     searchParams?: {
//         [key: string]: string | string[] | undefined;
//     };
// }

export default async function EditTask() {
  

    // const task = await db.task.findUnique({
    //     where: { id }
    // });

    // if (!task) return notFound();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            {/* <TaskEditForm task={task} /> */}
        </div>
    );
}