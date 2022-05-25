import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import styles from "../styles/Home.module.scss";

export default function Home({ hero }) {
  return (
    <Layout className={styles.container}>
      <h1>Home</h1>
      <Showcase url={hero.sourceUrl} />
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
