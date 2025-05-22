'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editTask(id: number, formData: FormData) {
    const task = formData.get('task') as string
    const dateString = formData.get('date') as string
    const date = new Date(dateString)

    await db.task.update({
        where: {id},
        data: {task, date}
    })

    redirect(`/tasks/${id}`)
}

export async function deleteTask(id:number) {
    await db.task.delete({
        where: {id}
    })

    redirect('/')
}