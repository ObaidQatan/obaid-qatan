"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/lib/data/portfolio";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const t = useTranslations("common");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolio)[0] | null
  >(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-bold text-primary">
            {t("portfolio") || "Featured Projects"}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden border border-border bg-card cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex gap-2 mt-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading font-bold pr-8">
                  {selectedProject.title}
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

              <div className="space-y-6 mt-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg">
                  <Image
                    src={selectedProject.thumbnailUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="font-bold text-lg">About the Project</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">Details</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between border-b pb-2">
                        <span>Role</span>
                        <span className="text-foreground font-semibold">
                          {selectedProject.role}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>Date</span>
                        <span className="text-foreground font-semibold">
                          {new Date(
                            selectedProject.createdAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                      <Button variant="default" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Button>
                    </div>
                  </div>
                </div>

                {selectedProject.imagesUrls.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h4 className="font-bold text-lg">Gallery</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedProject.imagesUrls
                        .slice(0, 4)
                        .map((url: string, i: number) => (
                          <div
                            key={i}
                            className="relative aspect-square rounded-lg overflow-hidden border"
                          >
                            <Image
                              src={url}
                              alt="Screenshot"
                              fill
                              className="object-cover hover:scale-110 transition-transform"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
