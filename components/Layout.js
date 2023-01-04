import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Taiki";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {home ? (
          <>
            <Image
              src="/images/profile.png"
              alt="no"
              width="50"
              height="50"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src="/images/profile.png"
              alt="no"
              width="50"
              height="50"
              className={`${utilStyles.borderCircle}`}
            />
            <h1>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">Home</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
