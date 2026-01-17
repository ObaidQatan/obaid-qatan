export interface Skill {
  name: string;
  img: string;
  link: string;
}

export interface InterestField {
  interest: string;
  level: number;
}

export interface WorkExperienceTimeline {
  title: {
    from: string;
    to: string | null;
  };
  descriptionLines?: string[];
}

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
      name: "PostgreSQL",
      img: "https://d.top4top.io/p_2451rkpfk8.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Capacitor.js",
      img: "https://capacitorjs.com/docs/img/components/product-dropdown/logo-dark.png",
      link: "https://capacitorjs.com/",
    },
  ],
  [
    {
      name: "Tailwind CSS",
      img: "https://l.top4top.io/p_24514xxow7.png",
      link: "https://tailwindcss.com/",
    },
    {
      name: "ShadCN UI",
      img: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
      link: "https://ui.shadcn.com/",
    },
    {
      name: "Supabase",
      img: "https://j.top4top.io/p_263731n2n1.png",
      link: "https://supabase.com/",
    },
    {
      name: "Prisma",
      img: "https://e.top4top.io/p_2451iz5x39.png",
      link: "https://www.prisma.io/",
    },
    {
      name: "TypeScript",
      img: "https://img.icons8.com/color/48/000000/typescript.png",
      link: "https://www.typescriptlang.org/",
    },
  ],
  [
    {
      name: "Sass",
      img: "https://img.icons8.com/color/48/000000/sass.png",
      link: "https://sass-lang.com/",
    },
    {
      name: "DigitalOcean",
      img: "https://a.top4top.io/p_33290t5o91.png",
      link: "https://www.digitalocean.com/",
    },
  ],
];

export const otherSkills: Skill[] = [
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
    name: "Vue.js",
    img: "https://img.icons8.com/color/48/000000/vue-js.png",
    link: "https://vuejs.org/",
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
    name: "Express.js",
    img: "https://img.icons8.com/color/48/000000/express.png",
    link: "https://expressjs.com/",
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
    name: "Redux",
    img: "https://img.icons8.com/color/48/000000/redux.png",
    link: "https://redux.js.org/",
  },
  {
    name: "GraphQL",
    img: "https://l.top4top.io/p_2451uyb0g4.png",
    link: "https://graphql.org/",
  },
];

export const fieldOfInterest: InterestField[] = [
  { interest: "Web Development", level: 100 },
  { interest: "Mobile Development", level: 85 },
  { interest: "UI/UX Design", level: 90 },
  { interest: "AI Integration", level: 80 },
];

export const workExperience: WorkExperienceTimeline[] = [
  {
    title: {
      // NOTE: Date(Month - Day - Year)
      from: "12-1-2018",
      to: "12-30-2020",
    },
    descriptionLines: ["Freelancing.", "Web Design.", "Graphic Design."],
  },
  {
    title: {
      from: "1-1-2021",
      to: "12-12-2021",
    },
    descriptionLines: [
      "Worked at Bob Apps Tech Company for IT Solutions.",
      "Full Stack Web Developer.",
      "MEVN Stack.",
    ],
  },
  {
    title: {
      from: "12-13-2021",
      to: "3-27-2022",
    },
    descriptionLines: [
      "Freelancing.",
      "Web Development.",
      "APIs.",
      "Software Consultancy.",
    ],
  },
  {
    title: {
      from: "3-28-2022",
      to: "6-28-2022",
    },
    descriptionLines: [
      "Personal Trainer.",
      "Object Oriented Programming.",
      "Data Structures and Algorithms.",
      "Java.",
    ],
  },
  {
    title: {
      from: "7-1-2022",
      to: "1-27-2023",
    },
    descriptionLines: [
      "Freelancing.",
      "Web Development.",
      "APIs.",
      "Software Consultancy.",
    ],
  },
  {
    title: {
      from: "2-1-2023",
      to: "8-1-2023",
    },
    descriptionLines: [
      "Worked at Zevi AI.",
      "Frontend Engineer.",
      "Building rich user interfaces and components using React.",
      "Converting UI designs into scalable React components.",
      "Documentation pages using Docusaurus and React.",
    ],
  },
  {
    title: {
      from: "10-23-2024",
      to: null,
    },
    descriptionLines: [
      "Working At SaaS Tech.",
      "Lead Software Engineer.",
      "Building startups and projects from A to Z.",
      "Fixing, enhancing, and optimizing software products.",
      "Leading and mentoring software developers, ensuring polished skills under best software practices and patterns.",
    ],
  },
].sort((a, b) => {
  const dateA = new Date(a.title.from);
  const dateB = new Date(b.title.from);
  return dateB.getTime() - dateA.getTime();
});
