import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h1 className="ml-2 text-xl font-bold">ShopCart</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
