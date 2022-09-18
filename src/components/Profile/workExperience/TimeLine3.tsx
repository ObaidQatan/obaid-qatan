import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine3 = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="py-5">
      <ul>
        <li>
          <h3 className="font-bold text-[20px]">
            - {t(`workExperienceContent.${camelCase("Freelancing")}`)}.
          </h3>
        </li>
        <li>
          <h3>
            - {t(`workExperienceContent.${camelCase("Web Development")}`)}.
          </h3>
        </li>
        <li>
          <h3>- {t(`workExperienceContent.${camelCase("APIs")}`)}.</h3>
        </li>
        <li>
          <h3>
            - {t(`workExperienceContent.${camelCase("Software Consultancy")}`)}.
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine3;
