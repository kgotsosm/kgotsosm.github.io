import dataquest from "./assets/projects/dataquest.jpg";
import webscraper from "./assets/projects/webscraper.png";
import etl from './assets/projects/etl.png'

const projects = [
  {
    title: "Docker ETL",
    description: "ETL process in docker moving data to PostgreSQL",
    image: etl,
    github: "https://github.com/kgotsosm/docker-postgres-etl",
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


