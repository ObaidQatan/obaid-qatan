import Footer from "../components/Layout/Footer";
import FieldsOfInterestContent from "../components/Profile/fieldOfInterest/FieldOfInterest.content";
import PersonalInformationContent from "../components/Profile/personalInformation/PersonalInformation.content";
import { Field } from "../types/Field";

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
        title: "2019 - 2020",
        content: Footer,
      },
      {
        id: 3,
        title: "2020 - 2021",
        content: Footer,
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

export const personalInformation: { property: string; value: string }[] = [
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

export const fieldOfInterest: { interest: string; level: number }[] = [
  {
    interest: "Software Development",
    level: 4,
  },
  {
    interest: "Web Development",
    level: 5,
  },
];
