import resume from './media/Resume.pdf'

export const user = {
    firstName : 'John',
    lastName : 'Absolu',
    email: `Johnson.absolu@hotmail.com`,
    linkedIn : 'https://www.linkedin.com/in/john-absolu',
    gitHub : 'https://github.com/JAbsolu',
    resume: resume,
    resume_link: 'https://docs.google.com/document/d/1LspAuIfg0M5dhneRBVivC50eu9UN_bvtml2YcFrZjTY/edit?usp=sharing',
};

export const WebsiteTexts = {
    title : `I'm a Software Developer based in Connecticut`,
    subtitle: `I'm a Software Developer passionate about building accessible web apps that users love.`,
    about: `I'm a passionate Software 
            Developer specializing in building responsive web applications. 
            Currently enrolled in a bachelor's degree program in computer 
            science at Southern Connecticut State University, my journey 
            in Web and Software Development began in 2018 when I successfully 
            launched an ecommerce website on Shopify. Since then, I have 
            honed my skills in building ecommerce sites on Shopify and 
            ventured into freelancing, helping individuals launch their 
            online stores. In 2020, I enrolled on a free online bootcamp on
            FreeCodeCamp, where I acquired the knowledge to create basic websites using HTML, CSS and Javascript.`,
    Status_searching: `I am actively looking for an Entry-level or Apprenticeship opportunity, 
            Please do not hesitate to email me using the link below regarding potential positions.`,
    Status_not_searching: `Hi, thanks for visiting my portfolio website. 
            Feel free to send me an email.`
}


export const projects = [
  {
    name: "CT State GPA Calculator",
    frontendView: 'https://gpa-calculator-pink.vercel.app/',
    github: "https://github.com/JAbsolu/CT-State-CC-GPA-Calculator",
    technology: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: "A GPA calulator intended to be used for the Connecticut State Colleges.",
  },
  {
    name: "Team and Task Manager App",
    frontendView: null,
    github: "https://github.com/JAbsolu/Team-management-app",
    technology: ["React JS", "Node JS", "Mongodb", "Express JS" , "MUI"],
    description: "A MERN Stack team and task manager app, that allows teams to colloborate, assigns tasks based on their respective levels.",
  },
    {
      name: "Weather App",
      frontendView: "https://htweather.vercel.app/",
      github: "https://github.com/JAbsolu/weather-app",
      technology: ["React", "Weather API", "Geolocation API" , "Material UI"],
      description: "A weather application with weather and geolocation API, allowing users to get weather info based on their live location.",
    },
    {
      name: "Full-Stack Dealership Application",
      frontendView: null,
      github: "https://github.com/JAbsolu/Serverside-programing-Final-Project",
      technology: ["PHP", "MySQL", "Bootstrap", "Hack"],
      description: "A Full-stack car dealership app with a MySQL database",
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
      name: "MERN Social Media App",
      frontendView: null,
      github: "https://github.com/JAbsolu/FullStack-Social-app",
      technology: ["React", "Redux", "Node JS", "MongoDb"],
      description:
        "A Fullstack social media website, allows users to signup/signin and add friends.",
    },
    {
      name: "Javascript calculator",
      frontendView: "https://jscalculator-ruby.vercel.app/",
      github: "https://github.com/JAbsolu/Javascript-calculator",
      technology: ["HTML", "CSS", "Javascript"],
      description: "A javascript calculator that allows users to calculate",
    },
    {
      name: "Emergency Response App",
      frontendView: "https://emergency-response-app.vercel.app/",
      github: "https://github.com/JAbsolu/Emergency-response-app",
      technology: ["Javascript", "React Js", "Sass", "CSS", "Bootstrap"],
      description:
        "A 4 page web application that allows users to login and request emergency assistance.",
    },
    {
      name: "Ecommerce Website",
      frontendView: "https://jabsolu.github.io/sneaker-web-app/",
      github: "https://github.com/JAbsolu/sneaker-web-app",
      technology: ["HTML", "CSS", "Javascript"],
      description:
        "A multi-page ecommerce website that allows users to view a product and add to cart.",
    },
    {
      name: "Lease Payment Calculator",
      frontendView: null,
      github: "https://github.com/JAbsolu/lease-payment-calculator",
      technology: ["PHP", "HTML", "Bootstrap", "CSS"],
      description: "A one page web app that helps calculate car lease payment. Used in the Fullstack dealership project.",
    },
    {
      name: "Leetcode Solutions",
      frontendView: "https://github.com/JAbsolu/Leetcode-Solutions",
      github: "https://github.com/JAbsolu/Leetcode-Solutions",
      technology: ["Javascript", "Python"],
      description: "A list of my leetcode solutions. New solutions are added weekly",
    },
  ];