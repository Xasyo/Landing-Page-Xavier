"use client";

import GitHubLogo from "@/assets/GitHubLogo.png"
import GmailLogo from "@/assets/GmailLogo.png"
import InstagramLogo from "@/assets/InstagramLogo.png"
import LinkedinLogo from "@/assets/LinkedinLogo.png"
import TikTokLogo from "@/assets/TikTokLogo.png"
import YouTubeLogo from "@/assets/YouTubeLogo.png"

import { motion } from "framer-motion";

import Image from "next/image"

export const SocialNetWorks = () => {
    return(
        <section className="pb-4 bg-white">
            <a href="#contact" className="container">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-14 h-12"
                        animate={{ translateX: "-99%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                        >
                        
                        <Image className="mb-1" src={GmailLogo} alt="GmailLogo" />
                        <Image className="mt-1" src={GitHubLogo} alt="GitHubLogo" />
                        <Image src={LinkedinLogo} alt="LinkedinLogo" />
                        <Image src={InstagramLogo} alt="InstagramLogo" />
                        <Image src={TikTokLogo} alt="TikTokLogo" />
                        <Image src={YouTubeLogo} alt="YouTubeLogo" />
                        
                        
                        <Image className="mb-1" src={GmailLogo} alt="GmailLogo" />
                        <Image className="mt-1" src={GitHubLogo} alt="GitHubLogo" />
                        <Image src={LinkedinLogo} alt="LinkedinLogo" />
                        <Image src={InstagramLogo} alt="InstagramLogo" />
                        <Image src={TikTokLogo} alt="TikTokLogo" />
                        <Image src={YouTubeLogo} alt="YouTubeLogo" />

                        <Image className="mb-1" src={GmailLogo} alt="GmailLogo" />
                        <Image className="mt-1" src={GitHubLogo} alt="GitHubLogo" />
                        <Image src={LinkedinLogo} alt="LinkedinLogo" />
                        <Image src={InstagramLogo} alt="InstagramLogo" />
                        <Image src={TikTokLogo} alt="TikTokLogo" />
                        <Image src={YouTubeLogo} alt="YouTubeLogo" />
                    </motion.div>
                </div>
            </a>
        </section>
    );
};