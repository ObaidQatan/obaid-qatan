import { Button } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "../../../hooks/useDarkMode";
import useDetectSmallScreen from "../../../hooks/useDetectSmallScreen";
import useSideBar from "../../../hooks/useSideBar";

const Header = () => {
  const { lang, t } = useTranslation("common");
  const isArabic = lang === "ar";
  const router = useRouter();
  const isMobile = useDetectSmallScreen();
  const { isDark, toggleColorScheme } = useDarkMode();
  const { isOpened, setIsOpened } = useSideBar();

  return (
    <header className="flex justify-between p-3 max-w-7xl w-full sticky top-0 z-[100] bg-inherit text-[#43D2D6]">
      <div className="flex">
        <Link href="/">
          <a>
            <div className="w-50px h-50px text-[#C3C3C3] hover:text-[#43D2D6] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
          </a>
        </Link>
        <div
          className="border-current border w-8 h-8 mx-5 rounded-lg flex justify-center items-center cursor-pointer"
          onClick={() => toggleColorScheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
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
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
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
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </div>
      </div>

      {!isMobile && (
        <ul className="flex justify-end items-center grow">
          <li className="mx-2">
            <Link href={router.asPath} locale={isArabic ? "en" : "ar"}>
              <a>
                <Button
                  variant="outline"
                  color="gray"
                  className="text-[#C3C3C3] hover:text-[#43D2D6]"
                >
                  {isArabic ? t("en") : t("ar")}
                </Button>
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/profile">
              <a>
                <Button variant="outline">{t("profile")}</Button>
              </a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/portfolio">
              <a>
                <Button>{t("portfolio")}</Button>
              </a>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
