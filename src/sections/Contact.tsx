import GitHubLogo from "@/assets/GitHub.png"
import GmailLogo from "@/assets/Gmail.png"
import InstagramLogo from "@/assets/Instagram.png"
import LinkedinLogo from "@/assets/Linkedin.png"
import TikTokLogo from "@/assets/TikTok.png"
import YouTubeLogo from "@/assets/YouTube.png"

import Image from "next/image"

export const Contact = () => {
    const contacts = [
        {
            contact: "xavierld02@gmail.com",
            image: GmailLogo,
            link: "",
        },
        {
            contact: "github.com/Xasyo",
            image: GitHubLogo,
            link: "https://github.com/Xasyo",
        },
        {
            contact: "Xavier Leonardo Diaz",
            image: LinkedinLogo,
            link: "https://www.linkedin.com/in/xavier-leonardo-diaz",
        },
        {
            contact: "@xasyo96",
            image: InstagramLogo,
            link: "https://www.instagram.com/xasyo96/",
        },
        {
            contact: "@xasyo",
            image: TikTokLogo,
            link: "https://www.tiktok.com/@xasyo",
        },
        {
            contact: "@xaasyo",
            image: YouTubeLogo,
            link: "https://www.youtube.com/@xaasyo",
        },
    ]

    return (
        <section id="contact" className="container mt-10 lg:mt-20 mb-32">
            <h1 className="text-5xl lg:text-7xl mb-10 font-bold tracking-tighter bg-gradient-to-b from-[#797979ea] to-[#3c3c3cea] text-transparent bg-clip-text text-center">
                Contacto
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
                {contacts.map(
                    ({
                        contact,
                        image,
                        link
                    }, index) => (
                        <div key={index}>
                            {link ? (
                                <a href={link} className="flex flex-1 items-center gap-2 bg-white hover:scale-105 duration-300 rounded-2xl p-4 shadow-2xl">
                                    <Image 
                                        src={image} 
                                        alt={contact} 
                                        className="h-8 w-auto"
                                    />
                                    <h2 className="text-2xl font-bold text-[#3c3c3cea] text-center">{contact}</h2>
                                </a>
                            ) : ( 
                                <div className="flex flex-1 items-center gap-2 bg-white hover:scale-105 duration-300 rounded-2xl p-4 shadow-2xl">
                                    <Image 
                                        src={image} 
                                        alt={contact} 
                                        className="h-8 w-auto"
                                    />
                                    <h2 className="text-2xl font-bold text-[#3c3c3cea] text-center">{contact}</h2>
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </section>
    );
};