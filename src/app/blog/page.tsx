import Link from "next/link";

export default function BlogPage()
{
    return (
        <main>
            <h1>/* Blog */</h1>
            <ol>
                <li>
                    <Link href="/blog/engines-or-frameworks">Game Engines or Game Frameworks</Link>
                </li>
                <li>
                    <Link href="/blog/languages-under-the-hood">Languages Under The Hood</Link>
                </li>
                <li>
                    <Link href="/blog/how-to-improve">How to Improve At Coding</Link>
                </li>
            </ol>
        </main>
    );
}
