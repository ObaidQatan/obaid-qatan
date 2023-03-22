import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine6 = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="py-5">
      <ul>
        <li>
          <h3 className="font-bold text-[20px]">
            - {t(`workExperienceContent.${camelCase("Frontend Engineer")}`)}.
          </h3>
        </li>
        <li>
          <h3>
            - {t(`workExperienceContent.${camelCase("Building rich user interfaces and components using React")}`)}.
          </h3>
        </li>
        <li>
          <h3>- {t(`workExperienceContent.${camelCase("Converting UI designs into scalable React components")}`)}.</h3>
        </li>
        <li>
          <h3>
            - {t(`workExperienceContent.${camelCase("Documentation pages using Docusaurus and React")}`)}.
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine6;
