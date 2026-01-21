import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine2 = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="py-5">
      <ul>
        <li>
          <h3 className="font-bold text-[20px]">
            -{" "}
            {t(
              `workExperienceContent.${camelCase(
                "Worked at Bob Apps Tech Company for IT solutions"
              )}`
            )}
            .
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.${camelCase("Full Stack Web Developer")}`
            )}
            .
          </h3>
        </li>
        <li>
          <h3>- {t(`workExperienceContent.${camelCase("MEVN Stack")}`)}.</h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine2;
