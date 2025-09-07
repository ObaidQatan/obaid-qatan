import { useHotkeys } from "@mantine/hooks";
import useTranslation from "next-translate/useTranslation";
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
      {isMobile && <SideBar />}

      <Header />
      <Main className={className}>{children}</Main>

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
        <div
          className={
            //   cn(
            //   "flex flex-col gap-2 w-full items-start text-black",
            //   isDark && "text-white"
            // )
            `flex flex-col gap-2 w-full items-start ${
              isDark ? "text-white" : "text-black"
            }`
          }
        >
          <h3 className="text-lg font-bold text-cyan-500">{t("myServices")}</h3>
          <div></div>
          <Link href="/pricing/mco">
            <a className="hover:underline">{t("managedCloudOperations")}</a>
          </Link>
          <Link href="/pricing/sam">
            <a className="hover:underline">{t("supportAndMaintenance")}</a>
          </Link>
        </div>
        <br />
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/terms-and-conditions">
              <a className="underline text-[#43D2D6]">
                {t("termsAndConditions")}
              </a>
            </Link>
          </li>
          <Link href="/privacy-policy">
            <a className="underline text-[#43D2D6]">{t("privacyPolicy")}</a>
          </Link>
        </ul>
      </Footer>
    </PageWrapper>
  );
};

export default Layout;
