import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/layout/BackToTop";
import {
  CursorProvider,
  Cursor,
} from "@/components/animate-ui/components/animate/cursor";
// import { CursorTrail } from "@/components/layout/CursorTrail";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="flex flex-col w-full">
      {/* <CursorTrail /> */}
      <CursorProvider global>
        <Cursor />

        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </CursorProvider>

      <BackToTop />
    </div>
  );
}
