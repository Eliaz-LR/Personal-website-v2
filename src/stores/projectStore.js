import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        name: "Lyrical Bomb",
        image: new URL("../assets/proj_pic/LyricalBomb.png", import.meta.url),
        description:
          "A lobby based multiplayer game where players have to guess songs that contain a given word in their lyrics. It utilizes Socket.io and the Genius API.",
        technologies: [
          "React",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "Firebase",
          "Node.js",
          "Express.js",
          "Fly.io",
        ],
        link: "https://lyrical-bomb.eliaz-lr.dev/",
        featured: true,
      },
      {
        name: "This portfolio website",
        image: new URL("../assets/proj_pic/Website2.png", import.meta.url).href,
        description:
          "This is my second portfolio website. I wanted to make it more user friendly.",
        technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
        link: "https://eliaz-lr.dev/",
        featured: true,
      },
      {
        name: "3D Minesweeper",
        image: new URL("../assets/proj_pic/3dMinesweeper.png", import.meta.url)
          .href,
        description:
          "A minesweeper game in 3D and first person view with an online leaderboard.",
        technologies: ["Unity", "C#", "Firebase"],
        link: "https://play.unity.com/mg/other/webgl-build-482",
        featured: true,
      },
      {
        name: "My old portfolio website",
        image: new URL("../assets/proj_pic/OldWebsite.png", import.meta.url)
          .href,
        description:
          "This was my first project with Javascript. It emulates the feel of a command line interface.",
        technologies: ["Unity", "C#", "Firebase"],
        link: "https://old.eliaz-lr.dev/",
        featured: true,
      },
      {
        name: "Golf Game",
        image: new URL("../assets/proj_pic/GolfGame.png", import.meta.url).href,
        description: "A Golf game made in Unity.",
        technologies: ["Unity", "C#", "Firebase"],
        link: "https://github.com/Eliaz-LR/GolfGame",
        featured: true,
      },
    ],
  }),
  getters: {
    getProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getOtherProjects: (state) =>
      state.projects.filter((project) => !project.featured),
  },
});
