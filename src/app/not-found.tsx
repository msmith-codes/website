import Link from 'next/link';

export default function Custom404() : React.ReactElement 
{
    return (
        <main>
            <h1>/* 404 */</h1>
            <h2>Page not found</h2>
            <p>
                The page you are looking for does not exist.
            </p>
            <Link href="javascript:history.back()">Go back!</Link>
        </main>
    );
}
