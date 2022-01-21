import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Hero from "../../../components/Hero/Hero";
import CollectionCard from "../../../components/ui/CollectionCard";
import { customAxios } from "../../../utils/customAxios";
import { Content } from "../../../utils/interfaces";

function TVShowDetails({ tvShow }: { tvShow: Content }) {
  // const { data: session } = useSession();
  // return <div>{!session ? <Hero /> : <CollectionCard content={tvShow} />}</div>;

  return (
    <div>
      <CollectionCard content={tvShow} />
    </div>
  );
}

export default TVShowDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const session = await getSession(context);
  const tvShowId = context.query.tvId;
  const tvShow = await customAxios
    .get(`tv/${tvShowId}`)
    .then((res) => res.data);
  return {
    props: { tvShow },
  };
};
