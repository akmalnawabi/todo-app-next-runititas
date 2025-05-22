'use client'

import { User, Settings, Bell } from "lucide-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function Calender() {
    const [value, setValue] = useState<Date | null>(new Date())

    return (
        <div className="">
            <aside className="bg-white p-5">
                <div className="flex items-center mb-4">
                   
                    <div className="flex">
                        <User className="rounded text-blue-500 mt-1"/>
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

                <div className="bg-white p-4">
                    <Calendar onChange={(val) => setValue(val as Date)} value={value} />
                    <p className="text-sm text-gray-500 mt-2">
                        Selected date: {value?.toDateString()}
                    </p>
                </div>
                
            </aside>
        </div>
    )
}