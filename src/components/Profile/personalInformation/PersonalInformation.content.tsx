import dayjs from "dayjs";
import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { personalInformation } from "../../../fake/profile";

const PersonalInformationContent = () => {
  const { lang, t } = useTranslation("profile");
  const { t: _ } = useTranslation("common");
  const isArabic = lang === "ar";

  return (
    <table className="break-all break-words border">
      <tbody>
        {personalInformation.map((infoPair) => (
          <tr key={infoPair.property} className="border-b">
            <td
              className="text-start w-24 p-2 font-bold"
              style={{
                wordBreak: "break-word",
              }}
            >
              {t("personalInformationContent." + camelCase(infoPair.property))}
            </td>
            <td
              className="text-start p-1"
              style={{
                wordBreak: "break-word",
              }}
            >
              {infoPair.property === "Age"
                ? new Date().getFullYear() - dayjs(infoPair.value).year()
                : _(camelCase(infoPair.value))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonalInformationContent;
