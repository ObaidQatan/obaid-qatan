"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { camelCase, startCase } from "lodash";
import { workExperience } from "@/lib/data/profile";

export function Experience() {
  const t = useTranslations("profile");
  const locale = useLocale();

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

          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center",
                idx % 2 !== 0 ? "lg:flex-row-reverse" : "",
              )}
            >
              {/* Dot */}
              <div className="absolute left-0 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden lg:block" />

              <div className="flex-1 lg:w-1/2 lg:px-12">
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors shadow-sm">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    {new Date(exp.title.from).toLocaleString(locale, {
                      year: "numeric",
                      month: "long",
                    })}{" "}
                    ~{" "}
                    {exp.title.to
                      ? new Date(exp.title.to).toLocaleString(locale, {
                          year: "numeric",
                          month: "long",
                        })
                      : startCase(t("present"))}
                  </span>
                  <ul className="list-disc">
                    {(exp.descriptionLines ?? []).map((line, idx) => (
                      <li
                        key={idx}
                        className={cn(
                          "text-muted-foreground py-[3px]",
                          idx === 0 && "list-none",
                        )}
                      >
                        {idx === 0 ? (
                          <h3 className="text-xl font-bold mb-1">
                            {t(`workExperienceContent.${camelCase(line)}`)}
                          </h3>
                        ) : (
                          <p className="text-inherit text-sm leading-relaxed">
                            {t(`workExperienceContent.${camelCase(line)}`)}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
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
