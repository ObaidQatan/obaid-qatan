import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";

const Interest = ({ data }: { data: { interest: string; level: number } }) => {
  const { t } = useTranslation("profile");

  return (
    <div className="flex p-2">
      <h3
        className="w-[100px]"
        style={{
          wordBreak: "break-word",
        }}
      >
        {t(`fieldOfInterestContent.${camelCase(data.interest)}`)}:{" "}
      </h3>
      <div className="h-8 flex-1"></div>
    </div>
  );
};

export default Interest;
