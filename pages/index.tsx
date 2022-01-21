import type { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Collections from "../components/Global/Collections/Collection";
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
          <Collections collections={trendingMovies} title="trending movies" />
          {/* Popular TV Collection*/}
          <Collections collections={trendingTV} title="popular shows" />
          {/* Top Rated Movies Collection*/}
          <Collections collections={topRatedMovies} title="top rated movies" />
          {/* Popular Movies Collection*/}
          <Collections collections={popularMovies} title="popular movies" />
        </main>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const trendingMovies: Content[] = await customAxios
    .get("trending/movie/day")
    .then((res) => res.data.results);
  const trendingTV: Content[] = await customAxios
    .get("trending/tv/day")
    .then((res) => res.data.results);
  const trending: Content[] = await customAxios
    .get("trending/movie/day")
    .then((res) => res.data.results.slice(0, 6));
  const topRatedMovies: Content[] = await customAxios
    .get("movie/top_rated")
    .then((res) => res.data.results);
  const popularMovies: Content[] = await customAxios
    .get("movie/popular")
    .then((res) => res.data.results);
  return {
    props: {
      session,
      trendingMovies,
      trendingTV,
      trending,
      topRatedMovies,
      popularMovies,
    },
  };
};

export default Home;
