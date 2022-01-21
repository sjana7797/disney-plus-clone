import { PlayIcon, PlusIcon, UserGroupIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { BASE_URL } from "../../utils/constantString";
import { Content } from "../../utils/interfaces";

function CollectionCard({ content }: { content: Content }) {
  const name = content.title || content.original_name;
  return (
    <section className="relative z-50">
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          src={
            `${BASE_URL}${content.backdrop_path || content.poster_path}` ||
            `${BASE_URL}${content.poster_path}`
          }
          layout="fill"
          objectFit="cover"
          alt={name}
          className="opacity-40"
        />
      </div>
      <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
        <h1 className="text-3xl sm:text-4xl font-bold md:text-5xl">{name}</h1>
        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="text-xs md:text-base bg-slate-100 text-slate-900 flex items-center justify-center py-2.5 px-6 rounded hover:bg-slate-400 border border-slate-100 transition-all duration-300 hover:border-slate-400">
            <PlayIcon className="w-6 h-6 md:h-8 md:w-8" />
            <span className="font-medium uppercase tracking-wide">Play</span>
          </button>
          <button className="text-xs md:text-base bg-slate-800 bg-opacity-30 text-slate-100 flex items-center justify-center py-2.5 px-6 rounded hover:bg-slate-400 border border-slate-100 hover:border-slate-400 hover:text-black transition-all duration-300 ">
            <PlayIcon className="w-6 h-6 md:h-8 md:w-8" />
            <span className="font-medium uppercase tracking-wide">Trailer</span>
          </button>
          <div className="w-12 h-12 p-1 bg-slate-700 flex justify-center items-center rounded-full border border-slate-100">
            <PlusIcon className="w-8" />
          </div>
          <div className="w-12 h-12 p-1 bg-slate-700 flex justify-center items-center rounded-full border border-slate-100">
            <UserGroupIcon className="w-7" />
          </div>
        </div>
        <p>
          {content.release_date || content.first_air_date} &#9679;{" "}
          {Math.floor((content?.runtime as number) / 60)}h{" "}
          {(content.runtime as number) % 60}m &#9679;{" "}
          {content.genres?.map((genre) => genre.name + " ")}
        </p>
        <p className="text-lg sm:text-xl">{content.overview}</p>
      </div>
    </section>
  );
}

export default CollectionCard;
