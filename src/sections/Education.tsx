"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import INSVicençPlantadaLogo from "@/assets/INSVIcençPlantadaLogo.png";
import UPCLogo from "@/assets/UPCLogo.png";
import FIBLogo from "@/assets/FIBLogo.png";

export const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.2 1", "1.2 1"],
    });

    const educations = [
        {
            center: "IES Vicenç Plantada",
            title: "Bachillerato Tecnológico",
            period: "Septiembre 2018 - Junio 2020",
            grade: "Nota media final: 9.48",
            image: INSVicençPlantadaLogo,
            link: "https://agora.xtec.cat/iesvplantada/",
        },
        {
            center: "Facultad de Informática de Barcelona, Universidad Politécnica de Cataluña",
            title: "Grado en Ingeniería Informática con especialidad en Ingeniería del Software",
            period: "Septiembre 2020 - Enero 2025",
            grade: "Nota media final: 8.18",
            image: UPCLogo,
            image2: FIBLogo,
            link: "https://www.fib.upc.edu/es/estudios/grados/grado-en-ingenieria-informatica",
        },
    ];

    return (
        <section id="education" className="container mt-10 lg:mt-20">
            <h1 className="text-5xl lg:text-7xl mb-5 lg:mb-10 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text text-center">
                Formación
            </h1>
            <div ref={ref} className="flex flex-col gap-y-10">
                {educations.map(({ center, title, period, grade, image, image2, link }, index) => {
                    const xOffset = useTransform(
                        scrollYProgress,
                        [0, 1],
                        index % 2 === 0 ? [-300, 0] : [300, 0]
                    );

                    return (
                        <motion.a
                            href={link}
                            key={index}
                            style={{ x: xOffset}}
                            className="block"
                        >
                            <div className="md:flex gap-10 bg-white hover:scale-105 duration-300 rounded-2xl p-6 shadow-2xl">
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold tracking-tighter text-[#3c3c3cea]">{center}</h1>
                                    <p className="text-xl text-[#3c3c3cea] font-bold tracking-tight mt-2 text-justify">
                                        {period}
                                    </p>
                                    <p className="text-xl text-[#3c3c3cea] tracking-tight mt-2 text-justify">{title}</p>
                                    <p className="text-xl text-[#3c3c3cea] tracking-tight mt-2 text-justify">{grade}</p>
                                </div>
                                <div className="flex-1 mt-7 md:mt-0 flex justify-end items-center">
                                    <motion.div
                                        animate={{ translateY: [-4, 4] }}
                                        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" }}
                                        className="flex justify-center"
                                    >
                                        <Image src={image} alt="center" className="h-32 w-auto object-contain" />
                                    </motion.div>
                                    {image2 && (
                                        <motion.div
                                            animate={{ translateY: [-5, 5] }}
                                            transition={{ repeat: Infinity, repeatType: "mirror", duration: 4, ease: "easeInOut" }}
                                            className="flex justify-center"
                                        >
                                            <Image src={image2} alt="center" className="h-32 w-auto object-contain" />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
};
