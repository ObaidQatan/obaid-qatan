import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { educationFields } from "../../../fake/profile";

const TimeLine3 = () => {
  const { t } = useTranslation("profile");

  return (
    <div className="py-5">
      <div className="flex pb-2 font-bold text-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
        <h3 className="px-2">
          {t(`educationContent.${camelCase(educationFields[2].facility)}`)}
        </h3>
      </div>
      <ul>
        {educationFields[2].details.map((detail, index) => (
          <li key={index}>
            <h3>- {t(`educationContent.${camelCase(detail)}`)}.</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine3;
