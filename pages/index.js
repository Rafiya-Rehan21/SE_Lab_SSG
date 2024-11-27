import { getPostData } from '../lib/posts';
import Head from 'next/head';

// Using getStaticProps for Static Site Generation
export async function getStaticProps() {
  const { data, content } = getPostData();
  return {
    props: {
      data,
      content,
    },
  };
}

export default function Home({ data, content }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>  {/* Dynamic title from Markdown */}
        <meta name="description" content={data.title} /> {/* Description from title */}
        <meta property="og:title" content={data.title} /> {/* Open Graph title */}
        <meta property="og:description" content={data.title} /> {/* Open Graph description */}
      </Head>
      <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}
