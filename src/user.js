import todoAppImg from './assets/todoapp.png';
import Erapp from './assets/mederImg.png';
import ecomApp from './assets/ecommerce.png';
import resume from './assets/Resume.pdf';

export const user = {
    firstName : 'Johnson',
    lastName : 'Absolu',
    email: `Johnson.absolu@outlook.com`,
    linkedIn : 'https://www.linkedin.com/in/johnson-absolu/',
    gitHub : 'https://github.com/JAbsolu',
    resume: resume,
};



export const projects = {
    todo: {
        name: "React Todo List Application",
        thumbnail: todoAppImg,
        frontendView: 'https://todo-blond-theta.vercel.app/',
        github: 'https://github.com/JAbsolu/Todo-app',
        technology: ['Javascript', 'React Js', 'CSS'],
        description: 'A single page application that allows users to add tasks to a list to be completed.',
    },
    ErApp: {
        name: "Emergency Response App",
        thumbnail: Erapp,
        frontendView: 'https://emergency-response-app.vercel.app/',
        github: 'https://github.com/JAbsolu/Emergency-response-app',
        technology: ['Javascript', 'React Js', 'Sass', 'CSS', 'Bootstrap'],
        description: "A 4 page web application that allows users to login and request emergency assistance.",
    },
    ecommerceApp: {
        name: "Ecommerce Website",
        thumbnail: ecomApp,
        frontendView: 'https://jabsolu.github.io/sneaker-web-app/',
        github: 'https://github.com/JAbsolu/sneaker-web-app',
        technology: ['HTML', 'CSS', 'Javascript'],
        description: 'A multi-page ecommerce website that allows users to view a product and add to cart.',
    },
};

