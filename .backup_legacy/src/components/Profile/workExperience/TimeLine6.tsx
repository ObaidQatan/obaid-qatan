import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const TimeLine6 = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="py-5">
      <ul>
        <li>
          <h3 className="font-bold text-[20px]">
            - {t(`workExperienceContent.${camelCase("Worked At Zevi Ai")}`)}.
          </h3>
        </li>
        <li>
          <h3>- {t(`workExperienceContent.frontendEngineer`)}.</h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.buildingRichUserInterfacesAndComponentsUsingReact`
            )}
            .
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.convertingUiDesignsIntoScalableReactComponents`
            )}
            .
          </h3>
        </li>
        <li>
          <h3>
            -{" "}
            {t(
              `workExperienceContent.documentationPagesUsingDocusaurusAndReact`
            )}
            .
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default TimeLine6;
