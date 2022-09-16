import { useState } from "react";

const NormaSkillBar = ({ value }: { value: number }) => {
  const [percentage, setPercentage] = useState((value / 5) * 100);
  return (
    <div
      className={`bg-[#41bdbd] h-full text-center hover:bg-[#68a1a1] hover:scale-[1.03] hover:text-white hover:border-[2px] hover:border-white hover:shadow-center hover:shadow-cyan-500`}
      style={{
        transition: "0.3s",
        width: `${percentage}%`,
      }}
    >
      <span>{percentage}%</span>
    </div>
  );
};

export default NormaSkillBar;
