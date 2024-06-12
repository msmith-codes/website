import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-gradient-to-b from-gray-900 to-black">   
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-9xl">🛠️</h1>
                <br />
                <h1 className="text-6xl text-white">
                    <strong>Projects</strong>
                </h1>
            </div>

            <div className="inline-flex items-center justify-center bg-white/15 mt-20 rounded-3xl pb-24">
                <div id="games" className="flex flex-col items-center justify-center pt-24 px-16"> 
                    <Carousel className="w-full max-w-fit">
                        <CarouselContent>
                            <CarouselItem>
                            <div className="p-1">
                                <Card className="bg-gray-100 border-2 border-white">
                                    <CardHeader className="max-h-0">
                                        <div className="inline-flex items-center justify-center">
                                            <h1 className="text-8xl mx-3">👾</h1>
                                            <h1 className="text-8xl text-black">
                                                <strong>Games</strong>
                                            </h1>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex aspect-square items-center justify-center">
                                        <Image src="/vortix_capsule.png" alt="Vortix" height="353" width="616" />
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center">
                                        <Button className="mx-2 text-slate-200 text-xl hover:text-white" variant={"default"}>
                                            <Link target="_blank" href={"https://store.steampowered.com/app/2124110/Vortix/"} className="text-xl font-semibold">View on Steam</Link>
                                        </Button>
                                        <Button className="mx-2 text-slate-200 text-xl hover:text-white" variant={"default"}>
                                            <Link target="_blank" href={"https://tanktekgames.itch.io/vortix-demo"} className="text-xl font-semibold">View on Itch.io</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        {/*<CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                </div>
                <div id="tech" className="flex flex-col items-center justify-center pt-24 px-16"> 
                    <Carousel className="w-full max-w-fit">
                        <CarouselContent>
                            <CarouselItem>
                            <div className="p-1">
                                <Card className="bg-gray-100 border-2 border-white">
                                    <CardHeader className="max-h-0">
                                        <div className="inline-flex items-center justify-center">
                                            <h1 className="text-8xl mx-3">📡</h1>
                                            <h1 className="text-8xl text-black">
                                                <strong>Tech</strong>
                                            </h1>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex aspect-square items-center justify-center">
                                        <Image src="/recon_capsule.png" alt="Recon" height="353" width="616" />
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center">
                                        <Button className="mx-2 text-slate-200 text-xl hover:text-white" variant={"default"}>
                                            <Link target="_blank" href={"https://github.com/TankTekGames/recon-gdsdk"} className="text-xl font-semibold">View on GitHub</Link>
                                        </Button>
                                        <Button className="mx-2 text-slate-200 text-xl hover:text-white" variant={"default"}>
                                            <Link target="_blank" href={"https://tanktekgames.gitbook.io/recon/"} className="text-xl font-semibold">View Documentation</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        {/*<CarouselPrevious />
                        <CarouselNext /> */}
                    </Carousel>
                </div>
            </div>
        </main>
    );
}
