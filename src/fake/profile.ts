import Footer from "../components/Layout/Footer";
import FieldsOfInterestContent from "../components/Profile/fieldOfInterest/FieldOfInterest.content";
import PersonalInformationContent from "../components/Profile/personalInformation/PersonalInformation.content";
import SkillsContent from "../components/Profile/skills/Skills.content";
import { Field } from "../types/Field";
import { InterestField } from "../types/InterestField";
import { PersonalInfoField } from "../types/PersonalInfoField";
import { Skill } from "../types/Skill";

export const fields: Field[] = [
  {
    id: 0,
    name: "Personal Information",
    timelines: [
      {
        id: 0,
        title: "",
        content: PersonalInformationContent,
      },
    ],
  },
  {
    id: 1,
    name: "Field of Interest",
    timelines: [
      {
        id: 1,
        title: "",
        content: FieldsOfInterestContent,
      },
    ],
  },
  {
    id: 2,
    name: "Skills",
    timelines: [
      {
        id: 2,
        title: "Favourite Tools",
        content: SkillsContent,
      },
    ],
  },
  {
    id: 3,
    name: "Work Experience",
    timelines: [
      {
        id: 4,
        title: "2019 - 2020",
        content: Footer,
      },
      {
        id: 5,
        title: "2020 - 2021",
        content: Footer,
      },
    ],
  },
  {
    id: 4,
    name: "Education",
    timelines: [
      {
        id: 6,
        title: "2019 - 2020",
        content: Footer,
      },
      {
        id: 7,
        title: "2020 - 2021",
        content: Footer,
      },
      {
        id: 8,
        title: "2020 - 2021",
        content: Footer,
      },
    ],
  },
  {
    id: 5,
    name: "Links",
    timelines: [
      {
        id: 9,
        title: "",
        content: Footer,
      },
    ],
  },
];

export const personalInformation: PersonalInfoField[] = [
  {
    property: "Name",
    value: "Obaid Qatan",
  },
  {
    property: "Email",
    value: "ogaten27@gmail.com",
  },
  {
    property: "Age",
    value: new Date(2000, 11, 12).toISOString(),
  },
  {
    property: "Location",
    value: "Bangalore, India",
  },
];

export const fieldOfInterest: InterestField[] = [
  {
    interest: "Software Development",
    level: 5,
  },
  {
    interest: "Web Development",
    level: 4,
  },
];

export const favouriteSkills: Skill[][] = [
  [
    {
      name: "Next.js",
      img: "https://j.top4top.io/p_2450n9zue3.png",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      img: "https://l.top4top.io/p_2450h8wpt5.png",
      link: "https://reactjs.org/",
    },
    {
      name: "Node.js",
      img: "https://a.top4top.io/p_2450sk1bs6.png",
      link: "https://nodejs.org/en/",
    },
    {
      name: "GraphQL",
      img: "https://i.top4top.io/p_24500xfba2.png",
      link: "https://graphql.org/",
    },
  ],
  [
    {
      name: "Astro",
      img: "https://i.top4top.io/p_2450pro4z1.png",
      link: "https://astro.build/",
    },
    {
      name: "Nest.js",
      img: "https://e.top4top.io/p_2450fknfk1.png",
      link: "https://nestjs.com/",
    },
    {
      name: "PostgreSQL",
      img: "https://k.top4top.io/p_24502i3n54.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Prisma",
      img: "https://h.top4top.io/p_245089iz11.png",
      link: "https://www.prisma.io/",
    },
  ],
  [
    {
      name: "Electron",
      img: "https://d.top4top.io/p_24507jdrd1.png",
      link: "https://www.electronjs.org/",
    },
    {
      name: "React Native",
      img: "https://e.top4top.io/p_2450jt6002.png",
      link: "https://reactnative.dev/",
    },
  ],
];
