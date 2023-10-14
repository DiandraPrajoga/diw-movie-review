'use client';

import Link from 'next/link';
import React from 'react'


export default function Header() {
    return (
        <div className="navbar bg-gradient-to-r from-indigo-950 to-indigo-900 flex items-center h-[6rem]">
            <div className="flex-1 ml-[4rem]">
                <a className="normal-case text-2xl font-bold text-white">Diandra Review</a>
            </div>
            <div className="flex">
                <ul className="flex flex-row gap-10 px-8 text-2xl mr-[2rem] text-white">
                    <li>
                        <Link href="/" className='hover:font-bold'>Home</Link>
                    </li>
                    <li>
                        <Link href="/movies" className='hover:font-bold'>Movies</Link>
                    </li>
                    <li>
                        <Link href="/series" className='hover:font-bold'>Series</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
