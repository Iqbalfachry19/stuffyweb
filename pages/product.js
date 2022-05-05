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
      <div className="bg-teal-200 flex justify-center items-center">
        <h1 className="flex   py-10 text-2xl">Our Product</h1>
      </div>

      <h2 className="flex justify-center pt-10 text-xl">What is Stuffy?</h2>
      <h2 className="flex justify-center pt-10 text-xl">
        Stuffy is an app for sharing stuff that have been waste
      </h2>
      <div className="flex justify-center">
        <button className="flex items-center bg-white p-2 mt-10 rounded-lg font-extrabold shadow-xl">
          Download Stuffy App v1.0.0
        </button>
      </div>
    </div>
  );
}

export default product;
