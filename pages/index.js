import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* Static title and description */}
        <title>My Static Site</title> {/* Static title */}
        <meta name="description" content="This is a sample static site." /> {/* Static description */}
        <meta property="og:title" content="My Static Site" /> {/* Static Open Graph title */}
        <meta property="og:description" content="This is a sample static site using Next.js." /> {/* Static Open Graph description */}
      </Head>

      {/* Using Semantic HTML Tags for better accessibility */}
      <header>
        <h1>Welcome to My Static Site</h1>
      </header>

      <main>
        {/* Example of lazy-loaded image with alt attribute for accessibility */}
        <img 
          src="/images/image.png" 
          alt="A butterfly" 
          loading="lazy" 
        />
      </main>

      <footer>
        <p>Footer Content</p>
      </footer>
    </>
  );
}
