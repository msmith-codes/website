import Link from "next/link";

export default function ProjectsPage() 
{
    return (
        <main>
            <h1>/* Projects */</h1>
            <h2>PhantomDB</h2>
            <ul>
                <li><strong>Type:</strong> Proprietary</li>
                <li><strong>Team Size:</strong> 2</li>
                <li>
                    <strong>Description:</strong> <br/>
                    <p>
                        PhantomDB is a proprietary lightweight order and inventory management application for
                        GS Retail Services. The application's data store used a PostgreSQL-based database and
                        communication with the database was handled via a REST API written in Go. The front end
                        was written using the Electron JavaScript framework.
                    </p>
                </li>
            </ul>

            <Link target="_blank" href="https://store.steampowered.com/app/2124110/Vortix/"><h2>Vortix</h2></Link>
            <ul>
                <li><strong>Genre:</strong> 2D Multiplayer Arcade</li>
                <li><strong>Engine:</strong> Godot</li>
                <li><strong>Team Size:</strong> 3</li>
                <li>
                    <strong>Description:</strong> <br/>
                    <p>
                        Vortix is a sumo marble multiplayer PvP game where you try to knock your opponent out of
                        a shrinking ring. The game's code used the Godot game engine with GDScript as the primary
                        scripting language. Vortix is integrated with the Steamworks API to allow for Steam peer to
                        peer networking.
                    </p>
                </li>
            </ul>
        </main>
    );
}
