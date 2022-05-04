import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import News from '../components/News';
function blog() {
  return (
    <div>
      <Head>
        <title>Stuffy - Share Stuff Application</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="flex justify-center pt-10 text-2xl">News Article</h1>
      <News />
    </div>
  );
}

export default blog;
