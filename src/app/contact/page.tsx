import React from "react";
import styles from "./page.module.css";

export default function ContactPage() : React.ReactElement
{
    let mailto = "mailto:info@msmith.codes";
    let github = "https://github.com/msmith-codes";
    let linkedin = "https://www.linkedin.com/in/michael-smith-628857253/";

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Contact Me!</h1>
                <ul>
                    <li>
                        <strong>Email:</strong> <a href={mailto}>info@msmith.codes</a>
                    </li>
                    <li>
                        <strong>GitHub:</strong> <a href={github} target="_blank">msmith-codes</a>
                    </li>
                    <li>
                        <strong>LinkedIn:</strong> <a href={linkedin} target="_blank">michael-smith-628857253</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}
