import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

function CardNews() {
  const router = useRouter();
  return (
    <div
      className="bg-teal-200 rounded-lg flex justify-center flex-col m-10 items-center  cursor-pointer"
      onClick={() => router.push('/blog/news')}
    >
      <Image
        src="https://sales.kencanaindonesia.co.id/wp-content/uploads/2021/04/placeholder-3.png"
        alt=""
        height="100"
        width="200"
      />

      <h1 className="mx-2">Title</h1>
      <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  );
}

export default CardNews;
