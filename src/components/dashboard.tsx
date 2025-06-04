'use client'

import React from "react";
import { Star, Leaf, User, BatteryCharging, UserCircle, PlusCircle, Search } from "lucide-react";
import { HamburgerMenu } from "@/components/humburgerMenu";
import { useState } from "react";

interface DashboardProps {
    totalCount: number;
    todayCount: number;
    completedCount: number;
    importantCount: number;
    personalCount: number;
    assignedCount: number;
    gopayCount: number;
    kretyaCount: number;
    contentDumpCount: number;
}

interface MenuItem {
    id: string;
    label: string;
    icon: React.JSX.Element;
    count: number;
    category: 'favorites' | 'tags';
}

export default function Dashboard({
    totalCount,
    todayCount,
    completedCount,
    importantCount,
    personalCount,
    assignedCount,
    gopayCount,
    kretyaCount,
    contentDumpCount
}: DashboardProps) {
    const [search, setSearch] = useState('');

    const menuItems: MenuItem[] = [
        { id: 'my-day', label: 'My Day', icon: <BatteryCharging className="text-blue-500 mr-1 w-5" />, count: todayCount, category: 'favorites' },
        { id: 'important', label: 'Important', icon: <Star className="text-blue-500 mr-1 w-5" />, count: importantCount, category: 'favorites' },
        { id: 'personal', label: 'Personal', icon: <User className="text-blue-500 mr-1 w-5" />, count: personalCount, category: 'favorites' },
        { id: 'all', label: 'All', icon: <UserCircle className="text-blue-500 mr-1 w-5" />, count: totalCount, category: 'favorites' },
        { id: 'completed', label: 'Completed', icon: <PlusCircle className="text-blue-500 mr-1 w-5" />, count: completedCount, category: 'favorites' },
        { id: 'assigned', label: 'Assigned to me', icon: <Leaf className="text-blue-500 mr-1 w-5" />, count: assignedCount, category: 'favorites' },
        { id: 'gopay', label: 'GoPay', icon: <PlusCircle className="text-blue-500 mr-1 w-5" />, count: gopayCount, category: 'tags' },
        { id: 'kretya', label: 'Kretya Studio', icon: <Leaf className="text-gray-900 mr-1 w-5" />, count: kretyaCount || 0, category: 'tags' },
        { id: 'content-dump', label: 'Content Dump', icon: <Star className="text-yellow-500 mr-1 w-5" />, count: contentDumpCount || 0, category: 'tags' },
    ];

    const filteredItems = menuItems.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase())
    );

    const filteredFavorites = filteredItems.filter(item => item.category === 'favorites');
    const filteredTags = filteredItems.filter(item => item.category === 'tags');

    return (
        <HamburgerMenu>
            <aside className="bg-gray-50 p-5 h-full md:h-auto">
                <h2 className="text-xl font-bold mb-4 flex"><Leaf className="text-blue-500 mr-2 w-5" />Rutinintas</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-1 border border-gray-300 rounded-xl mb-4 bg-gray-200"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div><Search className="absolute inset-y-1 right-2 flex items-center text-gray-400" /></div>
                </div>

                {filteredFavorites.length > 0 && (
                    <div className="mb-4">
                        <h3 className="text-sm text-gray-600 mb-3">Favorites</h3>
                        <ul className="space-y-2 font-semibold text-sm p-2 text-gray-800">
                            {filteredFavorites.map(item => (
                                <li key={item.id} className="flex relative">
                                    {item.icon}
                                    {item.label}
                                    <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                                        {item.count}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {filteredTags.length > 0 && (
                    <div>
                        <h3 className="text-sm text-gray-600 my-3">Your own tags</h3>
                        <ul className="space-y-2 text-sm p-2 font-semibold text-gray-800">
                            {filteredTags.map(item => (
                                <li key={item.id} className="flex relative">
                                    {item.icon}
                                    {item.label}
                                    <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                                        {item.count}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {filteredItems.length === 0 && (
                    <div className="text-gray-500 text-center py-4">
                        No items found matching your search.
                    </div>
                )}
            </aside>
        </HamburgerMenu>
    );
}