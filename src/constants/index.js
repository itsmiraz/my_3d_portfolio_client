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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Mern Stack Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      id: 1,
      title: "Shop Now",
      image_url: "https://i.ibb.co/ykgTbkN/shop-now.jpg",
      live_web: "https://shop-now-8e94f.web.app/",
      git_hub: "https://github.com/itsmiraz/shop-now-client",
      server: "https://github.com/itsmiraz/shop-now-server",
      screenshots: [
        "https://i.ibb.co/qCC8Jzh/shop-now-1.png",
        "https://i.ibb.co/sjd1rS8/shop-now-8e94f-web-app-2.png",
        "https://i.ibb.co/CQ9HTLz/shop-now-8e94f-web-app-dashboard-adminpanel.png",
      ],
      tech: [
        "ReactJS",
        "React Query",
        "React Hook Form",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "Stripe",
        "Framer Motion",
        "React Router",
        "Tailwind",
        "Firebase",
        "JWT",
        "Daisy UI",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
        "Dedicated Admin Panel",
      ],
      details:
        "Shop Now is a highly customizable E-Commerce website that allows users to create and manage their online stores. The site has a wide variety of features and can be easily customized by the user. This is my Most Recent Project. Shop Now is an E-Commerce website. It took me 2 weeks to complete the full site. I am still upgrading this site day by day. It has different types of features such as this site being fully responsive. I use MongoDB for the database. JWT for securing the data. This site has a dedicated Admin panel and Control panel where the admin can easily control the whole website. The admin can post products, delete users, Make admin or moderator, etc. This site has many features but one of my favorite features is the User Experience. Because I took soo much time on the design and also the User Experience. I hope you like the website if you like the site feel free to send me a message on the contact form I will really appreciate that.",
      keyword: "shopNow,e-commerce website,recent project,react",
    },
    {
      id: 2,
      title: "News Media",
      image_url:
        "https://res.cloudinary.com/dicnezd6a/image/upload/v1679207747/Projects/news_media_iqvj1s.jpg",
      live_web: "https://news-media-70637.web.app/",
      git_hub: "https://github.com/itsmiraz/news_media_client_n",
      server: "https://github.com/itsmiraz/news_media_server",
      tech: [
        "ReactJS",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "React Router",
        "Tailwind",
        "Firebase",
        "Daisy UI",
      ],
      screenshots: [
        "https://i.ibb.co/wws6g1w/learning-hero-ass-web-app.png",
        "https://i.ibb.co/Ct49dDs/learning-hero-ass-web-app-1.png",
        "https://i.ibb.co/XzYmvsM/learning-hero-ass-web-app-blog.png",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
      ],
      details:
        "News Media is a News website where you can come and post new news or read news. You can Like or Dislike any post. This site is fully responsive for mobile devices.",
      keyword: "learingin Hero,recent project,react",
    },
    {
      id: 3,

      title: "Expense Tracker",
      image_url:
        "https://res.cloudinary.com/dicnezd6a/image/upload/v1679207748/Projects/expense_tracker_app_dmsvhe.jpg",
      live_web: "https://expensetracker-dce86.web.app/",
      git_hub: "https://github.com/itsmiraz/expense_tracker_client",
      server: "https://github.com/itsmiraz/web_dev_task1_server",
      tech: [
        "ReactJS",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "React Router",
        "Tailwind",
        "Firebase",
        "Daisy UI",
      ],
      screenshots: [
        "https://i.ibb.co/wws6g1w/learning-hero-ass-web-app.png",
        "https://i.ibb.co/Ct49dDs/learning-hero-ass-web-app-1.png",
        "https://i.ibb.co/XzYmvsM/learning-hero-ass-web-app-blog.png",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
      ],
      details:
        "Expense tracker is a web app where you can add a catagory of expense and get track of your expenses. Also it has a summury page. In this project I used firebase for user authentication system. Also this site is fully responsived",
      keyword: "learingin Hero,recent project,react",
    },
    {
      id: 4,

      title: "Task Manager",
      image_url:
        "https://res.cloudinary.com/dicnezd6a/image/upload/v1679207748/Projects/task-manager_vdb3rg.jpg",
      live_web: "https://task-manager-v2-81bdb.web.app/auht/login",
      git_hub: "https://github.com/itsmiraz/task_manager_v2_client",
      server: "https://github.com/itsmiraz/task_manager_v2_server",
      tech: [
        "ReactJS",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "React Router",
        "Tailwind",
        "Firebase",
        "Daisy UI",
      ],
      screenshots: [
        "https://i.ibb.co/wws6g1w/learning-hero-ass-web-app.png",
        "https://i.ibb.co/Ct49dDs/learning-hero-ass-web-app-1.png",
        "https://i.ibb.co/XzYmvsM/learning-hero-ass-web-app-blog.png",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
      ],
      details:
        "Task Manager is a web app where you can track your tasks. You can add a new task. Also after adding you can delete, edit the task. This web app is fully responsived for mobile devices. I used redux toolkit in this project.",
      keyword: "learingin Hero,recent project,react",
    },
    {
      id: 5,

      title: "Agustine",
      image_url: "https://i.ibb.co/JyQPYvc/agustine.jpg",
      live_web: "https://five-star-hotel-p.web.app/",
      git_hub: "https://github.com/itsmiraz/agustine-hotel-",
      server: "https://github.com/itsmiraz/agustine-hotel-server",
      screenshots: [
        "https://i.ibb.co/SDTQM03/localhost-3001-2.png",
        "https://i.ibb.co/0ftdHgR/five-star-hotel-p-web-app-dashboard-booking.png",
        "https://i.ibb.co/mSf7jjH/localhost-3001-3.png",
      ],
      tech: [
        "ReactJS",
        "React Query",
        "React Hook Form",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "Stripe",
        "Aso Animation",
        "React Router",
        "Tailwind",
        "Firebase",
        "JWT",
        "Daisy UI",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
        "Dedicated Admin Panel",
      ],
      details:
        "Agustine is a highly customizable E-Commerce website for five start hotel that allows users to create and manage their online business . The site has a wide variety of features and can be easily customized by the admin. This is my Most Recent Project . It took me 2 weeks to complete the full site. I am still upgrading this site day by day. It has different types of features such as this site being fully responsive. I use MongoDB for the database. JWT for securing the data. This site has a dedicated Admin panel and Control panel where the admin can easily control the whole website. The admin can post new rooms, delete users, Make admin or moderator, etc. This site has many features but one of my favorite features is the User Experience. Because I took soo much time on the design and also the User Experience. I hope you like the website if you like the site feel free to send me a message on the contact form I will really appreciate that.",
      keyword: "agustine,hotel website,recent project,react",
    },
    {
      id: 6,

      title: "Bike Hut",
      image_url: "https://i.ibb.co/Sdd50v8/bike-hut.jpg",
      live_web: "https://bikelagbe-99f21.web.app/",
      git_hub: "https://github.com/itsmiraz/bike-hut-client-12",
      server: "https://github.com/itsmiraz/bike-hut-server-12",
      screenshots: [
        "https://i.ibb.co/ChyfJhy/bikelagbe-99f21-web-app.png",
        "https://i.ibb.co/LxQBxKG/bikelagbe-99f21-web-app-dashboard-addaproduct-1.png",
        "https://i.ibb.co/Qkz6nyK/bikelagbe-99f21-web-app-dashboard-addaproduct-4.png",
      ],
      tech: [
        "ReactJS",
        "React Query",
        "React Hook Form",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "Stripe",
        "Aso Animation",
        "React Router",
        "Tailwind",
        "Firebase",
        "JWT",
        "Daisy UI",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
        "Dedicated Admin Panel",
      ],
      details:
        "Bike hut is a highly customizable E-Commerce website that allows users to sell and buy bikes. The site has a wide variety of features and can be easily customized by the user. This is my Most Recent Project. Bike is an E-Commerce website for bike resale and buying. It took me 1 weeks to complete the full site. I am still upgrading this site day by day. It has different types of features such as this site being fully responsive. I use MongoDB for the database. JWT for securing the data. This site has a dedicated Admin panel and Control panel where the admin can easily control the whole website. The admin can post products, delete users, Make admin or moderator, etc. This site has many features but one of my favorite features is the User Experience. Because I took soo much time on the design and also the User Experience. I hope you like the website if you like the site feel free to send me a message on the contact form I will really appreciate that.",
      keyword: "bikehut,resale website,recent project,react",
    },
    {
      id: 7,

      title: "Rober Json",
      image_url: "https://i.ibb.co/HT449c2/robertjson.jpg",
      live_web: "https://services-ass-11.web.app/",
      git_hub: "https://github.com/itsmiraz/robert-json-client-11",
      server: "https://github.com/itsmiraz/robert-json-server-11",
      screenshots: [
        "https://i.ibb.co/YQ8nKTq/localhost-3000.png",
        "https://i.ibb.co/tmBFYrS/localhost-3000-1.png",
        "https://i.ibb.co/wQRTQw8/services-ass-11-web-app-service-636c81eb3e97d5d7a432e5f9.png",
      ],
      tech: [
        "ReactJS",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "Aso Animation",
        "React Router",
        "Tailwind",
        "Firebase",
        "JWT",
        "Daisy UI",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
        "Dedicated Admin Panel",
      ],
      details:
        "Robert Json is a site for a Photographer who can show case his services and user can book them . The site has a wide variety of features and can be easily customized by the admin . It took me 1 weeks to complete the full site. I am still upgrading this site day by day. It has different types of features such as this site being fully responsive. I use MongoDB for the database. JWT for securing the data. This site has a dedicated Admin panel and Control panel where the admin can easily control the whole website. The admin can post new rooms, delete users, Make admin or moderator, etc. This site has many features but one of my favorite features is the User Experience. Because I took soo much time on the design and also the User Experience. I hope you like the website if you like the site feel free to send me a message on the contact form I will really appreciate that.",
      keyword: "robertJson,resale website,recent project,react",
    },
    {
      id: 8,

      title: "Doctors Portal",
      image_url: "https://i.ibb.co/qW42CCQ/doctors-portal.jpg",
      live_web: "https://doctors-portal-21807.web.app/",
      git_hub: "https://github.com/itsmiraz/doctors-portal",
      server: "https://github.com/itsmiraz/doctors-portal-server",
      screenshots: [
        "https://i.ibb.co/9THxfQZ/doctors-portal-21807-web-app.png",
        "https://i.ibb.co/s14qByR/doctors-portal-21807-web-app-1.png",
        "https://i.ibb.co/BwnJg5B/doctors-portal-21807-web-app-dashboard.png",
      ],
      tech: [
        "ReactJS",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "Aso Animation",
        "React Router",
        "Tailwind",
        "Firebase",
        "JWT",
        "Daisy UI",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
        "Dedicated Admin Panel",
      ],
      details:
        "Doctors Portal is a site for a Doctor where anyone can take appointment and the patient take appointment .The admin can add doctors and do so much.  The site has a wide variety of features and can be easily customized by the admin . It took me 1 weeks to complete the full site. I am still upgrading this site day by day. It has different types of features such as this site being fully responsive. I use MongoDB for the database. JWT for securing the data. This site has a dedicated Admin panel and Control panel where the admin can easily control the whole website. The admin can post new rooms, delete users, Make admin or moderator, etc. This site has many features but one of my favorite features is the User Experience. Because I took soo much time on the design and also the User Experience. I hope you like the website if you like the site feel free to send me a message on the contact form I will really appreciate that.",
      keyword: "doctor portal,recent project,react",
    },
    {
      id: 9,

      title: "Learning Hero",
      image_url: "https://i.ibb.co/2tHHmQ2/learning-hero.jpg",
      live_web: "https://learning-hero-ass.web.app/",
      git_hub: "https://github.com/itsmiraz/learning-hero-client-10",
      server: "https://github.com/itsmiraz/learning-hero-server-10",
      tech: [
        "ReactJS",
        "Mongo Db",
        "Node JS",
        "Express JS",
        "React Router",
        "Tailwind",
        "Firebase",
        "Daisy UI",
      ],
      screenshots: [
        "https://i.ibb.co/wws6g1w/learning-hero-ass-web-app.png",
        "https://i.ibb.co/Ct49dDs/learning-hero-ass-web-app-1.png",
        "https://i.ibb.co/XzYmvsM/learning-hero-ass-web-app-blog.png",
      ],
      features: [
        "Fully Responsive for Mobile Devices",
        "Secured By JWT ",
        " Stripe Payment System",
        "Modern Design",
      ],
      details:
        "Learning Hero is a highly customizable E-Commerce website for E-learning. The site has a wide variety of features and can be easily customized by the admin. This is my Most Recent Project . It took me 1 weeks to complete the full site. I am still upgrading this site day by day. It has different types of features such as this site being fully responsive. I use MongoDB for the database. JWT for securing the data. This site has a dedicated Admin panel and Control panel where the admin can easily control the whole website. The admin can post new rooms, delete users, Make admin or moderator, etc. This site has many features but one of my favorite features is the User Experience. Because I took soo much time on the design and also the User Experience. I hope you like the website if you like the site feel free to send me a message on the contact form I will really appreciate that.",
      keyword: "learingin Hero,recent project,react",
    },
  
];

export { services, technologies, experiences, testimonials, projects };
