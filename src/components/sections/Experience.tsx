"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Experience() {
  const t = useTranslations("profile");

  const experiences = [
    {
      from: "Oct 2024",
      to: "Present",
      title: "Lead Software Engineer",
      description:
        "Leading and mentoring software developers, ensuring polished skills under best software practices and patterns.",
    },
    {
      from: "Feb 2023",
      to: "Aug 2023",
      title: "Frontend Engineer",
      description: "Building rich user interfaces and components using React.",
    },
    {
      from: "Jul 2022",
      to: "Jan 2023",
      title: "Full Stack Developer",
      description: "Worked at Bob Apps Tech Company for IT Solutions.",
    },
    {
      from: "Mar 2022",
      to: "Jun 2022",
      title: "MEVN Stack Developer",
      description: "Web Development, APIs, and Software Consultancy.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-bold text-primary">
            {t("workExperience") || "Work Experience"}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center",
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              )}
            >
              {/* Dot */}
              <div className="absolute left-0 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden lg:block" />

              <div className="flex-1 lg:w-1/2 lg:px-12">
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    {exp.from} - {exp.to}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block flex-1 lg:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
