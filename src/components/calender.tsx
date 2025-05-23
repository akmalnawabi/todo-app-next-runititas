'use client'

import { User, Settings, Bell } from "lucide-react";
import ReactCalendar from 'react-calendar'; // Renamed import to avoid conflict
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export default function Calendar() {
    const [value, setValue] = useState<Date>(new Date()); // Removed null type since react-calendar doesn't return null

    return (
        <div className="hidden md:block">
            <aside className="bg-white p-5 rounded-lg shadow-sm">
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

                <div className="bg-white p-4">
                    <ReactCalendar
                        value={value}
                        className="border-none"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                        Selected date: {value.toDateString()}
                    </p>
                </div>
            </aside>
        </div>
    )
}