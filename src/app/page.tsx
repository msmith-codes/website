import React from "react";
import styles from "./page.module.css";

export default function HomePage() : React.ReactElement
{
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Welcome!</h1>
                <p>
                    My name is Michael Smith, and I am a student at Pennsylvania Western University at Edinboro. 
                    I am currently working on a Bachelor's degree in Applied Computing, with a concentration in App 
                    Development and a minor in Mathametics. I am looking to develop game engines for game developers to use.
                </p>
                <h2>Programming Skills</h2>
                <ul>
                    <li>C++ (Fluent)</li>
                    <li>Java (Fluent)</li>
                    <li>Go (Fluent)</li>
                    <li>GDScript (Fluent)</li>
                    <li>Python (Proficient)</li>
                    <li>JavaScript/TypeScript (Proficient)</li>
                    <li>SQL (Proficient)</li>
                </ul>
                <h2>Languages</h2>
                <ul>
                    <li>English (Native)</li>
                    <li>Dutch (Basic)</li>
                </ul>
            </main>
        </div>
    );
}
