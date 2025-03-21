import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "./_components/Navbar";

export const metadata : Metadata = {
    title: "Michael Smith",
    description: "The portfolio Website of Michael Smith",
};

interface RootLayoutProps 
{
    children: React.ReactNode;
}

export default function RootLayout(props : RootLayoutProps) 
{
    return (
        <html lang="en">
            <body>
                <header>
                    <hr/>
                        <NavbarComponent />
                    <hr/>
                </header>   
                {props.children}
                <footer>
                    
                </footer>
            </body>
        </html>
    );
}

