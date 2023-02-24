import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm <span className='font-bold'>Bav</span>. I'm a software engineer, working on both front-end and back-end web development.</p>
        <p>
          
        </p>
      </section>
    </Layout>
      
  )
}
