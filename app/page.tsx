import Header from "@/components/Header";
import Achievements from "@/components/achivements";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import FooterText from "@/components/footerText";

export default function Home() {
  return (
  <>
    <main className="w-2/3 md:mx-auto md:p-10 md:px-14 h-[470vh] text-black">
      <Header/>
      <Experience/>
      <Projects/>
      <TechStack/>
      <Achievements/>
      <Connect/>
      <FooterText/>
    </main>
  </>
  );
}
