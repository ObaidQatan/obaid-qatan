"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  favouriteSkills,
  otherSkills,
  fieldOfInterest,
} from "@/lib/data/profile";
import { Progress } from "@/components/ui/progress";
import { CursorTrigger } from "../animate-ui/primitives/animate/cursor";

export function Skills() {
  const t = useTranslations("profile");

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-card/30 relative">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-bold text-primary">
            {t("skills") || "Skills & Tools"}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        {/* Favorite Tools */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider">
            {t("favouriteTools") || "Favourite Tools"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {favouriteSkills.flat().map((skill, index) => (
              <CursorTrigger key={skill.name} asChild type="pointer">
                <motion.a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,196,204,0.15)]"
                >
                  <div className="relative w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.a>
              </CursorTrigger>
            ))}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-12 pt-12">
          {fieldOfInterest.map((field, index) => (
            <motion.div
              key={field.interest}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-end">
                <span className="font-bold text-lg">{t(field.interest)}</span>
                <span className="text-primary font-mono font-bold">
                  {field.level}%
                </span>
              </div>
              <Progress value={field.level} className="h-2 bg-secondary" />
            </motion.div>
          ))}
        </div>

        {/* Other Tools */}
        <div className="space-y-8 pt-12">
          <h3 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider">
            {t("otherTools") || "Other Tools"}
          </h3>
          <div className="flex flex-wrap gap-4">
            {otherSkills.map((skill, index) => (
              <CursorTrigger key={skill.name} asChild type="pointer">
                <motion.a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src={skill.img}
                      alt={skill.name}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-xs font-medium">{skill.name}</span>
                </motion.a>
              </CursorTrigger>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
