import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine6 = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="py-5">
      <ul>
        <li>
          <h3 className="font-bold text-[20px]">
            - {t(`workExperienceContent.${camelCase("Working At SaaS Tech")}`)}.
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(`workExperienceContent.${camelCase("Lead Software Engineer")}`)}.
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.${camelCase(
                "Building startups and projects from A to Z"
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
                "Fixing, enhancing, and optimizing software products"
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
                "Leading and mentoring software developers, ensuring polished skills under best software practices and patterns"
              )}`
            )}
            .
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine6;
