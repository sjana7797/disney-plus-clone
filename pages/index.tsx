import axios from "axios";
import type { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Collections from "../components/Global/Collections/Collections";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Home/Brands";
import Slider from "../components/Home/Slider";
import { customAxios } from "../utils/customAxios";
import { Content } from "../utils/interfaces";

function Home({
  trendingMovies,
  trendingTV,
  trending,
  topRatedMovies,
  popularMovies,
}: {
  trendingMovies: Content[];
  trendingTV: Content[];
  trending: Content[];
  topRatedMovies: Content[];
  popularMovies: Content[];
}) {
  const { data: session } = useSession();
  return (
    <div>
      {!session ? (
        <Hero />
      ) : (
        <main>
          <Slider trending={trending} />
          <Brands />
          {/* Trending Movies Collection*/}
          <Collections
            collections={trendingMovies}
            title="trending movies"
            mediaType="movie"
          />
          {/* Popular TV Collection*/}
          <Collections
            collections={trendingTV}
            title="popular shows"
            mediaType="tv"
          />
          {/* Top Rated Movies Collection*/}
          <Collections
            collections={topRatedMovies}
            title="top rated movies"
            mediaType="movie"
          />
          {/* Popular Movies Collection*/}
          <Collections
            collections={popularMovies}
            title="popular movies"
            mediaType="movie"
          />
        </main>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //const session = await getSession(context);
  const trendingMoviesRequest = customAxios.get("trending/movie/day"),
    trendingTVRequest = customAxios.get("trending/tv/day"),
    trendingRequest = customAxios.get("trending/movie/day"),
    topRatedMoviesRequest = customAxios.get("movie/top_rated"),
    popularMoviesRequest = customAxios.get("movie/popular");
  const [trendingMovies, trendingTV, trending, topRatedMovies, popularMovies] =
    await axios
      .all([
        trendingMoviesRequest,
        trendingTVRequest,
        trendingRequest,
        topRatedMoviesRequest,
        popularMoviesRequest,
      ])
      .then(
        axios.spread(
          (
            trendingMoviesResponse,
            trendingTVResponse,
            trendingResponse,
            topRatedMoviesResponse,
            popularMoviesResponse
          ) => {
            const trendingMovies: Content[] =
              trendingMoviesResponse.data.results;

            const trendingTV: Content[] = trendingTVResponse.data.results;
            const trending: Content[] = trendingResponse.data.results.slice(
              0,
              6
            );
            const topRatedMovies: Content[] =
              topRatedMoviesResponse.data.results;
            const popularMovies: Content[] = popularMoviesResponse.data.results;
            return [
              trendingMovies,
              trendingTV,
              trending,
              topRatedMovies,
              popularMovies,
            ];
          }
        )
      );

  return {
    props: {
      //session,
      trendingMovies,
      trendingTV,
      trending,
      topRatedMovies,
      popularMovies,
    },
  };
};

export default Home;
