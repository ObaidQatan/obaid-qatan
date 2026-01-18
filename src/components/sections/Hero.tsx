"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CursorFollow } from "../animate-ui/components/animate/cursor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/animate-ui/components/animate/tooltip";

export function Hero() {
  const t = useTranslations("common");

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      url: "https://github.com/ObaidQatan",
      color: "hover:text-[#2dba4e]",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/obaid-qatan-7699bb185/",
      color: "hover:text-[#0a66c2]",
    },
    {
      id: "youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@obaid_qatan_coding",
      color: "hover:text-[#ff0000]",
    },
    {
      id: "instagram",
      icon: Instagram,
      url: "https://www.instagram.com/obaid_qatan",
      color: "hover:text-[#e4405f]",
    },
  ];

  const features = [
    t("feature.keepLearning"),
    t("feature.willingToContribute"),
    t("feature.amazedBySeniors"),
    t("feature.mvcFan"),
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-20 overflow-hidden"
    >
      <CursorFollow>@{t("appName")}</CursorFollow>
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1]">
              {t("hiObaidHere")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              {t("item.webDeveloper").replace("-", "").trim()}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold border border-border">
              {t("item.computerScienceEngineer").replace("-", "").trim()}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 max-w-xl"
          >
            {features.map((feature, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {feature.replace("⚉", "").trim()}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 items-center pt-8"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-base font-bold group"
              asChild
            >
              <a href="#projects">
                {t("portfolio")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="flex gap-4">
              <TooltipProvider openDelay={100}>
                {socialLinks.map((social) => (
                  <Tooltip key={social.id}>
                    <TooltipTrigger>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "w-12 h-12 flex items-center justify-center rounded-full border border-border bg-card/50 transition-all hover:scale-110",
                          social.color,
                        )}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="flex items-center gap-2">
                      {t(`social.${social.id}`)}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
            <Image
              src="https://avatars.githubusercontent.com/u/75757127?v=4"
              alt="Obaid Qatan"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
