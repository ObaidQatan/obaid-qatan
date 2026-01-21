import type { Metadata } from "next";
import "@/styles/globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Obaid Qatan",
    description: "Portfolio of Obaid Qatan - Senior Full-stack Developer",
    icons: {
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#0f172a",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
