'use client'

import { User, Settings, Bell } from "lucide-react";
import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (

        <div className="hidden md:block bg-gray-50">
            <aside className="p-5 rounded-lg">
                <div className="flex items-center mb-4">
                    <div className="flex">
                        <User className="rounded text-blue-500 mt-1" />
                        <div className="flex flex-col ml-1">
                            <p className="font-semibold text-sm">Alvian Putra</p>
                            <p className="text-xs text-gray-500">al@gmail.com</p>
                        </div>
                        <div className="flex ml-8 mt-1 text-blue-500">
                            <Bell />
                            <Settings className="ml-4" />
                        </div>
                    </div>
                </div>
            </aside>

            <div className="">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    classNames={{
                        day_selected: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 rounded-xl",
                      }}
                />
            </div>
        </div>

    )
}
