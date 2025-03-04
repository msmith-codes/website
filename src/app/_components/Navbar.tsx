"use client";

import Link from 'next/link';
import "./Navbar.css";

import { usePathname } from 'next/navigation';

export default function NavbarComponent() 
{
    const currentPath = usePathname();

    return (
        <div id="navbar">
            <Link id={currentPath === "/" ? "navitem-active" : "navitem"} href="/">Home</Link> •
            <Link id={currentPath.startsWith("/blog") ? "navitem-active" : "navitem"} href="/blog">Blog</Link> •
            { /*           <Link id={currentPath.startsWith("/resources") ? "navitem-active" : "navitem"} href="/resources">Resources</Link> • */ }
            <Link id={currentPath === "/experience" ? "navitem-active" : "navitem"} href="/experience">Experience</Link> •
            <Link id={currentPath === "/projects" ? "navitem-active" : "navitem"} href="/projects">Projects</Link> •
            <Link id={currentPath === "/contact" ? "navitem-active" : "navitem"} href="/contact">Contact</Link> 
        </div>
    );
}
