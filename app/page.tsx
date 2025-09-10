import Header from "@/components/Header";
import Achievements from "@/components/achivements";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
  <>
    <main className="w-2/3 mx-auto p-18 h-full bg-zinc text-black">
      <Header/>
      <Experience/>
      <Projects/>
      <TechStack/>
      <Achievements/>
      <Connect/>
    </main>
  </>
  );
}
