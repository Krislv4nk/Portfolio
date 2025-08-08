import camper1 from "../../assets/images/copycamper1.jpg";
import camper2 from "../../assets/images/camper.jpg";
import water1 from '../../assets/images/water-main.jpg';
import water2 from '../../assets/images/tracker.jpg';
import lingo1 from '../../assets/images/lingo.jpg';
import lingo2 from '../../assets/images/lingo1.jpg';
import lingo3 from '../../assets/images/lingo3.jpg';
// import lingo3 from '../../assets/images/lingo3-2x.jpg';
import phone1 from '../../assets/images/phone21.jpg';
import phone2 from '../../assets/images/Phone11.jpg';
import store1 from '../../assets/images/food.jpg';
import store2 from '../../assets/images/1food.jpg';
import store3 from '../../assets/images/filters.jpg';


export const skills = [
  { name: "React", iconId: "react" },
  { name: "JavaScript", iconId: "javascript" },
  { name: "Node.js", iconId: "node-dot-js" },
  { name: "CSS", iconId: "css3" },
  { name: "HTML", iconId: "html5" },
  { name: "Next.js", iconId: "nextjs" },
  { name: "TypeScript", iconId: "typescript" },
  { name: "Axios", iconId: "axios" },
  { name: "MongoDB", iconId: "mongodb" },
  { name: "Material-UI", iconId: "material-ui" },
  { name: "Redux", iconId: "redux" },
  { name: "Express.js", iconId: "express" },
  { name: "Firebase", iconId: "firebase" },
  { name: "Git", iconId: "git" },
  { name: "GitHub", iconId: "github" },
  { name: "VS Code", iconId: "vscode" },
  { name: "Figma", iconId: "figma" },
  { name: "@emotion", iconId: "emotion" },
  { name: "Postman", iconId: "postman" },
  { name: "Vite", iconId: "jsvite" },
  { name: "Nodemailer", iconId: "nodemailer" },
  { name: "JWT", iconId: "jwt" },
  { name: "Nodemon", iconId: "nodemon" },
  { name: "Yup", iconId: "yup" },
  { name: "Formik", iconId: "formik" },
  { name: "TailwindCSS", iconId: "tailwindcss" },
  { name: "SASS", iconId: "sass" },
  { name: "CssGrid", iconId: "internet" },
  { name: "Parcel", iconId: "parcel" },
  { name: "i18next", iconId: "i18next" },
  { name: "Vercel", iconId: "vercel" },
  { name: "ChatGPT", iconId: "chatgpt-logo" },
  { name: "REST API", iconId: "rest-api" },
  { name: "Styled Components", iconId: "styled-components" },
  { name: "npm", iconId: "npm" },
  { name: "React Router", iconId: "reactrouter" },
  { name: "JSON", iconId: "json" },
  { name: "Create React App", iconId: "Create-React-App" },
  { name: "Swagger", iconId: "swagger-original" },
  { name: "Nano ID", iconId: "nanoid" },
  { name: "UUID", iconId: "uuid" },
  { name: "Mongoose", iconId: "mongoose-original" },
  { name: "Stack Overflow", iconId: "stackoverflow" },
];





export const items = [

  {
            name: "Learn Lingo",
    links: {
      live: "https://krislv4nk.github.io/LearnLingo/",
      front: "https://github.com/Krislv4nk/LearnLingo"
       },
          images: {
      first: lingo1,
            second: lingo2,
            third: lingo3,
    },
    description: "Individual Project. The Teachers App is a web application built with Firebase and React for viewing and interacting with a teacher database.Users can register, log in, view profiles, save favorites, and book trial lessons. Firebase ensures real-time update and secure user management",
    features: [
      "Authentication & Registration: Users can register, log in, and manage their sessions using Firebase Authentication. Forms are created with react-hook-form and yup for validation.",
      "Teacher Cards: The Teachers page shows teacher profiles in card format with an option to load more. Users can favorite teachers with a “heart” button. Favorites are saved in Firebase or localStorage for authorized users.",
      "Interactivity: Favorites persist on page refresh. Users can remove favorites, access detailed teacher info, and book trial lessons through modal forms.",
      "Private Favorites Page: Authorized users can view their saved favorite teachers on a dedicated page.",
      "Color Palette Customization: Users can adjust the app's color scheme to their preference."
    ],
    tools: [
      "React",
      "React Router",
      "Firebase",
      "Material-UI",
      "Axios",
      "@emotion",
      "Formik",
      "Yup",
      "Vite",
      "Vs Code",
      "Git",
      "Postman",
      "Figma",
      "npm",
      "JSON",
      "UUID"

    ]
  },
        {

            name: "Camper Club",
          links: {
            live: "https://krislv4nk.github.io/CamperClub/",
            front: "https://github.com/Krislv4nk/CamperClub"
          },
          images: {
      first: camper2,
      second: camper1,
          },
          description: "Individual Project. Meet the React-powered camper rental website, complete with Redux integration! Immerse yourself in a seamless browsing experience as you explore our collection of available campers. From detailed descriptions to captivating visuals, each camper page offers a glimpse into your next adventure.Plus, with the ability to add your favorite finds to a personalized favorites list, planning your dream getaway has never been easier. Join us as we redefine the way adventurers connect with their  ideal camper experience. Welcome to a world of exploration, all at your fingertips."
          ,
          features: [
    "Browse Campers: Users can browse a list of available campers with images, prices, and other details.",
    "Camper Details: Each camper has a dedicated page with detailed information, including description, location, rating, reviews, and specifications.",
    "Add to Favorites: Users can add campers to their favorites list and remove them from it."
  ],
  tools: [
    "React",
    "Redux",
    "React Router",
    "Material-UI",
    "Axios",
    "Formik",
    "Yup",
    "Vite",
      "Vs Code",
    "Git",
    "Postman",
    "Figma",
    "npm",
    "JSON"
  ],
        },
        {
            name: "Water Tracker",
           links: {
            live: "https://andriipolishchuk28.github.io/water-tracker-frontend/",
             front: "https://github.com/AndriiPolishchuk28/water-tracker-frontend/",
            back: "https://github.com/SerhiiOberemchuk/watertracker-backand-codekartel/"
           },
          images: {
      first: water1,
      second: water2,
          },
          description: "Team Project. The web application is designed for tracking daily water intake and consists of the following functional components: Home Page: This is the landing page where users can get an overview of their water intake statistics, set goals, and access other features. Water Journal: This section allows users to log their daily water consumption. Users can input the amount of water consumed at different times throughout the day and view their hydration progress over time. Settings: The settings page enables users to customize their experience, such as setting reminders for drinking water, adjusting units of measurement, and managing account preferences.",
        
          features: [
      "User Authentication: Users can create accounts, log in, and manage their profiles.",
      "Water Intake Tracking: Users can log their daily water consumption, view history, and set goals.",
      "Statistics: The app provides visual representations of water intake over time, helping users understand their hydration habits.",
      "Reminders: Users can set reminders to drink water at specific intervals.",
      "Settings: Users can customize their experience, including units of measurement and notification preferences.",
      "Responsive Design: The app is designed to work on various devices, ensuring a seamless experience on desktops, tablets, and smartphones."
    ],
    tools: [
      "React",
      "Redux",
      "React Router",
      "Material-UI",
      "Axios",
      "Formik",
      "Yup",
      "Node.js",
      "Express.js",
      "Nodemon",
      "JWT",
      "Mongoose",
      "Create React App",
      "Vs Code",
      "Git",
      "MongoDB",
      "Postman",
      "Nodemailer",
      "i18next",
      "Figma",
      "Styled Components",
      "npm",
      "JSON",
      "Swagger"

    ],
    role: "On Front-End - Implemented logic for SignUp/SignIn pages (Redux, Axios, Formik, Yup), component MyDailyNorma with modal-window (MUI), component Background; on Back-End - Implemented logic for TodayWater component."
  },
        {
            name: "Phone Book",
          links: {
            live: "https://krislv4nk.github.io/goit-react-hw-08-phonebook/",
            front: "https://github.com/Krislv4nk/goit-react-hw-08-phonebook"
          }
          ,
          images: {
      first: phone1,
      second: phone2,
          },
          description: "Within this individual project, I implemented restricted routes accessible exclusively to registered users. When a user attempts to access these restricted routes without being logged into their account, they are automatically redirected to either the login or registration page. This feature ensures that only authorized users can navigate through the protected sections of the program, enhancing both security and user experience.The project enables users to store and manage contacts using the capabilities of the React framework and additional used for styling icons and interface components. This project is implemented following best practices in web development and includes testing to confirm its functionality",
          features: [
            "User Authentication: Users can create accounts, log in, and manage their profiles.",
            "Contact Management: Users can add, edit, and delete contacts from their phone book.",
            "Search Functionality: Users can search for contacts by name or other criteria.",
            "Responsive Design: The app is designed to work on various devices, ensuring a seamless experience."
          ],
          tools: [
    "React",
    "Redux",
    "Material-UI",
    "Axios",
    "Formik",
            "Yup",
    "Create React App",
      "Vs Code",
      "Git",
            "Postman",
            "npm",
            "JSON",
    "Nano ID",
  ]
  },
  {
    name: "Food Store",
    links: {
      live: "https://vuktorts.github.io/js-team-project-FoodStore/",
      front: "https://github.com/VuktorTS/js-team-project-FoodStore"
    },
          images: {
      first: store1,
            second: store2,
            third: store3,
    },
    description: "Team Project. The Food Store project is a collaborative effort that showcases the power of Vanilla JavaScript, API integration, and responsive design. As part of a team, I contributed to the development of two key sections on the main page: Popular Products and Discount Products. The website features a responsive layout, ensuring a seamless user experience across devices. Additionally, I implemented modal windows, contact forms, filter functionality, and pagination to enhance user interaction and streamline navigation.",
    features: [
      "Responsive Design: The website is designed to work seamlessly on various devices, ensuring a consistent user experience.",
      "Modal Windows: Implemented modal windows for displaying additional information and enhancing user interaction.",
      "Contact Forms: Integrated contact forms for user inquiries and feedback.",
      "Filter Functionality: Users can filter products based on various criteria to find what they need quickly.",
      "Pagination: Implemented pagination to manage large sets of data efficiently."
    ],
    tools: [
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
      "Parcel",
      "Vs Code",
      "Git",
      "Figma",
      "npm",
      "Postman",
      "JSON"
    ]
  },
    ]