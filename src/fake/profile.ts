import EducationTimeLine1 from "../components/Profile/education/TimeLine1";
import EducationTimeLine2 from "../components/Profile/education/TimeLine2";
import EducationTimeLine3 from "../components/Profile/education/TimeLine3";
import EducationTimeLine4 from "../components/Profile/education/TimeLine4";
import FieldsOfInterestContent from "../components/Profile/fieldOfInterest/FieldOfInterest.content";
import LinksContent from "../components/Profile/links/Links.content";
import PersonalInformationContent from "../components/Profile/personalInformation/PersonalInformation.content";
import FavouriteSkillsContent from "../components/Profile/skills/FavouriteSkills.content";
import OtherSkillsContent from "../components/Profile/skills/OtherSkills.content";
import WorkExperienceTimeLine1 from "../components/Profile/workExperience/TimeLine1";
import WorkExperienceTimeLine2 from "../components/Profile/workExperience/TimeLine2";
import WorkExperienceTimeLine3 from "../components/Profile/workExperience/TimeLine3";
import WorkExperienceTimeLine4 from "../components/Profile/workExperience/TimeLine4";
import WorkExperienceTimeLine5 from "../components/Profile/workExperience/TimeLine5";
import WorkExperienceTimeLine6 from "../components/Profile/workExperience/TimeLine6";
import { EducationField } from "../types/EducationField";
import { Field } from "../types/Field";
import { InterestField } from "../types/InterestField";
import { LinksGroup } from "../types/Links";
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
        title: "Other Tools",
        content: OtherSkillsContent,
      },
      {
        id: 3,
        title: "Favourite Tools",
        content: FavouriteSkillsContent,
      },
    ],
  },
  {
    id: 3,
    name: "Work Experience",
    timelines: [
      {
        id: 4,
        title: {
          // NOTE: Date(Month - Day - Year)
          from: "12-1-2018",
          to: "12-30-2020",
        },
        content: WorkExperienceTimeLine1,
      },
      {
        id: 5,
        title: {
          from: "1-1-2021",
          to: "12-12-2021",
        },
        content: WorkExperienceTimeLine2,
      },
      {
        id: 6,
        title: {
          from: "12-13-2021",
          to: "3-27-2022",
        },
        content: WorkExperienceTimeLine3,
      },
      {
        id: 7,
        title: {
          from: "3-28-2022",
          to: "6-28-2022",
        },
        content: WorkExperienceTimeLine4,
      },
      {
        id: 8,
        title: {
          from: "7-1-2022",
          to: "1-27-2023",
        },
        content: WorkExperienceTimeLine5,
      },
      {
        id: 9,
        title: {
          from: "2-1-2023",
          to: "4-1-2023",
        },
        content: WorkExperienceTimeLine6,
      }
    ],
  },
  {
    id: 4,
    name: "Education",
    timelines: [
      {
        id: 9,
        title: {
          from: "2006",
          to: "2014",
        },
        content: EducationTimeLine1,
      },
      {
        id: 10,
        title: {
          from: "2015",
          to: "2018",
        },
        content: EducationTimeLine2,
      },
      {
        id: 11,
        title: {
          from: "2019",
          to: "2020",
        },
        content: EducationTimeLine3,
      },
      {
        id: 12,
        title: {
          from: "12-10-2020",
          to: "Present",
        },
        content: EducationTimeLine4,
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
        content: LinksContent,
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
      img: "https://b.top4top.io/p_2451yjef86.png",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      img: "https://l.top4top.io/p_2450h8wpt5.png",
      link: "https://reactjs.org/",
    },
    {
      name: "Node.js",
      img: "https://c.top4top.io/p_24518wn0a7.png",
      link: "https://nodejs.org/en/",
    },
    {
      name: "GraphQL",
      img: "https://l.top4top.io/p_2451uyb0g4.png",
      link: "https://graphql.org/",
    }
  ],
  [
    {
      name: "Astro",
      img: "https://i.top4top.io/p_2451m5n6r1.png",
      link: "https://astro.build/",
    },
    {
      name: "Nest.js",
      img: "https://a.top4top.io/p_2451gd4md5.png",
      link: "https://nestjs.com/",
    },
    {
      name: "PostgreSQL",
      img: "https://d.top4top.io/p_2451rkpfk8.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Prisma",
      img: "https://e.top4top.io/p_2451iz5x39.png",
      link: "https://www.prisma.io/",
    },
  ],
  [
    {
      name: "Electron",
      img: "https://k.top4top.io/p_24518f9qo3.png",
      link: "https://www.electronjs.org/",
    },
    {
      name: "React Native",
      img: "https://j.top4top.io/p_2451r74tj2.png",
      link: "https://reactnative.dev/",
    },
    {
      name: "Supabase",
      img: "https://j.top4top.io/p_263731n2n1.png",
      link: "https://supabase.com/",
    },
    {
      name: "Tailwind CSS",
      img: "https://l.top4top.io/p_24514xxow7.png",
      link: "https://tailwindcss.com/",
    },
  ],
];

export const otherSkills: Skill[][] = [
  [
    {
      name: "JavaScript",
      img: "https://img.icons8.com/color/48/000000/javascript.png",
      link: "https://www.javascript.com/",
    },
    {
      name: "HTML",
      img: "https://img.icons8.com/color/48/000000/html-5.png",
      link: "https://www.w3schools.com/html/",
    },
    {
      name: "CSS",
      img: "https://img.icons8.com/color/48/000000/css3.png",
      link: "https://www.w3schools.com/css/",
    },
    {
      name: "TypeScript",
      img: "https://img.icons8.com/color/48/000000/typescript.png",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Vue.js",
      img: "https://img.icons8.com/color/48/000000/vue-js.png",
      link: "https://vuejs.org/",
    },
    {
      name: "Sass",
      img: "https://img.icons8.com/color/48/000000/sass.png",
      link: "https://sass-lang.com/",
    },
    {
      name: "Bootstrap",
      img: "https://img.icons8.com/color/48/000000/bootstrap.png",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Material UI",
      img: "https://img.icons8.com/color/48/000000/material-ui.png",
      link: "https://material-ui.com/",
    },
    {
      name: "Docker",
      img: "https://img.icons8.com/color/48/000000/docker.png",
      link: "https://www.docker.com/",
    },
    {
      name: "EJS",
      img: "https://f.top4top.io/p_2451crrp01.png",
      link: "https://ejs.co/",
    },
    {
      name: "Express.js",
      img: "https://img.icons8.com/color/48/000000/express.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Apollo Server",
      img: "https://img.icons8.com/color/48/000000/apollo.png",
      link: "https://www.apollographql.com/",
    },
    {
      name: "Fastify",
      img: "https://g.top4top.io/p_2451j7cea2.png",
      link: "https://www.fastify.io/",
    },
    {
      name: "Socket.io",
      img: "https://j.top4top.io/p_2451p6a1x5.png",
      link: "https://socket.io/",
    },
    {
      name: "MongoDB",
      img: "https://img.icons8.com/color/48/000000/mongodb.png",
      link: "https://www.mongodb.com/",
    },
    {
      name: "MySQL",
      img: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Firebase",
      img: "https://img.icons8.com/color/48/000000/firebase.png",
      link: "https://firebase.google.com/",
    },
    {
      name: "SQLite",
      img: "https://k.top4top.io/p_2451zsppt6.png",
      link: "https://www.sqlite.org/index.html",
    },
    {
      name: "Vuex",
      img: "https://a.top4top.io/p_2451rxi768.png",
      link: "https://vuex.vuejs.org/",
    },
    {
      name: "Redux",
      img: "https://img.icons8.com/color/48/000000/redux.png",
      link: "https://redux.js.org/",
    },
    {
      name: "Recoil",
      img: "https://i.top4top.io/p_2451hw2s14.png",
      link: "https://recoiljs.org/",
    },
    {
      name: "Laravel",
      img: "https://h.top4top.io/p_2451wuqe73.png",
      link: "https://laravel.com/",
    },
    {
      name: "tRPC",
      img: "https://l.top4top.io/p_263759do21.png",
      link: "https://trpc.io/",
    },
    {
      name: "Docusaurus",
      img: "https://c.top4top.io/p_2637mgnir1.png",
      link: "https://docusaurus.io/",
    }
  ],
];

export const educationFields: EducationField[] = [
  {
    facility: "Al-Noban School",
    details: ["Graduated from Al-Noban School in 2014 with a grade of 95.57 %"],
  },
  {
    facility: "Mukalla Model Secondary School (MMSS)",
    details: [
      "10th class with a grade of 90.80 %",
      "11th class with a grade of 94.00 %",
      "12th class with a grade of 96.50 %",
    ],
  },
  {
    facility: "SOEL Institute For English Learning",
    details: ["English Diploma with a grade of +A"],
  },
  {
    facility: "MS Ramaiah Institute of Technology",
    details: [],
  },
];

export const linksGroups: LinksGroup[] = [
  {
    id: 1,
    title: "Follow Me",
    links: [
      {
        id: 1,
        name: "Github",
        url: "https://github.com/ObaidQatan/",
      },
      {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/obaid-qatan-7699bb185/",
      },
      {
        id: 3,
        name: "YouTube",
        url: "https://www.youtube.com/channel/mobarmejAcademy/",
      },
      {
        id: 4,
        name: "Instagram",
        url: "https://www.instagram.com/obekas_dono/",
      },
    ],
  },
  {
    id: 2,
    title: "Contact Me",
    links: [
      {
        id: 1,
        name: "Email",
        url: "mailto:ogaten27@gmail.com",
      },
      {
        id: 2,
        name: "Facebook",
        url: "https://www.facebook.com/obead.gaten/",
      },
    ],
  },
  {
    id: 3,
    title: "Links",
    links: [
      {
        id: 1,
        name: "CV",
        url: "https://sem4-algo.herokuapp.com/other/cv.pdf",
      },
      {
        id: 2,
        name: "Mobarmej Academy",
        url: "https://mobarmejacademy.vercel.app/",
      },
    ],
  },
];
