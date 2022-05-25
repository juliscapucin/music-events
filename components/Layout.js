import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/Layout.module.scss";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Music Events in Amsterdam",
  description: "Find the latest music events in Amsterdam – Summer 2022",
  keywords: "music, dj, edm, events",
};
