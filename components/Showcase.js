import Image from "next/image";

import styles from "../styles/Showcase.module.scss";

export default function Showcase({ url }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          className={styles.img}
          src={url}
          alt='Paul-de-Heer'
          layout='fill'
          objectFit='cover'
          objectPosition='center center'
          priority='true'
        />
      </div>
    </div>
  );
}
