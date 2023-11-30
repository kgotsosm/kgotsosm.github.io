import bitnine from "./assets/projects/bitnine.png";
import bookconnect from "./assets/projects/bookconnect.png";
import lyft from "./assets/projects/lyft.webp";
import dataquest from "./assets/projects/dataquest.jpg";
import podcastr from "./assets/projects/podcastr.jpeg";
import webscraper from "./assets/projects/webscraper.png";

const projects = [
  {
    title: "Bitnine",
    description: "Clone of bitnine.net with added login screen",
    image: bitnine,
    url: "https://bitnine.pages.dev",
    github: "https://github.com/kgotsosm/bitnine-local",
  },
  {
    title: "BookConnect",
    description: "A book finding platform for readers",
    image: bookconnect,
    url: "https://bookconnect.netlify.app",
    github: "https://github.com/kgotsosm/book-connect",
  },
  {
    title: "Podcastr",
    description: "Podcast platform allowing users to share favourites",
    image: podcastr,
    url: "https://podcastr.pages.dev",
    github: "https://github.com/kgotsosm/podcastr",
  },
  {
    title: "Lyft Backend Engineering",
    description: "Virtual internship refactoring backend code",
    image: lyft,
    github:
      "https://github.com/kgotsosm/Lyft-Backend-Engineering-Virtual-Experience",
  },
  {
    title: "Dataquest",
    description: "Jupyter Notebooks containing data science projects",
    image: dataquest,
    github: "https://github.com/kgotsosm/Dataquest",
  },
  {
    title: "Web Scraper",
    description:
      "A web scraper that scrapes articles from nature.com & saves them locally",
    image: webscraper,
    github: "https://github.com/kgotsosm/nature-web-scraper",
  },
];

export default projects;
