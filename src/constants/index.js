import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  doodle,
  tribel,
  tickettomorrow,
  wozaif,
  nextjs,
  firebase,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Doodle Inc.",
    icon: doodle,
    iconBg: "#383E56",
    date: "November 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Completed AWS services course provided by company.",
      " Worked on various project like https://www.tribel.com/, https://www.tickettomorrow.com/ . Tribel is a social media platform & Ticket tomorrow is a platform related to ticketing services for any functions or event like concert.",
      " I worked on ticket creating system on ticket tomorrow and on some features of admin panel.",
      " In Tribel, I worked on migrating from React.js to Next.js. Here i broadly used Next.js features. I contributed to the frontend.",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Doodle Inc.",
    icon: doodle,
    iconBg: "#383E56",
    date: "May 2024 - March 2025",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked on https://www.wozaif.com/. It's a job portal site for agency, employer and candidate.",
      "I worked on frontend and the admin panel in this project.",
      "I worked on login system by using AWS Cognito.",
      "In the frontend i worked on job search page where searching, filtering and sorting functionality is available.",
      "And in the admin, i worked on agency, employer, candidate and job management.",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Info Inlet",
    icon: doodle,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing , a mobile-first Japanese travel application using Next.js, TypeScript, and Tailwind CSS.. It's a travel blogging.",
      "Implemented comprehensive search, filter, and sorting functionalities with Google Maps integration.",
      "Built secure authentication system using Next Auth, improving user experience and security.",
      "Developed RESTful APIs using Nest.js and PostgreSQL for backend functionality.",
      "Achieved responsive design and cross-browser compatibility, significantly reducing UI bugs.",
      "Optimized application performance through efficient component architecture."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tribel",
    description:
      "Tribel is considered a social networking website. It's a platform where users can connect with friends, family, and others by sharing information, photos, and updates, essentially building online social networks.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: tribel,
    source_code_link: "https://www.tribel.com/",
  },
  {
    name: "Wozaif",
    description:
      "Wozaif is a leading recruitment platform dedicated to connecting skilled professionals, trusted agencies, and employers across the GCC. They simplify the hiring process with transparency and ethical practices, ensuring fair opportunities for migrant workers.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: wozaif,
    source_code_link: "https://www.wozaif.com/",
  },
  {
    name: "Ticket Tomorrow",
    description:
      "Ticket Tomorrow is a one-stop entertainment destination that additionally provides ticketing services. They offer tickets for concerts, festivals, sports, and theatre, ensuring regular reliance on them.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: tickettomorrow,
    source_code_link: "https://www.tickettomorrow.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
