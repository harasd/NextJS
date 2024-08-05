import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd }>
       <p className={utilStyles.headingLg}>Hello, I'm Sarah Dob, a software engineer passionate about creating innovative solutions!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.grid}>
          {allPostsData.map(({ id, date, title, imageUrl }) => (
             <li
             className={`${utilStyles.listItem} ${utilStyles.cardsm}`}
             key={id}
           >
              <Link href={`/posts/${id}`} className={utilStyles.cardsmLs}>
                  <div className={utilStyles.cardsmImage}>
                    <img
                      src={imageUrl}
                      alt={title}
                      className={utilStyles.image}
                    />
                  </div>
                  <div className={utilStyles.cardsmContent}>
                    <h3 className={utilStyles.cardsmTitle}>{title}</h3>
                    <p className={utilStyles.cardsmDate}>
                      <Date dateString={date} />
                    </p>
                  </div>
                </Link>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}