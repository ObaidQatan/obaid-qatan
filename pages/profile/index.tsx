import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../src/components/Layout";

const Profile = () => {
  const { t } = useTranslation("profile");
  const { t: _ } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>{_("appName") + "|" + t("profile")}</title>
      </Head>

      <div className="w-[150px] h-[150px] rounded-full relative overflow-hidden">
        <Image
          layout="fill"
          objectFit="fill"
          src="https://avatars.githubusercontent.com/u/75757127?v=4"
          alt="profile picture"
        />
      </div>
    </Layout>
  );
};

export default Profile;
