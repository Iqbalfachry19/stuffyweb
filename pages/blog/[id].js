import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
function News() {
  return (
    <div>
      <Head>
        <title>Stuffy - Share Stuff Application</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="flex justify-center pt-10 text-2xl">Title</h1>
    </div>
  );
}

export default News;
