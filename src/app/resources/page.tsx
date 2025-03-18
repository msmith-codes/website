import React from "react";
import Link from "next/link";

export default function ResourcesPage() : React.ReactElement
{
    return (
        <div>
            <main>
                <h1>/* Resources */</h1>
                <ul>
                    <li> <Link href="/resources/settingup-cxx">Setting Up C++</Link> </li>
                    <li> <Link href="/resources/makefiles-cxx">Example C++ Makefile</Link> </li>
                </ul>
            </main>
        </div>
    );
}
