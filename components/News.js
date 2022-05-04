import React from 'react';
import CardNews from './CardNews';
import { useRouter } from 'next/router';
function News() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-4 place-items-center pt-10">
      <CardNews
        className="cursor-pointer"
        onClick={() => router.push('/blog/news')}
      />
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
    </div>
  );
}

export default News;
