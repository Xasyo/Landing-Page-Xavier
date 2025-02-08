import { Header } from "@/sections/Header";
import { AboutMe } from "@/sections/AboutMe";
import { SocialNetWorks } from "@/sections/SocialNetworks";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Languages } from "@/sections/Languages";
import { Projects } from "@/sections/Projects";
import { Hobbies } from "@/sections/Hobbies";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return(
    <>
      <Header/>
      <AboutMe/>
      <SocialNetWorks/>
      <Experience/>
      <Education/>
      <Languages/>
      <Projects/>
      <Hobbies/>
      <Contact/>
    </>
  );
}
