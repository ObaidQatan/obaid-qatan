import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import NormaSkillBar from "../../SkillBars/NormalSkillBar";

const Interest = ({ data }: { data: { interest: string; level: number } }) => {
  const { t } = useTranslation("profile");

  return (
    <div className="flex p-2">
      <h3
        className="w-[100px] text-[13px] font-bold"
        style={{
          wordBreak: "break-word",
        }}
      >
        {t(`fieldOfInterestContent.${camelCase(data.interest)}`)}:{" "}
      </h3>
      <div className="h-8 flex-1">
        <NormaSkillBar value={data.level} />
      </div>
    </div>
  );
};

export default Interest;
