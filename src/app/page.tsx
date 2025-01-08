import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <h1>/* Welcome to msmith.codes */</h1>
            <h2>I'm Michael!</h2>
            <p>
                I'm a 22 year old white dude who enjoys traveling while making video games.
            </p>
            <br/>
            
            <h1>/* Projects */</h1>
            <Link target="_blank" href="https://store.steampowered.com/app/2124110/Vortix/"><h2>Vortix</h2></Link>
            <ul>
                <li><strong>Genre:</strong> 2D Multiplayer Arcade</li>
                <li><strong>Engine:</strong> Godot</li>
                <li><strong>Team Size:</strong> 3</li>
                <li>
                    <strong>Description:</strong> <br/>
                    <p>
                        My main goal when developing Vortix was to experiment with syncing physics over a network.
                        With this task, I created a simple sumo game where players try to knock the opponent out of 
                        a shrinking circle. I was one out of two developers on this project. My main task was networking
                        and basic game design.
                    </p>
                </li>
            </ul>
        </main>
    );
}
