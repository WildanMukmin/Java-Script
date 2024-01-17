"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import { document } from "postcss"

const navLinks  = [
    {name : "My Skils", href : "/my-skils"},
    {name : "About", href : "/about"},
    {name : "Contact", href : "/contact"},
]

export default function Header (){
    
    const pathname = usePathname(); 
    return (
        <main className="navbarUtama">
        <Link href="/" className="logo">Wildan Mukmin</Link>

        <div className="navbarKanan">
               {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name} className= { isActive ? "navOn" : "" } >{link.name}</Link>
                )})}
        </div>
        <div className="mobile-view"  >
                    <span className="mobile-view-child"></span>
                    <span className="mobile-view-child"></span>
                    <span className="mobile-view-child"></span>
                </div>
        </main>
    )
}