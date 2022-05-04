import React from 'react';
import { useRouter } from 'next/router';
function Banner() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center bg-banner bg-cover  h-[90.5vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl   font-extrabold text-white shadow-sm ">
          Share your stuff for the world
        </h1>
        <div className="space-x-2">
          <button
            onClick={() => router.push('/product')}
            className="bg-white p-2 mt-10 rounded-lg font-extrabold shadow-xl"
          >
            Go to Product
          </button>
          <button
            onClick={() => router.push('/blog')}
            className="bg-white p-2 mt-10 rounded-lg font-extrabold shadow-xl"
          >
            Check our latest new
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
