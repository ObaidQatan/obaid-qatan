import dayjs from "dayjs";
import { camelCase, upperCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../src/components/Layout";
import ScrollUp from "../../src/components/Layout/ScrollUp";
import { fields } from "../../src/fake/profile";
import useDarkMode from "../../src/hooks/useDarkMode";

const Profile = () => {
  const { t } = useTranslation("profile");
  const { t: _ } = useTranslation("common");
  const { isDark } = useDarkMode();

  return (
    <Layout className="items-center flex-col">
      <Head>
        <title>{_("appName") + "|" + t("profile")}</title>
      </Head>

      <div className="w-[150px] h-[150px] rounded-full relative overflow-hidden z-10 shadow-md shadow-[#0000004d]">
        <Image
          layout="fill"
          objectFit="fill"
          src="https://avatars.githubusercontent.com/u/75757127?v=4"
          alt="profile picture"
        />
      </div>

      <div
        id="quickLinks"
        className={`flex flex-col p-2 pt-4 rounded-lg ${
          isDark ? "bg-[#ffffff4d]" : "bg-[#43D2D64d]"
        } min-h-[300px] min-w-[300px] w-[90%] -translate-y-5`}
      >
        <h3 className="border-b border-b-cyan-500 text-cyan-500">
          {t("quickLinks").toUpperCase()}
        </h3>
        <ul>
          {fields.map((f) => (
            <li
              key={f.id}
              className="transition-none py-1 tracking-wide text-slate-400 hover:text-cyan-400"
            >
              <a href={`#${f.name}`}>- {t(camelCase(f.name))}</a>
            </li>
          ))}
        </ul>
      </div>

      <ScrollUp />

      {fields.map((f) => (
        <div
          key={f.id}
          id={f.name}
          className="flex flex-col w-[90%] min-h-[200px] min-w-[300px] p-2 mt-4"
        >
          <h3 className="border-b border-b-cyan-500 text-cyan-500">
            {t(camelCase(f.name)).toUpperCase()}
          </h3>
          {Array.from(f.timelines)
            .reverse()
            .map((tl) => (
              <div
                key={tl.id}
                className="flex flex-col w-full min-h-[300px] min-w-[300px] p-2 mt-4"
              >
                <h3 className="text-gray opacity-40 font-bold">
                  {typeof tl.title === "string"
                    ? t(camelCase(tl.title))
                    : `${dayjs(tl.title.from).date()} ${_(
                        "month." + (dayjs(tl.title.from).month() + 1).toString()
                      )} ${dayjs(tl.title.from).year()} - ${
                        tl.title.to.toLowerCase() === "present"
                          ? t(camelCase(tl.title.to))
                          : dayjs(tl.title.to).date() +
                            " " +
                            _(
                              "month." +
                                (dayjs(tl.title.to).month() + 1).toString()
                            ) +
                            " " +
                            dayjs(tl.title.to).year()
                      }`}
                </h3>
                <tl.content />
              </div>
            ))}
        </div>
      ))}
    </Layout>
  );
};

export default Profile;
