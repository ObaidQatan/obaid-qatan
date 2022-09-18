import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine4 = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="py-5">
      <ul>
        <li>
          <h3 className="font-bold text-[20px]">
            - {t(`workExperienceContent.${camelCase("Personal Trainer")}`)}.
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.${camelCase(
                "Object Oriented Programming"
              )}`
            )}
            .
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.${camelCase(
                "Data Structures and Algorithms"
              )}`
            )}
            .
          </h3>
        </li>
        <li>
          <h3>- {t(`skill.${camelCase("java")}`)}.</h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine4;
