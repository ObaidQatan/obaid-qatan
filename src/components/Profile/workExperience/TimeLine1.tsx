import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine1 = () => {
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
          <h3>- {t(`workExperienceContent.${camelCase("Web Design")}`)}.</h3>
        </li>
        <li>
          <h3>
            - {t(`workExperienceContent.${camelCase("Graphic Design")}`)}.
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine1;
