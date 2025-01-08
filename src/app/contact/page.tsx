"use client";

import Link from 'next/link';

export default function ContactPage()
{
    return (
        <main>
            <h1>/* Contact */</h1>
            <p> 
                Interested in collaborating, suggestions or just want to reaching out? Send an email to <Link href="mailto:msmith.softwaredev@gmail.com">msmith.softwaredev@gmail.com</Link>
            </p>
        </main>
    );
}
