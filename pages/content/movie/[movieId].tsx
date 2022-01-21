import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Hero from "../../../components/Hero/Hero";
import CollectionCard from "../../../components/ui/CollectionCard";
import { customAxios } from "../../../utils/customAxios";
import { Content } from "../../../utils/interfaces";
function MovieDetails({ movie }: { movie: Content }) {
  const { data: session } = useSession();
  return <div>{!session ? <Hero /> : <CollectionCard content={movie} />}</div>;
}

export default MovieDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const movieId = context.query.movieId;
  const movie = await customAxios
    .get(`movie/${movieId}`)
    .then((res) => res.data);
  return {
    props: { session, movie },
  };
};
