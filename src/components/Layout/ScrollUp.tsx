import useTranslation from "next-translate/useTranslation";

const ScrollUp = () => {
  const { lang } = useTranslation();
  const isArabic = lang === "ar";

  return (
    <div
      className={`fixed bottom-5 ${
        isArabic ? "left-5" : "right-5"
      } cursor-pointer p-3 rounded-full bg-cyan-600 text-white justify-center items-center`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </div>
  );
};

export default ScrollUp;
