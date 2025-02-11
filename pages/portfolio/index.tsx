import React from "react";
import Layout from "../../src/components/Layout";
import useTranslation from "next-translate/useTranslation";
import useDarkMode from "../../src/hooks/useDarkMode";
import Head from "next/head";
import PortfolioScreen from "../../src/components/Portfolio";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");
  const { t: _ } = useTranslation("common");
  const { isDark } = useDarkMode();

  return (
    <Layout className="items-center flex-col">
      <Head>
        <title>{_("appName") + "|" + t("portfolio")}</title>
      </Head>

      <PortfolioScreen />
    </Layout>
  );
};

export default Portfolio;
