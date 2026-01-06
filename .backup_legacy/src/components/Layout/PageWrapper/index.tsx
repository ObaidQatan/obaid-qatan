import { ReactNode } from "react";
import useDarkMode from "../../../hooks/useDarkMode";

const PageWrapper = ({
  children,
  className,
}: {
  children: ReactNode[] | ReactNode;
  className?: string;
}) => {
  const { isDark } = useDarkMode();

  return (
    <div
      className={`flex flex-col items-center ${
        isDark ? "bg-[#03101c] text-white" : "bg-[#fff] text-slate-600"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
