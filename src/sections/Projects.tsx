import CastlevaniaImage from "@/assets/CastlevaniaImage.png"
import CliffHopperImage from "@/assets/CliffHopperImage.png"
import EatnliftLogo from "@/assets/EatnliftLogo.png"

import Image from "next/image";

export const Projects = () => {
    const projects = [
        {
            title: "Castlevania Symphony of the Night Knight",
            image: CastlevaniaImage,
            description: "Juego 2D creado utilizando OpenGL basado en el juego Night Knight de MSX, usando recursos de Castlevania Symphony of the Night.",
            link: "https://github.com/Xasyo/Castlevania-Symphony-of-the-Night-Knight",
        },
        {
            title: "Cliff Hopper",
            image: CliffHopperImage,
            description: "Juego 3D creado con Unity basado en el juego real Cliff Hopper.",
            link: "https://github.com/Xasyo/Cliff-Hopper",
        },
        {
            title: "Eatnlift",
            image: EatnliftLogo,
            description: "Eatnlift es una aplicación móvil que permite a los usuarios hacer un seguimiento de su entrenamiento así como de su nutrición.",
            link: "https://github.com/Xasyo/Eatnlift",
        },
    ]

    return (
        <section id="projects" className="container mt-10 lg:mt-20">
            <h1 className="text-5xl lg:text-7xl mb-10 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text text-center">
                Proyectos
            </h1>
            <div className="flex flex-col md:flex-row gap-10 md:gap-5">
                {projects.map(
                    ({
                        title,
                        image,
                        description,
                        link,
                    }, index) => (
                        <a href={link} key={index} className="flex-1 bg-white hover:scale-105 duration-300 rounded-2xl p-6 shadow-2xl">
                            <h2 className="text-2xl font-bold text-[#3c3c3cea] md:h-24 lg:h-10">{title}</h2>
                            <p className="text-1xl text-[#3c3c3cea] tracking-tight mt-10 text-justify md:h-28 lg:h-20">{description}</p>
                            <div className="flex justify-center items-center flex-grow">
                                <Image 
                                    src={image} 
                                    alt={title} 
                                    className="rounded-lg mt-12 mb-6"
                                />
                            </div>
                        </a>
                    )
                )}
            </div>
        </section>
    );
};