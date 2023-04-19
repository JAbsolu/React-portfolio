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
        thumbnail: todoAppImg,
        frontendView: 'https://todo-blond-theta.vercel.app/',
        github: 'https://github.com/JAbsolu/Todo-app',
    },
    ErApp: {
        thumbnail: Erapp,
        frontendView: 'https://emergency-response-app.vercel.app/',
        github: 'https://github.com/JAbsolu/Emergency-response-app'
    },
    ecommerceApp: {
        thumbnail: ecomApp,
        frontendView: 'https://jabsolu.github.io/sneaker-web-app/',
        github: 'https://github.com/JAbsolu/sneaker-web-app'
    }
}

