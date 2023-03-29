export default {
  name: "Andrés Drimer",
  workTitle: "Front-end Web Developer",
  moto: "I love building and designing responsive websites to connect people to people.",
  logo: "/assets/logoAD2023-4.png",
  sections: ["home", "about", "skills", "projects", "contact"],
  aboutPhoto: "/assets/portrait2.jpeg",
  status:
    "I´m available for freelance or full-time positions. Contact me and let´s talk",
  contact: 
    {
      linkedin: "https://www.linkedin.com/in/andres-drimer/",
      github: "https://github.com/AndresDrimer/",
      email: "andresdrimer@hotmail.com",
      whatsapp: "+549116490517",
    },
  resume:
    "https://drive.google.com/file/d/1qK_kooLAZU9H1oNtKwB-rCDA7kbOhgl8/view",
  about: {
    subtitle: "Everybody´s path is unique. This is mine...",
    paragraph1:
      "I started working at Cafe de las Ciudades, a book publisher specialized in Urbanism, in 2019. I was in charge of comercialization, a role which included dealing with customers, suppliers and book shops. I suggested opening an ecommerce site, which I created with a CMS (TiendaNube). I also ran a strong ad-campaign on social media. They were thrilled to see the results (and their invoicing grew sevenfold!), so then I was in charge of re-designing the website for their monthly newsletter, on its 20th anniversary. I managed to do that with another CMS (Wordpress). I got more and more deeply involved in programing websites and suddenly I realized that I had encountered my new passion. ",
    paragraph2:
      "I got really focused on learning everything about web developing while working on a lot of different projects for people around (and later for unkowned clients in Feverr). The word kept running mouth to mouth and I ended up building and designing a lot of projects to reach different expectations. Now I have a strong desire to be involved in a group of people to participate in building bigger things, keep the level of complexity going up and to continue learning and growing as a developer.",
    paragraph3:
      "I think I can add a really good base on soft skills, I´m used to working with people from different cultures and can communicate clearly in English, Spanish and Portuguese. I´ve worked in the music industry, in the production field, so I´m used to dealing with deadlines, group leadership and tricky commercial affaires.",
  },
  skills: [
    {
      id: 0,
      tech: "next js",
      version: "13",
      icon: "/assets/skills/nextjs.png",
    },
    {
      id: 1,
      tech: "react",
      version: "18",
      icon: "/assets/skills/react.png",
    },
    {
      id: 2,
      tech: "javascript",
      version: "ECMAScript 2020",
      icon: "/assets/skills/javascript.png",
    },
    {
      id: 3,
      tech: "html",
      version: "5",
      icon: "/assets/skills/html.png",
    },
    {
      id: 4,
      tech: "css",
      version: "3",
      icon: "/assets/skills/css.png",
    },
    {
      id: 5,
      tech: "tailwind css",
      version: "3",
      icon: "/assets/skills/tailwind.png",
    },
    {
      id: 6,
      tech: "bootstrap",
      version: "5",
      icon: "/assets/skills/bootstrap.png",
    },
    {
      id: 7,
      tech: "git",
      icon: "/assets/skills/git.png",
    },
    {
      id: 8,
      tech: "github",
      icon: "/assets/skills/github.png",
    },
    {
      id: 9,
      tech: "firebase",
      icon: "/assets/skills/firebase.png",
    },
    {
      id: 10,
      tech: "tiendanube (CMS)",
      icon: "/assets/skills/tiendanube.png",
    },
    {
      id: 11,
      tech: "figma",
      icon: "/assets/skills/figma.png",
    },
    {
      id: 12,
      tech: "photoshop",
      icon: "/assets/skills/photoshop.png",
    },
    {
      id: 13,
      tech: "premiere",
      icon: "/assets/skills/premiere.png",
    },
  ],
  projects: [
    {
      id: 0,
      imageBck: "/assets/projects/pablo/pablo1.png",
      imageInside: "/assets/projects/pablo/pablo2.png",
      title: "Filmaker website",
      tech: "REACT",
      techDetail: ["React", "React-router", "EmailJS", "Javascript", "CSS", "HTML"],
      anchor: "filmakerwebsite",
      externalUrl: "https://darling-manatee-463a01.netlify.app/",
      gitHubUrl: "https://github.com/AndresDrimer/pablocoronel-react",
      description:
        "This was a really fun project to build. I decided to use a video background as main object because it´s a website about a video maker. It includes two different layouts, one for main section and the other one for showing artist´s works and projects, I choosed react-router to manage them. I focused on re-usability of components, making it really easy to update. I used EmailJS to resolve sendings from Contact section",
    },
    {
      id: 1,
      imageBck: "/assets/projects/tenzies/tenzies1.png",
      imageInside: "/assets/projects/tenzies/tenzies2.png",
      title: "Tenzies game",
      tech: "REACT",
      techDetail: ["React", "Javascript", "CSS", "HTML"],
      anchor: "tenziesgame",
      externalUrl: "https://tenziesgameforcataandpabli.netlify.app/",
      gitHubUrl: "https://github.com/AndresDrimer/tenzies",
      description:
        "Classic tenzies game. It provides language selection toggling from English to Spanish. I think it´s funny to play and I love Confetti´s winning effect :)",
    },
    {
      id: 2,
      imageBck: "/assets/projects/max/max1.png",
      imageInside: "/assets/projects/max/max2.png",
      title: "Artist Website",
      tech: "JAVASCRIPT",
      techDetail: ["Javascript", "CSS", "HTML", "CMS (Tiendanube)"],
      anchor: "artistwebsite",
      externalUrl: "https://maxaguirre.com.ar/",
      gitHubUrl: "https://github.com/AndresDrimer/tenzies",
      description:
        "Personal website for artist Max Aguirre. Written in vanilla style. It has a beautifull artwork by the artist. It´s integrated with anothe site I build for same client, a CMS e-commerce (TiendaNube). My goal was to have a neat continuation between both sites and to capture artist´s own style.",
    },
    {
      id: 3,
      imageBck: "/assets/projects/cdlc/cdlc1.png",
      imageInside: "/assets/projects/cdlc/cdlc2.png",
      title: "Blog & E-commerce",
      tech: "CMS",
      techDetail: ["FIGMA", "CMS (Tiendanube)", "CMS (Wordpress)"],
      anchor: "urbanism",
      externalUrl: "https://cafedelasciudades.com.ar/",
      gitHubUrl: "https://cafedelasciudades.mitienda.com",
      description:
        "It was a quite a beautifull challenge designing for Cafe de las Ciudades. I started with their CMS e-commerce site and then I jumped into re-designing their digital maganize on their 20th anniversary. They have a really strong community so it´s was important to maintain previous line aswell as injecting new features and a modern design. I´ve received the most beautifull feedback from long time users so I´m quite happy with the result.",
    },
  ],
};
