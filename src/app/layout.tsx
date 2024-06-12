import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MdMail } from "react-icons/md";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Michael Smith"
};

interface RootLayoutProps
{
    children : React.ReactNode;
}

export default function RootLayout(props : RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {props.children}
                <div className="flex flex-col items-center justify-center min-w-screen min-h-80 bg-black/85">
                    <h1 className="text-white text-xl">Michael Smith</h1>
                    <div className="inline-flex items-center justify-center mt-4">
                        <div className="inline-flex flex-col items-center justify-center px-2">
                            <Link href="https://github.com/msmith-codes/" target="_blank">
                                <GitHubLogoIcon color="white" width={32} height={32}/>
                            </Link>
                            
                        </div>
                        <div className="inline-flex flex-col items-center justify-center px-2">
                            <Link href="https://www.linkedin.com/in/michael-smith-928148302/" target="_blank">
                                <LinkedInLogoIcon color="white" width={32} height={32}/>
                            </Link>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center px-2">
                            <Link href="mailto:info@msmith.codes" target="_blank">
                                <MdMail color="white" size={32}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
