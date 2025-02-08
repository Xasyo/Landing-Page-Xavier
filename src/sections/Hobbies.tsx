import Image from "next/image";

import SportsImage from "@/assets/Deporte.png";
import GastronomyImage from "@/assets/Gastronomia.png";
import VideogamesImage from "@/assets/Videojuegos.png";
import MotorsportsImage from "@/assets/Motor.png";

export const Hobbies = () => {

    const hobbies = [
        { hobbie: "Gastronomía", image: GastronomyImage },
        { hobbie: "Deporte", image: SportsImage },
        { hobbie: "Videojuegos", image: VideogamesImage },
        { hobbie: "Motor", image: MotorsportsImage },
    ];

    return (
        <section id="hobbies" className="container mt-10 lg:mt-20">
            <h1 className="text-5xl lg:text-7xl mb-10 lg:mb-32 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text text-center">
                Aficiones
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-10 lg:gap-y-36">
                {hobbies.map(({ hobbie, image }, index) => (
                    <div
                        key={index}
                        className="flex"
                    >
                        <div className="bg-white shadow-2xl rounded-2xl hover:scale-105 duration-300 h-32 flex gap-5 justify-center px-10 flex-1">
                            <div className="flex flex-1 justify-center items-center">
                                <h2 className="text-2xl lg:text-4xl font-bold text-[#3c3c3cea]">{hobbie}</h2>
                            </div>
                            <div className="flex flex-1 justify-center">
                                <Image src={image} alt={hobbie} className="self-end" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
