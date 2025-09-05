import resume from "./media/Resume.pdf";

export const user = {
  firstName: "John",
  lastName: "Absolu",
  email: `Johnson.absolu@hotmail.com`,
  linkedIn: "https://www.linkedin.com/in/john-absolu",
  gitHub: "https://github.com/JAbsolu",
  resume: resume,
  resume_link:
    "https://docs.google.com/document/d/1LspAuIfg0M5dhneRBVivC50eu9UN_bvtml2YcFrZjTY/edit?usp=sharing",
};

export const WebsiteTexts = {
  title: `I'm a Software Engineer Based in New York`,
  subtitle: `I'm a Software Engineer passionate about building accessible web apps that users love.`,
  about: `I'm a dedicated Software Engineer with a strong passion for building dynamic, user-friendly web applications. 
            With hands-on experience across the full stack—from developing AI-powered platforms like Investi.tech to creating 
            event managers, GPA calculators, eCommerce sites, and social media apps—I thrive on turning complex ideas into 
            practical digital solutions. My projects span technologies including React, Node.js, Next.js, MongoDB, Firebase, 
            PHP, MySQL, and cloud services like AWS and Google Cloud.`,
  Status_searching: `I am actively looking for an Entry-level or Apprenticeship opportunity, 
            Please do not hesitate to email me using the link below regarding potential positions.`,
  Status_not_searching: `Hi, thanks for visiting my portfolio website. 
            Feel free to send me an email.`,
};

export const projects = [
  {
    name: "Investi.tech - AI Stock Research",
    frontendView: "https://www.investi.tech/",
    github: "https://github.com/JAbsolu/Investi-3.0-React-Frontend",
    technology: ["OpenAI GPT", "Node JS", "Firebase", "AWS", "React", "Tailwind", "MUI"],
    description:
      "An AI app that leverages openAI-GPT-40 and Yahoo Finance to determine whether a stock is a bearish or bullish.",
  },
  {
    name: "Notesage - Quiz and Notes App",
    frontendView: "https://www.note-sage.com/",
    github: "https://github.com/JAbsolu/Invest.ai",
    technology: ["Node JS", "MongoDB", "AWS", "Next JS", "MUI", "Tailwind"],
    description: `A full-stack web application that allows students to transform their notes into personalized flashcards and quizzes.`,
  },
  {
    name: "React Todo List Application",
    frontendView: "https://todo-blond-theta.vercel.app/",
    github: "https://github.com/JAbsolu/Todo-app",
    technology: ["Javascript", "React Js", "CSS"],
    description:
      "A single page application that allows users to add tasks to a list to be completed.",
  },
  {
    name: "Weather App",
    frontendView: "https://htweather.vercel.app/",
    github: "https://github.com/JAbsolu/weather-app",
    technology: ["React", "Weather API", "Geolocation API", "Material UI"],
    description:
      "A weather application with weather and geolocation API, allowing users to get weather info based on their live location.",
  },
  {
    name: "Event Management App",
    // frontendView: 'https://ctstategpa.vercel.app/',
    github: "https://github.com/JAbsolu/Invest.ai",
    technology: ["Node JS", "MYSQL", "Google Cloud"],
    description:
      "A Fullstack Application that allows students, staff, and faculty to create, and manage events.",
  },
  {
    name: "Social Media App",
    frontendView: null,
    github: "https://github.com/JAbsolu/FullStack-Social-app",
    technology: ["React", "Redux", "Node JS", "MongoDb", "Express JS"],
    description:
      "A Fullstack social media website, allows users to signup/signin and add friends.",
  },
  {
    name: "CT State GPA Calculator",
    frontendView: "https://ctstategpa.vercel.app/",
    github: "https://github.com/JAbsolu/CT-State-CC-GPA-Calculator",
    technology: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description:
      "A GPA calulator intended to be used for the Connecticut State Colleges.",
  },
  {
    name: "Full-Stack Dealership Application",
    frontendView: null,
    github: "https://github.com/JAbsolu/Serverside-programing-Final-Project",
    technology: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    description: "A Full-stack car dealership app with a MySQL database",
  },
  {
    name: "Team and Task Manager App",
    frontendView: null,
    github: "https://github.com/JAbsolu/Team-management-app",
    technology: ["React JS", "Node JS", "Mongodb", "Express JS", "MUI"],
    description:
      "A MERN Stack team and task manager app, that allows teams to colloborate, assigns tasks based on their respective levels.",
  },
  {
    name: "Ecommerce Website",
    frontendView: "https://sneakeryoo.vercel.app",
    github: "https://github.com/JAbsolu/sneaker-web-app",
    technology: ["HTML", "CSS", "Javascript"],
    description:
      "A multi-page ecommerce website that allows users to view a product and add to cart.",
  },
  {
    name: "Emergency Response App",
    frontendView: "https://emergency-response-app.vercel.app/",
    github: "https://github.com/JAbsolu/Emergency-response-app",
    technology: ["Javascript", "React Js", "Sass", "CSS", "Bootstrap"],
    description:
      "A 4 page web application that allows users to login and request emergency assistance.",
  },
];
