import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

function product() {
  return (
    <div>
      <Head>
        <title>Stuffy - Share Stuff Application</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default product;
