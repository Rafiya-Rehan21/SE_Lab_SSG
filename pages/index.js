import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Static title and description */}
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta
          property="og:description"
          content="This is a sample static site using Next.js."
        />
      </Head>

      {/* Semantic HTML structure */}
      <header>
        <h1>Welcome to My Static Site</h1>
      </header>

      <main>
        {/* Example lazy-loaded image */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/image.png`} 
          alt="A butterfly" 
          loading="lazy" 
        />

        <p>This is an example of a static site built with Next.js.</p>
      </main>

      <footer>
        <p>Footer Content © 2024</p>
      </footer>
    </>
  );
}
