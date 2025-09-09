import Header from "@/components/Header";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
  <>
    <main className="w-2/4 mx-auto p-6 h-full bg-zinc-100 text-black">
      <Header/>
      <Experience/>
      <Projects/>
      <TechStack/>
    </main>
  </>
  );
}
