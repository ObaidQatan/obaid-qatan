import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { fieldOfInterest } from "../../../fake/profile";
import Interest from "./Interest";

const FieldsOfInterestContent = () => {
  const { t, lang } = useTranslation("profile");
  const isAra = lang === "ar";

  return (
    <div>
      {fieldOfInterest.map((f) => (
        <Interest key={f.interest} data={f} />
      ))}
    </div>
  );
};

export default FieldsOfInterestContent;
