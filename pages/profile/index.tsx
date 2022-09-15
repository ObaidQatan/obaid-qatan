import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Layout from "../../src/components/Layout";

const Profile = () => {
  const { t } = useTranslation("profile");
  const { t: _ } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>
          {_("appName")} | {t("profile")}
        </title>
      </Head>
    </Layout>
  );
};

export default Profile;
