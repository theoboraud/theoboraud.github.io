/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Theophile's Portfolio",
  description:
    "Passionate Game Dev student looking to play his part in the video game industry.",
  og: {
    title: "Theophile Boraud Portfolio",
    type: "website",
    url: "http://theophileboraud.com/",
  },
};

//Home Page
const greeting = {
  title: "Theophile Boraud",
  logo_name: "TheophileBoraud",
  nickname: "",
  subTitle:
    "Passionate Game Dev student looking to play his part in the video game industry.",
  resumeLink:
    "https://drive.google.com/file/d/1XXEpTWITnaKaRguEbOXv61sGJRlg5DYc/view?usp=sharing",
  portfolio_repository: "https://github.com/theophileboraud/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/theoboraud",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/theophile-boraud-976732133/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Outlook",
    link: "mailto:theoboraud@outlook.com",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#007CBE", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Programming",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Various programming languages",
        "⚡ Experience in Machine Learning",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "transparent",
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
              backgroundColor: "transparent",
              color: "#00599C",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
              backgroundColor: "transparent",
              color: "#239120",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
              backgroundColor: "transparent",
              color: "#4479A1",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
              backgroundColor: "transparent",
              color: "#E34F26",
          },
        },
        {
          skillName: "Haskell",
          fontAwesomeClassname: "simple-icons:haskell",
          style: {
              backgroundColor: "transparent",
              color: "#5D4F85",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "logos-unity",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:github",
          style: {
              backgroundColor: "transparent",
              color: "#000000",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
      {
        title: "ICAN Design",
        subtitle: "Master of Game Design",
        logo_path: "ican_logo.png",
        duration: "2020 - 2022",
        descriptions: [
          "⚡ Learning a wide array of skills to work in the video game industry: Game Design, Sound Design, Game Studies, UI/UX, Programming, etc...",
          "⚡ Working on various projects to develop those skills and put them into practice.",
        ],
        website_link: "https://www.ican-design.fr/",
      },
      {
        title: "The University of Warwick",
        subtitle: "BSc in Computer Science",
        logo_path: "wwk_logo.png",
        duration: "2015 - 2019",
        descriptions: [
          "⚡ Learned various basic software engineering subjects like Data Science, Algorithms, OS, AI, Security, etc...",
          "⚡ Developed professional skills in english during team projects as well as extracurricular activities.",
        ],
        website_link: "https://warwick.ac.uk/",
      },
    ],
};

const projects = {
  projects: [
      {
        title: "My Ears, Your Eyes",
        subtitle: "Global Game Jam 2021",
        logo_path: "meye_logo.png",
        duration: "January 2021",
        descriptions: [
          "⚡ Design of a cooperative asymetric game on the theme Lost and Found in under 48 hours.",
          "⚡ In charge of programming and animations throughout the project.",
        ],
        website_link: "https://globalgamejam.org/2021/games/your-eyes-my-ears-maze-game-coop-9",
      },
      {
        title: "[Re] A Neurodynamical Model for Working Memory",
        subtitle: "ReScience C",
        logo_path: "rescience_logo.png",
        duration: "December 2019",
        descriptions: [
          "⚡ Replication of a Recurrent Neural Network of the Echo State Network type for the purpose of a minimalistic Working Memory model.",
          "⚡ Implementation of the replication in Python, and writing of the article.",
          "⚡ Article in review, to be published in 2021.",
        ],
        website_link: "https://github.com/theoboraud/ESN",
      },
    ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked as an intern in various subjects, from Machine Learning to Game Development. I am currently working on a freelance project for CASDEN Bank as Lead Game Developer for the purpose of a school project.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Freelance Lead Game Developer",
          company: "CASDEN",
          company_url: "https://www.casden.fr/",
          logo_path: "casden_logo.png",
          duration: "January 2021 - PRESENT",
          location: "Paris, FRANCE",
          description:
            "Lead Developer on a serious game project as part of a freelance contract between CASDEN Bank and ICAN School of Design. In charge of project management and implementation on Unity.",
          color: "#0879bf",
        },
        {
          title: "Personal Teacher",
          company: "Acadomia",
          company_url: "https://www.acadomia.fr/",
          logo_path: "acadomia_logo.jpg",
          duration: "January 2020 - July 2020",
          location: "Bordeaux, FRANCE",
          description:
            "Personal teacher of mathematics for students from Middle-School to High-School.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Developer Intern",
          company: "INRIA",
          company_url: "https://inria.fr/fr",
          logo_path: "inria_logo.jpg",
          duration: "September 2019 - December 2019",
          location: "Bordeaux, FRANCE",
          description:
            "Replication of a working memory model using a Recurrent Neural Network of the Echo State Network type in Python (publication in process of review).",
          color: "#0071C5",
        },
        {
          title: "Game Developer Intern",
          company: "CNRS",
          company_url:
            "https://www.cnrs.fr/fr/page-daccueil",
          logo_path: "cnrs_logo.jpg",
          duration: "July 2017 - August 2017",
          location: "Bordeaux, FRANCE",
          description:
            "In charge of design and implementation in Python and C# with Unity of a graphic interface for an experimental paradigm (Duopoly Hotelling's Paradigm) dedicated to monetary study behavior in human subjects.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of my acquired knowledge during my studies and work experiences.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "theophile_drawing.jpg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  projects,
  experience,
  projectsHeader,
  contactPageData,
};
