import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( {allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm <span className='font-bold'>Bav</span>. I'm a software engineer, working on both front-end and back-end web development.</p>
        <p>
          This is my developer blog, which I made using Next.js, a very cool and dev-friendly framework.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="font-bold text-[1.5rem] leading-[1.3] tracking-[-0.05rem] my-[1rem]">Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
      
  )
}
