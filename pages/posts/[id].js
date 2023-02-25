import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}


export function replaceWithBr(content) {
    return content.replace(/\n/g, "<br/>")
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title className={utilStyles.headingXl}>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: replaceWithBr(postData.contentHtml)}} />
            </article>
        </Layout>
    )
}