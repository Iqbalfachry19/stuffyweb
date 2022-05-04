import React from 'react';
import CardNews from './CardNews';

function News() {
  return (
    <div className="grid grid-cols-4 place-items-center pt-10">
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
    </div>
  );
}

export default News;
