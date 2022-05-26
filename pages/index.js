import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import styles from "../styles/Home.module.scss";

export default function Home({ hero }) {
  return (
    <Layout className={styles.container}>
      <Showcase url={hero.sourceUrl} />
      <div className={styles.info}>
        <h1>Weval</h1>
        <h3>30 jun @Paradiso 20:00</h3>
        <p>
          Text about the band and details on the new album. band and details on
          the new album. On june 2022 at 22h.
        </p>
      </div>
    </Layout>
  );
}

// GET STATIC PROPS
// ----------------
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://musicevents.wordpresssites.host/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query NewQuery {
        allHome {
          nodes {
            HeroACF {
              hero {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  return { props: { hero: data.allHome.nodes[0].HeroACF.hero } };
}
