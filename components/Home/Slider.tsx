import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Content } from "../../utils/interfaces";

function Slider({ trending }: { trending: Content[] }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <section className="relative max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {trending.map((content) => (
          <div
            key={content.id}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url(${
                `${BASE_URL}${content.backdrop_path || content.poster_path}` ||
                `${BASE_URL}${content.poster_path}`
              })`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full max-h-max flex justify-center flex-col items-center p-5"
          >
            <div className="rounded-xl w-[400px] h-[400px] relative">
              <Image
                src={
                  `${BASE_URL}${
                    content.backdrop_path || content.poster_path
                  }` || `${BASE_URL}${content.poster_path}`
                }
                alt={content.title || content.original_name}
                layout="fill"
                objectFit="cover"
                className="shadow-sm shadow-slate-100 rounded-xl"
              />
            </div>
            <p className="my-4 text-xl tracking-wider font-bold">
              {content.title || content.original_name}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Slider;
