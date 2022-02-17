import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kartik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="/" target="_blank" style={{ color: "#dd4087" }}>
            Kartik
          </a>
        </h1>
      </main>

      <footer>
        {/* <a
          className="mal"
          href="https://twitter.com/kartik_sindura"
          target="_blank"
        >
          <Image
            alt="Next.js logo"
            src={require("../public/mal.png")}
            width={35}
            height={35}
          />
        </a> */}
        <a
          className="twitter"
          href="https://twitter.com/kartik_sindura"
          target="_blank"
        >
          <Image
            alt="Next.js logo"
            src={require("../public/twitter.png")}
            width={35}
            height={35}
          />
        </a>
        <a
          className="github"
          href="https://github.com/KartikSindura"
          target="_blank"
        >
          <Image
            alt="Next.js logo"
            src={require("../public/github.png")}
            width={35}
            height={35}
          />
        </a>
        <a
          className="instagram"
          href="https://www.instagram.com/kartik_sindura/"
          target="_blank"
        >
          <Image
            alt="Next.js logo"
            src={require("../public/instagram.png")}
            width={35}
            height={35}
          />
        </a>
        <a
          className="spotify"
          href="https://open.spotify.com/user/svag0j6j55jyjbmtqd3ecct1f"
          target="_blank"
        >
          <Image
            alt="Next.js logo"
            src={require("../public/spotify.png")}
            width={35}
            height={35}
          />
        </a>
      </footer>

      <style jsx>{`
        .title {
          position: absolute;
          top: 50px;
        }
        // .mal:hover {
        //   opacity: 1;
        //   transition: 300ms;
        // }
        // .mal {
        //   opacity: 0.6;
        //   margin: 1rem;
        //   transition: 300ms;
        // }
        .spotify:hover {
          opacity: 1;
          transition: 300ms;
        }
        .spotify {
          opacity: 0.6;
          margin: 1rem;
          transition: 300ms;
        }
        .twitter:hover {
          opacity: 1;
          transition: 300ms;
        }
        .twitter {
          opacity: 0.6;
          margin: 1rem;
          transition: 300ms;
        }
        .github:hover {
          opacity: 1;
          transition: 300ms;
        }
        .github {
          opacity: 0.6;
          margin: 1rem;
          transition: 300ms;
        }
        .instagram:hover {
          opacity: 1;
          transition: 300ms;
        }
        .instagram {
          opacity: 0.6;
          margin: 1rem;
          transition: 300ms;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
