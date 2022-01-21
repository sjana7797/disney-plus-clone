import Image from "next/image";
import Link from "next/link";
import { headerNavItems } from "../../../utils/headerNavItems";
import seriesIcon from "../../../assets/images/series-icon.svg";
import moviesIcon from "../../../assets/images/movie-icon.svg";

function Nav() {
  return (
    <nav className="hidden ml-10 md:flex items-center space-x-6">
      {headerNavItems.map((item, index) => (
        <Link href={item.link} passHref={true} key={index}>
          <div className="flex items-center space-x-2 cursor-pointer group">
            <item.Icon className="h-4" />
            <span className="relative uppercase text-sm font-medium before:bg-neutral-100 before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              {item.title}
            </span>
          </div>
        </Link>
      ))}
      <Link href={"/movies"} passHref={true}>
        <div className="flex items-center space-x-2 cursor-pointer group">
          <Image width="20" height="20" src={moviesIcon} alt="movies" />
          <span className="relative uppercase text-sm font-medium before:bg-neutral-100 before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            movies
          </span>
        </div>
      </Link>
      <Link href={"/movies"} passHref={true}>
        <div className="flex items-center space-x-2 cursor-pointer group">
          <Image width="20" height="20" src={seriesIcon} alt="movies" />
          <span className="relative uppercase text-sm font-medium before:bg-neutral-100 before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            tv series
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
