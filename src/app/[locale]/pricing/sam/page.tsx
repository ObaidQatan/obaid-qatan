import LanguageSelector from "@/components/common/language-selector";
import SupportAndMaintenanceContent from "@/components/sections/SupportAndMaintenanceContent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("common");
  return {
    title: t("appName") + " | " + t("supportAndMaintenance"),
  };
}

const SupportAndMaintenance = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  return (
    <section className="bg-[#03101c] p-4">
      <div className="flex items-center text-white gap-2 max-w-[900px] mx-auto px-[20px]">
        <LanguageSelector className="text-inherit" nativeCursor />
        <span>|</span>
        <span className="uppercase">{locale}</span>
      </div>
      <SupportAndMaintenanceContent locale={locale as "en" | "ar" | "id"} />
    </section>
  );
};

export default SupportAndMaintenance;
