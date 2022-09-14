import { Button } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useDarkMode from "../../../hooks/useDarkMode";

const SideBar = () => {
  const { t } = useTranslation("common");
  const { isDark } = useDarkMode();
  const router = useRouter();
  const isArabic = router.locale === "ar";
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col ${
        isDark ? "bg-[#08192a] text-white" : "bg-[#fff] text-slate-600"
      } fixed top-0 h-screen w-[50%] max-w-md z-[200] items-center`}
      style={{
        boxShadow: "0 0 10px 0 rgba(0, 0, 0)",
        borderRadius: "0 0 0 20px",
        outlineStyle: "dashed",
        outlineWidth: "thin",
        outlineColor: isDark ? "#fff" : "cyan",
        [isArabic ? "left" : "right"]: isOpened ? 0 : "-50%",
      }}
    >
      <div
        className={`absolute top-1 ${
          isArabic ? "right-[-45px] -scale-x-100" : "left-[-45px]"
        } p-2 bg-inherit flex flex-col`}
        style={{
          borderRadius: "50% 0 0 50%",
          boxShadow: "-4px 0 5px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          onClick={() => setIsOpened(!isOpened)}
          className="w-8 h-8 p-1 rounded-full bg-white text-cyan-500 cursor-pointer border border-cyan-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {/* ------------- Conent Here-------------- */}
      <ul className="flex flex-col items-center w-[80%] bottom-2 absolute">
        <li className="w-full py-1">
          <Link href={router.asPath} locale={isArabic ? "en" : "ar"}>
            <a>
              <Button
                variant="outline"
                color="gray"
                className="text-[#C3C3C3] hover:text-[#43D2D6]"
                style={{
                  width: "100%",
                }}
              >
                {isArabic ? t("en") : t("ar")}
              </Button>
            </a>
          </Link>
        </li>
        <li className="mx-2 w-full py-1">
          <Link href="/profile">
            <a>
              <Button
                variant="outline"
                style={{
                  width: "100%",
                }}
              >
                {t("profile")}
              </Button>
            </a>
          </Link>
        </li>
        <li className="mx-2 w-full py-1">
          <Link href="/portfolio">
            <a>
              <Button
                style={{
                  width: "100%",
                }}
              >
                {t("portfolio")}
              </Button>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
