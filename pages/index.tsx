import type { NextPage } from "next";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../src/components/Layout/Header";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ColorScheme } from "@mantine/core";
import Image from "next/image";

const Home: NextPage = () => {
  const { lang, t } = useTranslation("common");
  const isArabic = lang === "ar";
  const router = useRouter();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const isDark = colorScheme === "dark";

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div
      className={`flex flex-col items-center ${
        isDark ? "bg-[#03101c] text-white" : "bg-[#fff] text-black"
      }`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="min-h-[calc(100vh-6.4rem)] flex flex-col justify-center items-center max-w-7xl w-full">
        <div className="flex flex-1 flex-col-reverse lg:flex-row justify-between w-full">
          <div className="flex flex-col flex-1 justify-center p-10 break-words max-w-2xl">
            <h1 className="border-b border-b-[#696969] mb-2 font-bold">
              {t("hiObaidHere")}
            </h1>
            {[t("item.webDeveloper"), t("item.computerScienceEngineer")].map(
              (title) => (
                <h3 key={title} className="text-[#43D2D6]">
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
              <h3 key={title} className="text-[#C3C3C3]">
                {title}
              </h3>
            ))}
          </div>
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full relative m-5 self-center p-2 border border-[#43D2D6]">
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
        <span className="underline text-[#43D2D6]">
          <a
            href="https://github.com/ObaidQatan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("obaidQatanEn")}
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
