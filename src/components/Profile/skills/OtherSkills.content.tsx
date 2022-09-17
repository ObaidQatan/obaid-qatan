import { SimpleGrid } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { otherSkills } from "../../../fake/profile";

const OtherSkillsContent = () => {
  const { t } = useTranslation("profile");

  return (
    <div className="flex flex-col items-center">
      {otherSkills.map((collection, i) => (
        <SimpleGrid
          cols={5}
          breakpoints={[{ maxWidth: 600, cols: 3 }]}
          key={i}
          className="mb-5 shadow-md p-2"
        >
          {collection.map((skill, j) => (
            <Link href={skill.link} key={j}>
              <a className="border rounded-md text-center flex flex-col items-center w-fit p-2 h-fit hover:shadow hover:shadow-cyan-500 bg-black bg-opacity-10">
                <div className="relative w-20 h-20">
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <strong className="opacity-75">{t(skill.name)}</strong>
              </a>
            </Link>
          ))}
        </SimpleGrid>
      ))}
    </div>
  );
};

export default OtherSkillsContent;
