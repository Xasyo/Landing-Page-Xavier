import FotoCorporativaRecortada from "@/assets/FotoCorporativaRecortada.png"

import Image from "next/image";

export const AboutMe = () => {
    return (
        <section id="aboutme" className="pt-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom,_#7F7F7F,_#EAEEFE_66%)]">
            <div className="container">
                <div className="md:flex">
                    <div className="md:pb-10">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text">
                            Xavier Leonardo Diaz
                        </h1>
                        
                        <p className="text-3xl lg:text-5xl mt-6 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text">
                            13/10/2002
                        </p>

                        <p className="text-xl text-[#3c3c3cea] tracking-tight mt-6 text-justify">
                            Graduado en Ingeniería Informática por la Universitat Politècnica de Catalunya (UPC),
                            Facultad de Informática de Barcelona (FIB), con especialización en Ingeniería del Software.
                        </p>
                        
                        <p className="text-xl text-[#3c3c3cea] tracking-tight mt-6 text-justify">
                            Entusiasta de la tecnología, el deporte, el motor y amante de la gastronomía.
                            En constante evolución y aprendizaje, motivado por el desarrollo de soluciones a nuevos desafíos.
                        </p>

                    </div>
                    <div className="mt-7 md:mt-0 flex justify-end items-end">
                        <Image src={FotoCorporativaRecortada} alt="Foto corporativa recortada"/>
                    </div>
                </div>
            </div>
        </section>
    );
};