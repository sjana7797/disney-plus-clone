import disneyImage from "../assets/images/disnep.png";
import marvelImage from "../assets/images/marvel.png";
import nationalGeographicImage from "../assets/images/national-geographic.png";
import pixarImage from "../assets/images/pixar.png";
import starWarsImage from "../assets/images/starwars.png";

const disney = {
  title: "Disney+",
  img: disneyImage,
  video: "/videos/disney.mp4",
};
const marvel = {
  title: "marvel",
  img: marvelImage,
  video: "/videos/marvel.mp4",
};

const national_geographic = {
  title: "national geographic",
  img: nationalGeographicImage,
  video: "/videos/national-geographic.mp4",
};

const pixar = {
  title: "pixar",
  img: pixarImage,
  video: "/videos/pixar.mp4",
};
const star_wars = {
  title: "star wars",
  img: starWarsImage,
  video: "/videos/star-wars.mp4",
};

export const brands = [disney, marvel, national_geographic, pixar, star_wars];
