import { Star, Leaf, User, BatteryCharging, UserCircle, PlusCircle, Search } from "lucide-react";
import { HamburgerMenu } from "@/components/humburgerMenu";

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
    return (
        <HamburgerMenu>
            <aside className="bg-gray-50 p-5 h-full md:h-auto">
                <h2 className="text-xl font-bold mb-4 flex"><Leaf className="text-blue-500 mr-2 w-5" />Rutinintas</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-1 border border-gray-300 rounded-xl mb-4 bg-gray-200"
                    />
                    <div><Search className="absolute inset-y-1 right-2 flex items-center text-gray-400" /></div>
                </div>
                <div className="mb-4">
                    <h3 className="text-sm text-gray-600 mb-3">Favorites</h3>
                    <ul className="space-y-2 font-semibold text-sm p-2 text-gray-800">
                        <li className="flex relative"><BatteryCharging className="text-blue-500 mr-1 w-5" />My Day  <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {todayCount}
                        </span></li>
                        <li className="flex relative"><Star className="text-blue-500 mr-1 w-5" />Important <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {importantCount}
                        </span></li>
                        <li className="flex relative"><User className="text-blue-500 mr-1 w-5" />Personal <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {personalCount}
                        </span></li>
                        <li className="flex relative"><UserCircle className="text-blue-500 mr-1 w-5" />All <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {totalCount}
                        </span></li>
                        <li className="flex relative"><PlusCircle className="text-blue-500 mr-1 w-5" />Completed <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {completedCount}
                        </span></li>
                        <li className="flex relative"><Leaf className="text-blue-500 mr-1 w-5" />Assigned to me <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {assignedCount}
                        </span></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm text-gray-600 my-3">Your own tags</h3>
                    <ul className="space-y-2 text-sm p-2 font-semibold text-gray-800">
                        <li className="flex relative"><PlusCircle className="text-blue-500 mr-1 w-5" />GoPay <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                            {gopayCount}
                        </span></li>
                        <li className="flex relative">
                            <Leaf className="text-gray-900 mr-1 w-5" />
                            Kretya Studio
                            <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                                {kretyaCount || 0}
                            </span>
                        </li>
                        <li className="flex relative">
                            <Star className="text-yellow-500 mr-1 w-5" />
                            Content Dump
                            <span className="bg-gray-200 absolute right-0 text-xs px-2 py-0.5 rounded-full">
                                {contentDumpCount || 0}
                            </span>
                        </li>
                    </ul>
                </div>
            </aside>
        </HamburgerMenu>
    );
}