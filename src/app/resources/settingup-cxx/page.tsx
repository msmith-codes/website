"use client";

import Link from "next/link";
import Image from "next/image";
import { CodeBlock, dracula } from "react-code-blocks";

export default function CPP0Page()
{
    const installCommand = `pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain`;
    const checkCommand = `g++ --version \ngcc --version \ngdb --version`;
    const checkClang = `clang --version`;
    const installGCC = `sudo apt-get update \nsudo apt-get install build-essential gdb`;

    const mainCpp = `#include <iostream>

int main()
{
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`

    return (
        <main>
            <h1>/* Setting up C++ */</h1>
            <p>
                In order to begin development in C++ you need to install a C++ compiler. 
                There are a few different compilers you could install.
            </p>
            <h2>// Table of Contents</h2>
            <ul>
                <li><Link href="#windows">Windows</Link></li>
                <li><Link href="#mac">Mac</Link></li>
                <li><Link href="#linux">Linux</Link></li>
            </ul>
            <h2 id="windows">// Windows</h2>
            <p>
                Installing C++ on Windows is a bit more complicated than on other operating systems. In this guide we 
                will be using the MinGW compiler. MinGW is a port of the GNU Compiler Collection (GCC) to Windows. 
            </p>
            <ol>
                <li>
                    Download the MinGW install from the MinGW website or from the <Link target="_blank" href="https://github.com/msys2/msys2-installer/releases/download/2024-01-13/msys2-x86_64-20240113.exe">direct link</Link>.
                </li>
                <li>
                    In the installation wizard, choose a destination folder for MinGW. In most cases, the default location is
                    recommended. Once it's completed make sure you check the <strong>Run MYS2 now</strong> box and select finish.
                </li>
                <li>
                    A terminal window will open. In the terminal window, type the following command. 
                    This will install the MinGW-w64 toolchain.
                    <CodeBlock text={installCommand} showLineNumbers={false} language="batch" theme={dracula}/>
                </li>
                <li>
                    Make sure you accept the default number of packages in the toolchain by pressing Enter.
                    <Image src="/imgs/cpp0/mingw-install.png" alt="MinGW install" width={635} height={213}/>
                </li>
                <li>
                    Enter `Y` when prompted if you want to proceed with the installation.
                </li>
                <li>
                    After installed you need to add your MinGW bin folder to your Window's PATH.
                    <ol>
                        <li>
                            Press the Windows key and search for <strong>Edit environment variables for your account</strong>.
                        </li>
                        <li>
                            In the <strong>User variables</strong> section find and select the <strong>Path</strong> variable and click <strong>Edit</strong>.
                        </li>
                        <li>
                            A popup will appear. Click <strong>New</strong> and paste the path to your MinGW bin folder. 
                            By default, it will be:
                            <CodeBlock text="C:\msys64\ucrt64\bin" showLineNumbers={false} language="plain" theme={dracula}/>
                        </li>
                        <li>
                            Click <strong>OK</strong> on all the windows to close them.
                        </li>
                    </ol>
                </li>
                <li>
                    Verify that MinGW is installed by opening a command prompt and typing: 
                    <CodeBlock text={checkCommand} showLineNumbers={false} language="batch" theme={dracula}/>
                </li>
            </ol>

            <h2 id="mac">// Mac</h2>
            <p>
                Mac comes with the Clang compiler pre-installed. Clang is a C, C++, and Objective-C compiler that is 
                part of the LLVM project.
            </p>
            <ol>
                <li>
                    Open a terminal window and type the following command to check if Clang is installed.
                    <CodeBlock text={checkClang} showLineNumbers={false} language="shell" theme={dracula}/>
                </li>
                <li>
                    If Clang is not installed you can install it by typing the following command.
                    <CodeBlock text="xcode-select --install" showLineNumbers={false} language="shell" theme={dracula}/>
                </li>
            </ol>

            <h2 id="linux">// Linux</h2>
            <p>
                Linux comes with the GCC compiler pre-installed. GCC is a C, C++, and Fortran compiler that is 
                part of the GNU project
            </p>
            <ol>
                <li>
                    Open a terminal window and type the following command to check if GCC is installed.
                    <CodeBlock text="gcc -v" showLineNumbers={false} language="bash" theme={dracula}/>
                </li>
                <li>
                    If GCC is not installed you can install it by typing the following commands.
                    <CodeBlock text={installGCC} showLineNumbers={false} language="bash" theme={dracula}/>
                </li>
            </ol>

            <h2>// Verify Installation</h2>
            <p>
                To verify that your compiler is installed correctly you can create a simple C++ program and compile it.
                We will explain how this code works in the next section.
            </p>
            <p>
                <CodeBlock text={mainCpp} showLineNumbers={true} language="cpp" theme={dracula}/>
            </p>


        </main>
    );
}
