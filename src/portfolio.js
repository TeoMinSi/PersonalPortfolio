/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Minsi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Teo Min Si's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Teo Min Si",
  logo_name: "minsi",
  subTitle:
    "A passionate individual in data analytics, visualisation and UI/UX.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://www.linkedin.com/in/teo-min-si-378a51174/",
  githubProfile: "https://github.com/TeoMinSi",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/TeoMinSi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/teo-min-si-378a51174/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:teominsi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Wireframing & Prototyping: Designing attractive user interface for B2B web applications",
        "⚡ User Research: Conducting usability tests to gather feedback on designs and identify areas of improment",
        "⚡ UX Artefacts: Creating user personas and user journeys based on research findings to represent key user segments",
      ],
      softwareSkills: [
        {
          skillName: "Sketch",
          fontAwesomeClassname: "logos:sketch",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Data Visualisations",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Data Storytelling - Creating a narrative around the data to tell a compelling and coherent story.",
        "⚡ Ensuring that the visualisations are easy to understand, intuitive and provide value.",
        "⚡ Deep experience with a range of different data visualisation tools.",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Looker",
          fontAwesomeClassname: "logos:looker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Highcharts.js",
          fontAwesomeClassname: "logos:highcharts",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience in using Python for data science and machine learning",
        "⚡ Building responsive websites using React.",
        "⚡ Building sites for data visusalisations with Streamlit.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "devicon:streamlit",
          style: {
            color: "#663399",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  title: "Education",
  description:
    "Education background in Information Systems with a specialisation in Financial Technology and Business Analytics.",
  degrees: [
    {
      title: "Singapore Management University",
      subtitle: "Bachelors of Science (Information Technology)",
      logo_path: "SMU_logo.png",
      alt_name: "SMU",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic engineering concepts around Databases, Data Structures and algorithms, etc. ",
        "⚡ My first major is in Financial Technology (Fintech), covering the foundation of banking enterprise architecture and domain areas like retail/corporate banking, digital payments etc.",
        "⚡ My second major is in Business Analaytics, covering the study of data analytics and concepts from AI and Machine Learning.",
        "⚡ Completed my final year project building an application for Citibank for personalised customer segmentation.",
      ],
      website_link: "https://www.smu.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    // kept empty
  ],
};

// Experience Page
const experience = {
  title: "Experience & Education",
  subtitle: "Work",
  description:
    "I have worked on a range of products, from B2B, Consumer and Developer products involving different roles and skillsets. I have also worked cross-functionally with Product Managers, Data Scientists, Engineers and Developers.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Specialist, Product Experience Design",
          company: "Mastercard, Data & Services",
          company_url: "https://www.linkedin.com/company/mastercard/about/",
          logo_path: "Mastercard-logo.svg",
          duration: "Jul 2021 - Mar 2024",
          location: "Singapore",
          description:
            "I worked on a range of new data products of varying roles, focusing on design and prototyping, UX engineering, and research. The projects range from B2B products, API products to white-label consumer products. As a UX designer, I was also deeply involved in ensuring the optimal user experience of the product, even for products with no interface. I was also an active contributor to internal tools and efficiencies, serving as a Subject Matter Expert on certain topics like UX metrics tools.",
          color: "#0879bf",
        },
        {
          title: "Software Developer Intern",
          company: "ST Engineering (Infosoft)",
          company_url: "https://www.linkedin.com/company/st-engineering/about",
          logo_path: "st-engineering-logo.svg",
          duration: "May 2019 - Aug 2019",
          location: "Singapore",
          description:
            "I worked with the client and vendor to streamline the ambulance triage process through building a user-centric UI design and integrated Microsoft Power BI dashboards for location-related insights within the application.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-pic.svg",
    description:
      "Feel free to connect with me either through email or LinkedIn.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
