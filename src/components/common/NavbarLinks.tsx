import Link from 'next/link';
import React from 'react';

export function NavbarLinks() {
    return (
        <nav className="flex items-center mt-2 sm:mt-0 sm:ml-6">
            <Link href="/">
                <a className="block p-2 text-lg font-bold rounded hover:bg-gray-200 dark-hover:bg-gray-800">
                    Home
                </a>
            </Link>

            <Link href="/guide">
                <a className="block p-2 ml-2 text-lg font-bold rounded hover:bg-gray-200 dark-hover:bg-gray-800">
                    Guide
                </a>
            </Link>

            <Link href="/about">
                <a className="block p-2 ml-2 text-lg font-bold rounded hover:bg-gray-200 dark-hover:bg-gray-800">
                    About
                </a>
            </Link>
        </nav>
    );
}
