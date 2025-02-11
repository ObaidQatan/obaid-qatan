import React, { Fragment, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { portfolio } from "../../fake/portfolio";
import Img from "../ui/Img";
import useDarkMode from "../../hooks/useDarkMode";
import dayjs from "dayjs";
import { capitalize, truncate } from "lodash";
import { PortfolioItem } from "../../types";
import { XIcon } from "lucide-react";
import SkeletonLoader from "../ui/skeleton-loader";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function PortfolioScreen() {
  const { t } = useTranslation("portfolio");
  const { t: _ } = useTranslation("common");
  const { isDark } = useDarkMode();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [selectedItem]);

  return (
    <Fragment>
      <div className="flex flex-wrap gap-8 w-full py-4 max-sm:px-4">
        {portfolio.map((record, i) => (
          <button
            key={record.id}
            onClick={() => setSelectedItem(record)}
            className="p-4 rounded-2xl text-start leading-normal shadow border border-gray-400/50 flex flex-col gap-2 w-[300px] max-sm:w-full hover:-translate-y-1 hover:bg-gray-400/5"
          >
            <div className="rounded-2xl border border-gray-400/50 overflow-hidden w-full h-[190px] max-sm:h-fit max-sm:min-h-[190px]">
              <Img
                src={record.thumbnailUrl}
                alt="thumbnail"
                className="w-full h-full"
                width={200}
                height={200}
              />
            </div>
            <h3 className="font-bold text-xs text-gray-400">
              {t(record.title)}
            </h3>
            <p className="opacity-90">
              {truncate(t(record.description), { length: 140 })}
            </p>
            <p className="text-xs text-gray-400 mt-auto">
              {dayjs(record.createdAt).format("DD MMM YYYY")}
            </p>
          </button>
        ))}
      </div>
      {selectedItem && (
        <div
          className={cn(
            "dialog-container",
            "fixed top-0 left-0 bg-black/10 w-screen h-screen z-[200] backdrop-blur-md flex justify-center items-center"
          )}
        >
          <div
            className={cn(
              "dialog",
              "animate-in-popup",
              "bg-white p-5 rounded-2xl shadow-lg shadow-[#00000030] flex flex-col gap-2 w-[1420px] max-w-full h-[calc(100vh-50px)] max-[1420px]:h-screen max-[1420px]:rounded-none",
              isDark && "bg-slate-700"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold font-serif">
                {t(selectedItem.title)}
              </h3>
              <XIcon
                className="min-h-5 min-w-5 cursor-pointer"
                onClick={() => setSelectedItem(null)}
              />
            </div>
            <div className="flex-1 flex-row flex max-md:flex-col max-h-[calc(100%-50px)] max-md:max-h-fit max-md:overflow-y-auto">
              <div
                className={cn(
                  "details",
                  "scrollbar-transparent",
                  "md:overflow-y-auto h-full max-md:h-fit max-md:w-full flex-1 flex-col gap-8 flex pe-4 pt-4"
                )}
              >
                <div>
                  <span className="font-bold">{capitalize(t("my role"))}</span>:{" "}
                  {selectedItem.role}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">
                    {capitalize(t("project description"))}
                  </span>
                  <p>
                    {t(selectedItem.description)
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">
                    {capitalize(t("Skills and deliverables"))}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, i) => (
                      <span
                        className={cn(
                          "px-3 py-1 text-sm rounded-xl bg-gray-300 gap-1 text-gray-700",
                          isDark && "bg-gray-600 text-gray-200"
                        )}
                        key={i}
                      >
                        {tag.name}
                        {tag.icon && <tag.icon className="h-3 w-3" />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* --------- */}
              <div
                className={cn(
                  "media",
                  "scrollbar-transparent",
                  "md:overflow-y-auto h-full max-md:h-fit max-md:w-full w-[60%] flex-col gap-8 flex p-4"
                )}
              >
                {selectedItem.imagesUrls.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-gray-400/50 overflow-hidden w-full min-h-fit max-sm:min-h-[190px]"
                  >
                    <Img
                      src={imgUrl}
                      alt="media"
                      className="w-full h-full"
                      width={200}
                      height={200}
                      loadingComponent={
                        <SkeletonLoader className="h-[400px] max-sm:h-full w-full" />
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default PortfolioScreen;
