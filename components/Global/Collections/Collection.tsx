import Image from "next/image";
import { Content } from "../../../utils/interfaces";
import { BASE_URL } from "../../../utils/constantString";
import { useRouter } from "next/router";

function Collections({
  collections,
  title,
}: {
  collections: Content[];
  title: string;
}) {
  const router = useRouter();
  return (
    <section className="py-5 px-8 max-w-[1400px] mx-auto">
      <h2 className="text-xl capitalize">{title}</h2>
      <div className="mt-3 flex overflow-x-scroll space-x-6 py-4 px-3 scrollbar-hide">
        {collections.map((collection) => (
          <div
            className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-slate-100 border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 relative group"
            key={collection.id}
            onClick={() =>
              router.push(`/content/${collection.media_type}/${collection.id}`)
            }
          >
            <Image
              src={
                `${BASE_URL}${
                  collection.backdrop_path || collection.poster_path
                }` || `${BASE_URL}${collection.poster_path}`
              }
              width={330}
              height={210}
              objectFit="cover"
              alt={collection.title || collection.original_name}
              className="rounded-lg"
            />
            <div className="min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg bg-opacity-0 bg-black absolute top-0 left-0 group-hover:bg-opacity-80 flex justify-center items-center transition-all duration-500">
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-700">
                {collection.title || collection.original_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collections;
