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
                    <li>
                        <Link href="/resources/py-0">Learn Python</Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
