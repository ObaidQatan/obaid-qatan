import { ReactNode } from "react";

const Footer = ({
  className,
  children,
}: {
  children: ReactNode[] | ReactNode;
  className?: string;
}) => {
  return (
    <footer
      className={`text-center p-2.5 border-t border-t-[#696969] text-[#C3C3C3] max-w-[1420px] w-full ${className}`}
    >
      {children}
    </footer>
  );
};

export default Footer;
