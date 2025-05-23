'use client'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function HamburgerMenu({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`${isOpen ? 'block' : 'hidden'} md:block fixed md:static inset-0 z-40 bg-white md:bg-transparent pt-16 md:pt-0`}>
                {children}
            </div>
        </>
    );
}