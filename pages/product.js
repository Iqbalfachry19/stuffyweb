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
      <h1 className="flex justify-center pt-10 text-2xl">Our Product</h1>
      <h2 className="flex justify-center pt-10 text-xl">Stuffy App</h2>
      <h2 className="flex justify-center pt-10 text-xl">
        Stuffy App is an app for sharing stuff that have been waste
      </h2>
      <button className="flex items-center bg-white p-2 mt-10 rounded-lg font-extrabold shadow-xl">
        Download Stuffy App v1.0.0
      </button>
    </div>
  );
}

export default product;
