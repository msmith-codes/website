import React from "react";
import Link from "next/link";

export default function ResourcesPage() : React.ReactElement
{
    return (
        <div>
            <main>
                <h1>/* Resources */</h1>
                <ul>
                    <li>
                        <Link href="/resources/cpp-0">Learn C++</Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
