import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-64 bg-gradient-to-b from-gray-900 to-black">   
            <div className="flex flex-col items-center justify-center">
                <Image className="" alt="Profile Picture" src="pfp.svg" width={256} height={256}/>
                <br />
                <h1 className="text-6xl text-white">
                    <strong>Michael Smith</strong>
                </h1>
            </div>
            <div className="inline-flex columns-3 items-center justify-center pt-10" role="group">
                <Button asChild className="mx-2 text-slate-200 text-xl underline hover:text-white" variant={"link"}>
                    <Link href="/projects">Projects</Link>
                </Button>
                {/*<Button className="mx-2 text-slate-200 text-xl underline hover:text-white" variant={"link"}>Research</Button>
                <Button className="mx-2 text-slate-200 text-xl underline hover:text-white" variant={"link"}>Resume</Button>*/}
            </div>
        </main>
    );
}
