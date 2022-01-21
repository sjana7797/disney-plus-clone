import Image from "next/image";
import { brands } from "../../utils/brandsItems";

function Brands() {
  return (
    <section className="flex flex-row mt-10 gap-6 px-8 max-w-[1400px] mx-auto overflow-x-scroll  scrollbar-hide py-5">
      {brands.map((brand, index) => (
        <div
          className="group flex relative w-52 h-32 sm:w-64 sm:h-36 border-[3px] border-slate-100 border-opacity-10 rounded-lg cursor-pointer shadow-xl overflow-hidden hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
          key={index}
          style={{
            minWidth: "208px",
            minHeight: "128px",
          }}
        >
          <Image
            src={brand.img}
            layout="fill"
            objectFit="cover"
            alt={brand.title}
          />
          <video
            autoPlay
            loop
            playsInline
            width="auto"
            height="auto"
            muted
            className="hidden group-hover:inline object-cover"
          >
            <source src={brand.video} type="video/mp4" />
          </video>
        </div>
      ))}
    </section>
  );
}

export default Brands;
