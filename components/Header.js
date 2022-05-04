import React from 'react';
import { useRouter } from 'next/router';
function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 flex bg-white shadow-md p-5 md:px-10">
      <div className="flex flex-1 cursor-pointer ">
        <h1 onClick={() => router.push('/')} className="text-xl">
          Stuffy
        </h1>
      </div>
      <nav>
        <ul className="flex cursor-pointer space-x-4  text-gray-500">
          <li className="hover:text-black" onClick={() => router.push('/')}>
            Home
          </li>
          <li
            className="hover:text-black"
            onClick={() => router.push('/product')}
          >
            Product
          </li>
          <li className="hover:text-black" onClick={() => router.push('/blog')}>
            Blog
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
