import TermsAndConditionsContent from "@/components/sections/TermsAndConditionsContent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("common");
  return {
    title: t("appName") + " | " + t("termsAndConditions"),
  };
}

const TermsAndConditions = () => {
  return (
    <section dir="ltr" className="bg-[#03101c] p-4">
      <TermsAndConditionsContent />
    </section>
  );
};

export default TermsAndConditions;
