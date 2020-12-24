import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-10 py-2 flex justify-between">
      <div className="flex items-center">
        <Link href="/">
          <a className="text-2xl">Nextwind</a>
        </Link>
      </div>
      <ul className="text-lg flex items-center">
        <li>
          <Link href="/about">
            <a className="mr-5">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="mr-5">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
      </ul>
      <ul className="text-lg flex items-center">
        <li>
          <Link href="/login">
            <a className="mr-5">Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a className="">Register</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
