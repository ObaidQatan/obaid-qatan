import { useHotkeys } from "@mantine/hooks";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import useDetectSmallScreen from "../../hooks/useDetectSmallScreen";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PageWrapper from "./PageWrapper";
import SideBar from "./SideBar";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode[] | ReactNode;
  className?: string;
}) => {
  const { t } = useTranslation("common");
  const { isDark, toggleColorScheme } = useDarkMode();
  const isMobile = useDetectSmallScreen();

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <PageWrapper>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile && <SideBar />}

      <Header />
      <Main>{children}</Main>

      <Footer>
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
      </Footer>
    </PageWrapper>
  );
};

export default Layout;
