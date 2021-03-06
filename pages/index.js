import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className=" max-w-full mx-auto">
      <Head>
        <title>Stuffy - Share Stuff Application</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
}
