"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/data/portfolio";
import { useState } from "react";
import {
  Dialog,
  DialogCloseStyled,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PointerEffectGuard from "../ui/pointer-effect-guard";
import { startCase, truncate } from "lodash";
import { CursorTrigger } from "../animate-ui/primitives/animate/cursor";
import { cn } from "@/lib/utils";

export function Projects() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolio)[0] | null
  >(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-bold text-primary">
            {startCase(t("portfolio")) || "Featured Projects"}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <CursorTrigger key={project.id} asChild type="pointer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-border bg-card cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.thumbnailUrl}
                  alt={t(project.title)}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {truncate(t(project.title), { length: 60 })}
                  </h3>
                  <div className="flex gap-2 mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </CursorTrigger>
          ))}
        </div>
      </div>

      {!!selectedProject && (
        <Dialog open>
          <DialogContent
            className="w-[min(90vw,896px)] sm:max-w-[unset] max-h-[90vh] overflow-y-auto"
            showCloseButton={false}
            blurredOverlay
          >
            {selectedProject && (
              <>
                <CursorTrigger asChild type="pointer">
                  <DialogCloseStyled onClick={() => setSelectedProject(null)} />
                </CursorTrigger>
                <DialogHeader>
                  <DialogTitle className="text-2xl max-sm:text-xl max-sm:text-start font-heading font-bold pr-8">
                    {t(selectedProject.title)}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map((tag: { name: string }) => (
                      <Badge
                        key={tag.name}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-6 max-sm:overflow-x-hidden">
                  <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedProject.thumbnailUrl}
                      alt={selectedProject.title}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="font-bold text-lg">
                        {t("about the project")}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(selectedProject.description)}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg">{t("details")}</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between border-b pb-2">
                          <span>{t("role")}</span>
                          <span className="text-foreground font-semibold">
                            {selectedProject.role}
                          </span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                          <span>{t("date")}</span>
                          <span className="text-foreground font-semibold">
                            {new Date(
                              selectedProject.createdAt,
                            ).toLocaleDateString(locale, {
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 pt-4">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="live-demo"
                          className={cn(
                            "w-full gap-4",
                            !selectedProject.liveUrl && "hidden",
                          )}
                        >
                          <Button
                            variant="default"
                            aria-label="live-demo"
                            className={cn("w-full gap-4")}
                          >
                            <ExternalLink className="h-4 w-4" />{" "}
                            {t("live demo")}
                          </Button>
                        </a>
                        <a
                          href={selectedProject.sourceCodeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "w-full gap-4",
                            !selectedProject.sourceCodeUrl && "hidden",
                          )}
                        >
                          <Button
                            variant="outline"
                            aria-label="source-code"
                            className={cn("w-full gap-4")}
                          >
                            <Github className="h-4 w-4" /> {t("source code")}
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {selectedProject.imagesUrls.length > 0 && (
                    <div className="space-y-4 pt-4">
                      <h4 className="font-bold text-lg">{t("gallery")}</h4>
                      <PhotoProvider
                        overlayRender={() => <PointerEffectGuard />}
                      >
                        <div className="flex flex-wrap gap-4 max-sm:max-w-full max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:py-2">
                          {selectedProject.imagesUrls.map(
                            (url: string, i: number) => (
                              <PhotoView key={i} src={url}>
                                <Button
                                  className="relative aspect-square rounded-lg overflow-hidden border size-24"
                                  aria-label="screenshot"
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={url}
                                    alt="Screenshot"
                                    className="object-cover hover:scale-110 transition-transform w-full h-full absolute inset-0"
                                  />
                                </Button>
                              </PhotoView>
                            ),
                          )}
                        </div>
                      </PhotoProvider>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
