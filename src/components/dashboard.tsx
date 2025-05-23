import { Star, Leaf, User, BatteryCharging, UserCircle, PlusCircle } from "lucide-react";
import { HamburgerMenu } from "@/components/humburgerMenu";

export default function Dashboard() {
    return (
        <HamburgerMenu>
            <aside className="bg-white p-5 h-full md:h-auto">
                <h2 className="text-xl font-bold mb-4 flex"><Leaf className="text-blue-500 mr-2 w-5" />Rutinintas</h2>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-1 border border-gray-300 rounded-xl mb-4"
                />
                <div className="mb-4">
                    <h3 className="text-sm text-gray-600 mb-2">Favorites</h3>
                    <ul className="space-y-2 font-semibold text-sm text-gray-800">
                        <li className="flex"><BatteryCharging className="text-blue-500 mr-1 w-5" />My Day</li>
                        <li className="flex"><Star className="text-blue-500 mr-1 w-5" />Important</li>
                        <li className="flex"><User className="text-blue-500 mr-1 w-5" />Personal</li>
                        <li className="flex"><UserCircle className="text-blue-500 mr-1 w-5" />All</li>
                        <li className="flex"><PlusCircle className="text-blue-500 mr-1 w-5" />Completed</li>
                        <li className="flex"><Leaf className="text-blue-500 mr-1 w-5" />Assigned to me</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm text-gray-600 mb-2">Your own tags</h3>
                    <ul className="space-y-2 text-sm font-semibold text-gray-800">
                        <li>GoPay</li>
                        <li>Kretya Studio</li>
                        <li>Content Dump</li>
                    </ul>
                </div>
            </aside>
        </HamburgerMenu>
    );
}