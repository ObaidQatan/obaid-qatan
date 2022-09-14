import type { NextPage } from "next";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Header from "../src/components/Layout/Header";
import { useHotkeys } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import useDarkMode from "../src/hooks/useDarkMode";
import SideBar from "../src/components/Layout/SideBar";
import useDetectSmallScreen from "../src/hooks/useDetectSmallScreen";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const { isDark, toggleColorScheme } = useDarkMode();
  const isMobile = useDetectSmallScreen();

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div
      className={`flex flex-col items-center ${
        isDark ? "bg-[#03101c] text-white" : "bg-[#fff] text-slate-600"
      }`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile && <SideBar />}

      <Header />
      <main className="min-h-[calc(100vh-6.4rem)] flex flex-col justify-center items-center max-w-7xl w-full">
        <div className="flex flex-1 flex-col-reverse lg:flex-row justify-between w-full">
          <div className="flex flex-col flex-1 justify-center p-10 break-words max-w-2xl">
            <h1 className="border-b border-b-[#696969] mb-2 font-bold">
              {t("hiObaidHere")}
            </h1>
            {[t("item.webDeveloper"), t("item.computerScienceEngineer")].map(
              (title) => (
                <h3
                  key={title}
                  className={`${isDark ? "text-[#43D2D6]" : "text-[darkcyan]"}`}
                >
                  {title}
                </h3>
              )
            )}
            <br />
            {[
              t("feature.keepLearning"),
              t("feature.willingToContribute"),
              t("feature.amazedBySeniors"),
              t("feature.mvcFan"),
            ].map((title) => (
              <h3
                key={title}
                className={`text-[${isDark ? "#C3C3C3" : "#000"}]`}
              >
                {title}
              </h3>
            ))}
            <div className="mt-5 flex flex-col">
              {[
                {
                  link: "https://github.com/ObaidQatan",
                  icon: "/img/github.svg",
                  alt: "github",
                  background: isDark ? "" : "bg-black",
                  color: "text-white",
                  border: isDark ? "border-gray-700" : "",
                  hover: {
                    background: "hover:bg-black",
                    color: "",
                    border: "hover:border-white",
                  },
                },
                {
                  link: "https://www.linkedin.com/in/obaid-qatan-7699bb185/",
                  icon: "/img/linkedin.svg",
                  alt: "linkedin",
                  background: "bg-cyan-500",
                  color: "text-white",
                  border: isDark ? "border-gray-700" : "",
                  hover: {
                    background: "",
                    color: "",
                    border: "hover:border-[#000]",
                  },
                },
              ].map((item) => (
                <Link key={item.alt} href={item.link}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex my-2 py-3 px-5 justify-center items-center rounded-lg ${item.background} ${item.color} ${item.border} ${item.hover.background} ${item.hover.color} border ${item.border}`}
                  >
                    <h3 className="px-1 font-bold">
                      {t(`social.${item.alt}`)}
                    </h3>
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={30}
                      height={30}
                      layout="fixed"
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full relative m-5 self-center p-2">
            <Image
              objectFit="fill"
              layout="fill"
              src="https://avatars.githubusercontent.com/u/75757127?v=4"
              alt="obaid"
            />
          </div>
        </div>
      </main>

      <footer className="text-center p-2 border-t border-t-[#696969] text-[#C3C3C3] max-w-7xl w-full">
        {t("builtWithHeartBy")}{" "}
        <Link href="https://github.com/ObaidQatan/">
          <a
            className="underline text-[#43D2D6]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("obaidQatanEn")}
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
