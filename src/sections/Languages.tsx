"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import SpainFlag from "@/assets/BanderaEspaña.png";
import CataloniaFlag from "@/assets/BanderaCataluña.png";
import UKFlag from "@/assets/BanderaReinoUnido.png";
import FranceFlag from "@/assets/BanderaFrancia.png";

export const Languages = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.2 1", "1.2 1"],
    });

    const languages = [
        { language: "Español", level: "Nativo", flag: SpainFlag },
        { language: "Catalán", level: "Nativo", flag: CataloniaFlag },
        { language: "Inglés", level: "C1", flag: UKFlag, certificate: "/documents/C1_Ingles.pdf" },
        { language: "Francés", level: "B2", flag: FranceFlag, certificate: "/documents/B2_Frances.pdf" },
    ];

    const xOffsets = languages.map((_, index) =>
        useTransform(scrollYProgress, [0, 1], index < 2 ? [-200, 0] : [200, 0])
    );

    return (
        <section id="languages" className="container mt-10 lg:mt-20">
            <h1 className="text-5xl lg:text-7xl mb-10 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text text-center">
                Idiomas
            </h1>
            <div ref={ref} className="flex flex-col md:flex-row gap-10 md:gap-5">
                {languages.map(({ language, level, flag, certificate }, index) => (
                    <motion.div
                        key={index}
                        style={{ x: xOffsets[index] }}
                        className="flex-1 bg-white hover:scale-105 duration-300 rounded-2xl p-6 shadow-2xl"
                    >
                        {certificate ? (
                            <a href={certificate}>
                                <div className="flex gap-5 justify-center items-center">
                                    <h2 className="text-2xl font-bold text-[#3c3c3cea] text-center">{language}</h2>
                                    <Image src={flag} alt={language} className="rounded-lg object-contain" width={30} height={20} />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-2xl font-bold text-[#3c3c3cea] text-center">{level}</h2>
                                </div>
                            </a>
                        ) : (
                            <div>
                                <div className="flex gap-5 justify-center items-center">
                                    <h2 className="text-2xl font-bold text-[#3c3c3cea] text-center">{language}</h2>
                                    <Image src={flag} alt={language} className="rounded-lg object-contain" width={30} height={20} />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-2xl font-bold text-[#3c3c3cea] text-center">{level}</h2>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
