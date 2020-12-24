import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-3" style={{ border: "1px solid black" }}>
      <div style={{ border: "1px solid green" }} className="logo">
        <h1 className="text-3xl ">Nextwind</h1>
      </div>
      <ul className="text-lg" style={{ border: "1px solid blue" }}>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
      </ul>
      <ul className="text-lg" style={{ border: "1px solid red" }}>
        <li>
          <Link href="/login">
            <a>Login</a>
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
