import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const Interest = ({ data }: { data: { interest: string; level: number } }) => {
  const { t } = useTranslation("profile");

  return (
    <div>
      <h3>
        {t(`fieldOfInterestContent.${camelCase(data.interest)}`)}:{" "}
        {(data.level / 5) * 100} %
      </h3>
    </div>
  );
};

export default Interest;
