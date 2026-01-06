import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/layout/BackToTop";
import { CursorTrail } from "@/components/layout/CursorTrail";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="flex flex-col w-full">
      <CursorTrail />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
}
