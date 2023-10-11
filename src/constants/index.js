import {
  facebook, linkedin, instagram, twitter, github, facebook1, linkedin1, instagram1, twitter1, github1, guesstheword, tictactoe, mathmagician, metricwebapp, spacetravelers, recipeapp, trackbudget, carrental, spacetravelers1, spacetravelers2, spacetravelers3, tvshow2, tvshow3, recipeapp3, recipeapp4, recipeapp6, trackbuget1, trackbuget2, responsive, react, fullstack,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/taiwo01/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://web.facebook.com/taiwo.enochnunayon',
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://instagram.com/taiwo___enoch?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: 'Twitter',
    url: 'https://twitter.com/taiwoenoch4',
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/TaiwoEnoch',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Ruby on Rails',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'RSpec',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Appoint Doctor',
    desc: 'This is a full-stack project, connecting Rails API to React front-end, in which users can register, create a doctor, book an appointment with the doctor, see all scheduled meetings, and delete a doctor(s).',
    tech: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    img: carrental,
    carousel: [carrental],
    source_link: 'https://github.com/TaiwoEnoch/appoint-doctor-frontend.git',
    live_link: 'https://sensational-praline-cf3151.netlify.app/',
  },
  {
    id: 2,
    name: 'Recipe App',
    desc: 'The Recipe app keeps track of all your foods, recipes, and ingredients. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: recipeapp,
    carousel: [recipeapp3, recipeapp4, recipeapp6],
    source_link: 'https://github.com/TaiwoEnoch/FoodyOnRails.git',
    live_link: 'https://github.com/TaiwoEnoch/FoodyOnRails.git',
  },
  {
    id: 3,
    name: 'TV Shows Box',
    desc: 'TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 2 interfaces: - A home page, and a popup modal for comments.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'TVmaze API'],
    img: tvshow2,
    carousel: [tvshow2, tvshow3],
    source_link: 'https://github.com/Tshobohwa/salomon-enoch-capstone.git',
    live_link: 'https://tshobohwa.github.io/salomon-enoch-capstone/dist',
  },
  {
    id: 4,
    name: 'Crypto Data Explorer',
    desc: 'This crypto currency data explorer app is a powerful tool that allows users to delve deep into the world of digital currencies. With real-time updates and advanced analytical tools, this app provides a comprehensive view of the cryptocurrency market.',
    tech: ['React', 'Redux', 'Restful API'],
    img: metricwebapp,
    carousel: [metricwebapp],
    source_link: 'https://github.com/TaiwoEnoch/cryptocurrency-data-explorer.git',
    live_link: 'https://metrics-webapp121.netlify.app/',
  },
  {
    id: 5,
    name: 'Track Budget App',
    desc: 'Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: trackbudget,
    carousel: [trackbuget1, trackbuget2],
    source_link: 'https://github.com/TaiwoEnoch/Budget-Tracker.git',
    live_link: 'https://budget-m5l6.onrender.com/',
  },
  {
    id: 6,
    name: 'Math Magicians',
    desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    tech: ['React', 'Restful API', 'CSS'],
    img: mathmagician,
    carousel: [mathmagician],
    source_link: 'https://github.com/TaiwoEnoch/maths_magician.git',
    live_link: 'https://astonishing-figolla-d6448b.netlify.app/',
  },
  {
    id: 7,
    name: 'E-commerce App',
    desc: 'A web app project born from a passion for fashion and a love for coding. The e-commerce app combines the power of HTML, CSS, and JavaScript to bring you a seamless and stylish shopping experience. Whether you\'re into sleek and modern designs or timeless classics, the user-friendly interface allows you to explore a diverse range of styles.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: tictactoe,
    carousel: [tictactoe],
    source_link: 'https://github.com/TaiwoEnoch/E-commerce-website.git',
    live_link: 'https://dapper-crumble-7fe81a.netlify.app/',
  },
  {
    id: 8,
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ['React', 'Redux', 'SpaceX API'],
    img: spacetravelers,
    carousel: [spacetravelers1, spacetravelers2, spacetravelers3],
    source_link: 'https://github.com/TaiwoEnoch/Space_Travelers.git',
    live_link: 'https://super-puppy-069cbd.netlify.app/',
  },
  {
    id: 9,
    name: 'Todo App',
    desc: 'The to-do app is a web app that helps users manage their tasks and projects by creating lists of tasks or activities that need to be completed. Overall, the to-do app provides a simple and effective way for users to stay organized and on top of their tasks and responsibilities.',
    tech: ['React', 'CSS3', 'Vite'],
    img: guesstheword,
    carousel: [guesstheword],
    source_link: 'https://github.com/TaiwoEnoch/Todo-App.git',
    live_link: 'https://cosmic-wisp-48208a.netlify.app/',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Ritika Rawat',
    text: "Working closely with Taiwo Enoch has been a truly enriching experience. Throughout our collaboration, I had the opportunity to witness Taiwo's exceptional talent and dedication as a software engineer.",
    country: 'Indian',
    linkedIn: 'https://www.linkedin.com/in/rawatritika/',
  },
  {
    id: 2,
    name: 'Oluwatoyin Olaoye',
    text: "Enoch is super dedicated to his craft, which is exciting and motivating! He's always right on schedule, fancies standard/best coding practices, and has impeccable eyes for perfection - not minding a few requests for changes.",
    country: 'Nigeria',
    linkedIn: 'https://www.linkedin.com/in/oluwatoyinolaoye/',
  },
  {
    id: 3,
    name: 'Eduardo Villarreal',
    text: 'I am thrilled to recommend Taiwo for his outstanding work as a partner during our time in the software development program. Taiwo is a talented and dedicated developer who excels at both frontend and backend development.',
    country: 'Peru',
    linkedIn: 'https://www.linkedin.com/in/evillarrealz/',
  },
  {
    id: 4,
    name: 'Deium Akonkwa',
    text: 'Enoch is a good collaborator and team player with both technical and professional skills. His problem-solving skill is on the next level. We build group projects in Microverse and he was a very effective teammate.',
    country: 'DR Congo',
    linkedIn: 'https://www.linkedin.com/in/dieumakonkwa/',
  },
  {
    id: 5,
    name: 'Syed Atril',
    text: 'Enoch Taiwo is a highly skilled and professional developer with excellent communication and adapting skills. He listens to feedback and delivers high-quality work that meets client expectations.',
    country: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/syed-atril/',
  },
  {
    id: 6,
    name: 'Lengushuru Charles',
    text: "Taiwo has a remarkable ability to lead a team of developers to complete a project. If you're seeking someone who can complete tasks on time and efficiently, I highly recommend Taiwo for the job.",
    country: 'Kenya',
    linkedIn: 'https://www.linkedin.com/in/lengushuru-charles/',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
