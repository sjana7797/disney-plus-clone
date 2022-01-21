import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";

import { FilmIcon } from "@heroicons/react/outline";

const home = {
  title: "home",
  Icon: HomeIcon,
  link: "/",
};

const search = {
  title: "search",
  Icon: SearchIcon,
  link: "/",
};

const watchlist = {
  title: "watchlist",
  Icon: PlusIcon,
  link: "/",
};
const originals = {
  title: "originals",
  Icon: StarIcon,
  link: "/",
};

export const headerNavItems = [home, search, watchlist, originals];
