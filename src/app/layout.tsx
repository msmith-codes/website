import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Michael Smith",
    description: "My portfolio website",
};

interface RootLayoutProps 
{
    children : React.ReactNode;
}

export default function RootLayout(props : RootLayoutProps) : React.ReactElement
{
    return (
        <html lang="en">
            <body>
                <header>
                    <div id="nav">
                        <a href="/">Home</a> | 
                        <a href="/resources">Resources</a> | 
                        <a href="/projects">Projects</a> | 
                        <a href="/contact">Contact</a>
                    </div>
                    <hr/>
                </header>
                
                {props.children}
                
                <footer>

                </footer>
            </body>
        </html>
    );
}
