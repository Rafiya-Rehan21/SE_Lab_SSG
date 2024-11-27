import { getPostData } from '../lib/posts';

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
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
