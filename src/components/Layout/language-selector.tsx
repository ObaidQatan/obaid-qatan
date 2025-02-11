import React from "react";
import CustomSelect from "../ui/custom-select";
import { LanguagesIcon } from "lucide-react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

function LanguageSelector() {
  const { lang, t } = useTranslation("common");
  const router = useRouter();
  return (
    <CustomSelect
      defaultValue={lang}
      data={["en", "id", "ar"].map((locale) => ({
        label: t(locale),
        value: locale,
        selected: locale === lang,
      }))}
      placeholder={
        <div className="flex gap-2 items-center">
          <LanguagesIcon className="h-4 w-4" />
          {t(lang)}
        </div>
      }
      valueDisplay={
        <div className="flex gap-2 items-center">
          <LanguagesIcon className="h-4 w-4" />
          {t(lang)}
        </div>
      }
      className=""
      onChange={(value) => {
        router.replace(router.asPath, undefined, { locale: value });
      }}
    />
  );
}

export default LanguageSelector;
