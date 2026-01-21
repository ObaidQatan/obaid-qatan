import PrivacyPolicyContent from "@/components/sections/PrivacyPolicyContent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("common");
  return {
    title: t("appName") + " | " + t("privacyPolicy"),
  };
}

const PrivacyPolicy = () => {
  return (
    <section dir="ltr" className="bg-[#03101c] p-4">
      <PrivacyPolicyContent />
    </section>
  );
};

export default PrivacyPolicy;
