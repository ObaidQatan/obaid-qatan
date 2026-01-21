"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  Mail,
  MapPin,
  ExternalLink,
  ExternalLinkIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { CursorTrigger } from "../animate-ui/primitives/animate/cursor";

export function Contact() {
  const t = useTranslations("common");
  const [copied, setCopied] = useState(false);
  const email = "ogaten27@gmail.com";
  const whatsapp = "+91 7899359479";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#00C4CC15_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-heading font-black">
              {t("contactMe") || "Let's Connect"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-md">
              {t("contactMeDescription") ||
                "Have a project in mind or just want to say hi? I&apos;m always open to new opportunities."}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">
                  {t("email") || "Email"}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium">{email}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="h-8 w-8 rounded-full"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">
                  {t("location") || "Location"}
                </p>
                <p className="text-lg font-medium">{t("CURRENT_LOCATION")}</p>
              </div>
            </div>
          </div>
          <br />
          <CursorTrigger asChild type="pointer">
            <a
              href={`https://wa.me/${whatsapp.replaceAll(" ", "").replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src="/whatsapp-cloud.png"
                  alt="whatsapp"
                  className="w-16 h-16"
                  width={36}
                  height={36}
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">
                  {t("social.whatsapp") || "Whatsapp"}
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <p className="text-lg font-medium underline text-inherit">
                    {whatsapp}
                  </p>
                  <ExternalLinkIcon
                    className="w-5 h-5"
                    color="var(--color-primary)"
                  />
                </div>
              </div>
            </a>
          </CursorTrigger>

          <div className="pt-8">
            <Button
              size="lg"
              className="rounded-full h-14 px-8 font-bold"
              asChild
            >
              <a href={`mailto:${email}`}>
                {t("sayHello") || "Say Hello"}
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-4/3 rounded-3xl bg-card border border-border overflow-hidden shadow-2xl"
        >
          {/* A simple placeholder visual or a stylized map/contact card */}
          <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
            <div className="text-center space-y-4 p-8">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">
                {t("availableForHire") || "Available for Hire"}
              </h3>
              <p className="text-muted-foreground">
                {t("availableForWorkAndContributionsAroundTheWorld") ||
                  "Available for work and contributions around the world."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Area */}
      <footer className="mt-32 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-muted-foreground text-sm">
          {t("builtWithHeartBy")}{" "}
          <span className="text-foreground font-bold italic underline decoration-primary">
            Obaid Qatan
          </span>
        </p>
        <nav className="flex items-center gap-8">
          <CursorTrigger asChild type="pointer">
            <Link
              href="/terms-and-conditions"
              className="text-sm text-muted-foreground hover:text-primary transition-all"
            >
              {t("termsAndConditions") || "Terms and Conditions"}
            </Link>
          </CursorTrigger>
          <CursorTrigger asChild type="pointer">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-all"
            >
              {t("privacyPolicy") || "Privacy Policy"}
            </Link>
          </CursorTrigger>
        </nav>
      </footer>
    </section>
  );
}
