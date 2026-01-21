import { SimpleGrid } from "@mantine/core";
import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { otherSkills } from "../../../fake/profile";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import useDarkMode from "../../../hooks/useDarkMode";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const OtherSkillsContent = () => {
  const { t } = useTranslation("profile");
  const { isDark } = useDarkMode();

  return (
    <div className="flex flex-col items-center">
      {otherSkills.map((collection, i) => (
        <SimpleGrid
          cols={5}
          breakpoints={[{ maxWidth: 600, cols: 3 }]}
          key={i}
          className="mb-5 py-2"
        >
          {collection.map((skill, j) => (
            <Link href={skill.link} key={j}>
              <a
                target="_blank"
                className={cn(
                  "rounded-md text-center gap-2 flex flex-col items-center w-28 p-2 h-fit hover:shadow hover:shadow-cyan-500 bg-black/10",
                  isDark && "bg-slate-700"
                )}
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <strong className="opacity-75 text-sm">
                  {t(`skill.${camelCase(skill.name)}`)}
                </strong>
              </a>
            </Link>
          ))}
        </SimpleGrid>
      ))}
    </div>
  );
};

export default OtherSkillsContent;
