import React from "react";
import styles from "./page.module.css";
import watorGif from "./wator.gif"
import spaceInvadersGif from "./space_invaders.gif"
import ezVimPng from "./ezvim.png"
import Image from "next/image";

export default function ProjectsPage() : React.ReactElement
{
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Projects</h1>
                <h2>Development</h2>
                <div>
                    <h3>EzVim (<a href="https://github.com/msmith-codes/EzVim" target="_blank">GitHub</a>)</h3>
                    <p>
                        My main text editor I use is NeoVim. I have been configuring it to fit my development needs. Since I have started
                        configuring it I made my own NeoVim distro called EzVim. It is a simple distro that is easy to use and configure.
                        It is also easy to install and is a work in progress.
                    </p>
                    <p>
                        Here is an example of what it looks like:
                    </p>
                    <Image src={ezVimPng.src} alt="EzVim Screenshot" width={640} height={360}/>

                </div>
                <h2>Algorithms</h2>
                <div>
                    <h3>Wa-Tor (<a href="https://github.com/msmith-codes/WaTor" target="_blank">GitHub</a>)</h3>
                    <p>
                        This is my basic implementation of the <a href="https://en.wikipedia.org/wiki/Wa-Tor" target="_blank">Wa-Tor</a> simulation. 
                        The Wa-Tor simulation is a simulation of a predator-prey ecosystem. In this simulation, there are two types of creatures:
                        fish and sharks. Fish move randomly, and sharks move randomly and eat fish. This algorithm does not have any user input.
                    </p>
                    <p>
                        Here is an example animation:
                    </p>
                    <Image src={watorGif.src} alt="Wa-Tor Gif" width={640} height={320}/>
                    <p>
                        Fish are represented with blue and sharks are represented with red.
                    </p>
                </div>
                <h2>Homework Assignments</h2>
                <div>
                    <h3>Space Invaders Tribute (<a href="https://github.com/msmith-codes/SpaceInvadersTribute" target="_blank">GitHub</a>)</h3>
                    <p>
                        This is a homework assignment I did for my Graphics Programming class. It is a tribute to the classic game Space Invaders.
                        This assignment was done using JavaScript in an HTML5 canvas.
                    </p>
                    <p>
                        Here is an example animation:
                    </p>
                    <Image src={spaceInvadersGif.src} alt="Space Invaders Gif" width={640} height={320}/>
                    <p>
                        The fleet of aliens are in blue while the player and shields are green. Bullets are red.
                    </p>
                </div>
            </main>
        </div>
    );
}
