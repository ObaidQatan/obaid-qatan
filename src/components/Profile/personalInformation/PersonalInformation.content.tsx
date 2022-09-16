import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { personalInformation } from "../../../fake/profile";

const PersonalInformationContent = () => {
  const { lang, t } = useTranslation("profile");
  const { t: _ } = useTranslation("common");
  const isArabic = lang === "ar";

  return (
    <table className="break-all break-words">
      <tbody>
        {personalInformation.map((infoPair) => (
          <tr key={infoPair.property}>
            <td className="text-left w-20 p-1">
              {t("personalInformationContent." + camelCase(infoPair.property))}
            </td>
            <td className="text-left p-1">{infoPair.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonalInformationContent;
