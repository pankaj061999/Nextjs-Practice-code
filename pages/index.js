import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jupiter Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyboard" content="my name is Arjun kumar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jupiter Coder</h1>
        {/* <img className={styles.imgname} src="/TajMahal.jpg" alt="hunting coder" width={600} height={300}/>  */}
        <img  className={styles.imgname} src="/TajMahal.jpg" alt="Pankaj Blog website" width={600} height={300}/>
        <p className={styles.description}>
          A blog for Jupiter Coder by Pankaj Kumar Meena
        </p>

        <div>
          <h2 className="">Popular Blogs</h2>
          <div>
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is the languge used to design logic for the web.</p>
          </div>
          <div>
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is the languge used to design logic for the web.</p>
          </div>
          <div>
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is the languge used to design logic for the web.</p>
          </div>
        </div>
      </main>

    </div>
  );
}
