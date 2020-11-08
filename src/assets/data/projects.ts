import IProject from "../interfaces/IProject";
import { v4 as uuidv4 } from 'uuid';

const Projects: IProject[] = [
  {
    id: uuidv4(),
    imageURL: "./images/Ascent-OpenGraph.jpg",
    name: "Ascent Sobriety Tool",
    description: "Ascent Sobriety Tool helps members track their daily mood & thoughts as well as various lengths of sobriety.",
    deployed: "https://ascent-sobriety.herokuapp.com/",
    github: "https://github.com/keiththarp/Ascent-Sobriety-Tool"
  },
  {
    id: uuidv4(),
    imageURL: "./images/og-quarantitles.jpg",
    name: "Qrar'N'Titles",
    description: "Designed to help users keep track of movies, tv shows, and books they've consumed during COVID-19.",
    deployed: "https://keiththarp.github.io/Quar-N-Titles/",
    github: "https://keiththarp.github.io/Quar-N-Titles/"
  },
  {
    id: uuidv4(),
    imageURL: "./images/day-by-day-og.png",
    name: "Day-By-Day",
    description: "A lesson in presence, a day planner for the current day. No planning for tomorrow or wasting time on the past.",
    deployed: "https://keiththarp.github.io/day-by-day-planner/",
    github: "https://github.com/keiththarp/day-by-day-planner",
  },
  {
    id: uuidv4(),
    imageURL: "./images/Burgers-OpenGraph.jpg",
    name: "Burger Bonanza",
    description: "Track your veggie burger desires and accomplishments in a SQL database with Burger Bonanza!",
    deployed: "https://plant-based-burger-bonanza.herokuapp.com/",
    github: "https://github.com/keiththarp/plant-based-burger-bonanza",
  },
  {
    id: uuidv4(),
    imageURL: "./images/SpeedQuiz-OpenGraph.jpg",
    name: "SpeedQuiz",
    description: "Test your basic JavaScript knowledge with SpeedQuiz, the stylish, responsive, fun for the whole family coding quiz!",
    deployed: "https://keiththarp.github.io/javascript-speedquiz/",
    github: "https://github.com/keiththarp/javascript-speedquiz",
  },
  {
    id: uuidv4(),
    imageURL: "./images/portfolio-og.jpg",
    name: "React Portfolio",
    description: "This portfolio site you're viewing now was created with React and was my third project using TypeScript.",
    deployed: "https://keiththarp.github.io/Portfolio-Reaction/",
    github: "https://github.com/keiththarp/Portfolio-Reaction",
  }
];

export default Projects;