
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dmytro Lee",
  title: "Hi all, I'm Dmytro",
  subTitle: emoji("🚀 Software Engineer with 9 plus years of experience in requirement gathering, designing, developing, implementing, debugging, testing & deployment of Android/iOS applications, Java applications, and Web applications. Extensive experience in developing and managing Enterprise Segment as well as Public Segment Projects. Self-motivated and fast learner developer looking for position for another career."),
  resumeLink: "https://drive.google.com/file/d/1aVQYOzOEmRBZ5yIIjD7XR5qMotYsWmhf/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/darkhorse-coder",
  linkedin: "https://www.linkedin.com/in/dmytro-lee",
  gmail: "dmytrolee@yandex.ru",
  stackoverflow: "https://stackoverflow.com/users/8645651/darkhorse"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly performance and interactive ios/android applications such as Lifestyle, Social Media, Utility, Games/Entertainment, Productivity, News/Information Outlets"),
    emoji("⚡ Resonsive Web site & Progressive Web applications ( PWA ) in normal and SPA Stacks by ME(A,R,V)N such as social media system, ecommerce system, real estate system, rental system etc."),
    emoji("⚡ Integration of third party services such as Firebase, AWS, Azure, Twilio, Socket.io, Stripe, Paypal etc.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "slack",
      fontAwesomeClassname: "fab fa-slack"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Beijing University of Technology",
      logo: require("./assets/images/universityLogo.png"),
      subHeader: "Bachelor's degree of Software Engineering",
      duration: "2005 - 2010",
      desc: "Computer and Information Sciences and Support Services",
      descBullets: []
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end/UI",  //Insert stack or technology you have experience in
      progressPercentage: "98%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile(iOS, Android)",
      progressPercentage: "90%"
    },
    {
      Stack: "Back-end",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Ordering Co Ltd",
      companylogo: require("./assets/images/orderingLogo.png"),
      date: "2016 – 2020",
      desc: "Development and improvement for Multipurpose Orering System",
      descBullets: [
        "Replaced and upgraded with RestAPI / NodeJS, ExpressJS, MongoDB, Postgresql, Javascript for ordering/delivery/business apps",
        "Development flexible and easily renewable Front-end components, multi & single vendor ordering web site and admin dashboard for business(restaurant, store, laundary store etc.)",
        "Integrated Google maps and services, firebase, push notification, payment gateway such as Strip, Paypal, Openpay, Interswitch etc"
      ]
    },
    {
      role: "iOS Developer",
      company: "Ordering Co Ltd",
      companylogo: require("./assets/images/orderingLogo.png"),
      date: "2014 – 2016",
      desc: "Develp and improvement of Ordering / Delivery / Business manager apps",
      descBullets: [
        "Developed and improved Multipurpose Native and Hybrid Ordering apps",
        "Developed Delivery/Driver apps can compatible with Existing Ordering System",
        "Developed Orders and Drivers managing applications for business managers"
      ]
    },
    {
      role: "Mobile Application Developer",
      company: "Beijing Lingtu Software Technology Co Ltd",
      companylogo: require("./assets/images/lingtuLogo.png"),
      date: "2011 – 2014",
      desc: "Readily embracing cutting-edge technology, I have gained an in-depth understanding of the main mobile platforms and recognize the subtle differences between each. Having helped develop a series of commercially successful apps on iOS, Android.",
      descBullets: [
        "Taxi/location tracking apps",
        "Image processing/sharing apps",
        "Coupon management app, Car selling app",
        "Weixin Mini app/games",
        "Utility apps such as Calendar, Calculator"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "darkhorse-coder", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
