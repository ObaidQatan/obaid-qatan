import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../src/components/Layout/Footer";
import Header from "../../src/components/Layout/Header";
import Main from "../../src/components/Layout/Main";
import PageWrapper from "../../src/components/Layout/PageWrapper";
import useDarkMode from "../../src/hooks/useDarkMode";

const Profile = () => {
  const { t } = useTranslation("profile");
  const { t: _ } = useTranslation("common");
  const { isDark, toggleColorScheme } = useDarkMode();

  return (
    <PageWrapper>
      <Head>
        <title>
          {_("appName")} | {t("profile")}
        </title>
      </Head>

      <Header />

      <Main></Main>

      <Footer>
        {_("builtWithHeartBy")}{" "}
        <Link href="https://github.com/ObaidQatan/">
          <a
            className="underline text-[#43D2D6]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {_("obaidQatanEn")}
          </a>
        </Link>
      </Footer>
    </PageWrapper>
  );
};

export default Profile;
