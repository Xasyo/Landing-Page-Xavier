"use client";

import i2CatLogo  from "@/assets/i2CatLogo.png";

import { motion } from "framer-motion";
import Image from "next/image";

export const Experience = () => {

    const experiences = [
        {
            company: "i2Cat",
            position: "3D Software Engineer",
            period: "Febrero 2024 - Enero 2025",
            description: "Desarrollo de un sistema de captura de vídeo volumétrico con integración de cámaras RGB+D y lightfield",
            link: "https://i2cat.net/",
            image: i2CatLogo
        }
    ]

    return (
        <section id="experience" className="container mt-10 lg:mt-20">
            <h1 className="text-5xl lg:text-7xl mb-5 lg:mb-10 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text text-center">
                Experiencia
            </h1>
            {experiences.map (
                ({
                    company,
                    position,
                    period,
                    description,
                    link,
                    image
                }, index) => (
                    <a href={link} key={index}>
                        <div className="md:flex md:gap-10 bg-white hover:scale-105 duration-300 rounded-2xl p-6 shadow-2xl">
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold tracking-tighter text-[#3c3c3cea]">{company}</h1>
                                <h1 className="text-3xl mt-2 font-bold tracking-tighter text-[#3c3c3cea]">{position}</h1>
                                <p className="text-xl text-[#3c3c3cea] font-bold tracking-tight mt-2 text-justify">{period}</p>
                                <p className="text-xl text-[#3c3c3cea] tracking-tight mt-2 text-justify">{description}</p>
                            </div>
                            <div className="flex-1 mt-7 md:mt-0 flex justify-end items-center">
                            <motion.div
                                    animate={{ translateY: [-6, 6] }}
                                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 4, ease: "easeInOut" }}
                                    className="flex justify-center"
                                >
                                    <Image
                                        src={image}
                                        alt="company"
                                        className="h-20 w-auto object-contain"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </a>
                )
            )}
        </section>
    );
};