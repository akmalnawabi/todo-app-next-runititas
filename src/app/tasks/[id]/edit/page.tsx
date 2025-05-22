import TaskEditForm from "@/components/taskEditForm"
import { db } from "@/db"
import { notFound } from "next/navigation"

interface TaskEditPageProps {
    params: {
        id: string
    }
}

export default async function EditTask(props: TaskEditPageProps) {
    const id = parseInt(props.params.id)
    const task = await db.task.findFirst({
        where: {id}
    })

    if(!task){
        return notFound()
    }
    return (
        <div>
            <TaskEditForm task={task}/>
        </div>
    )
}