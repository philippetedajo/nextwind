import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul style={{ border: "1px solid blue" }}>
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
      <ul style={{ border: "1px solid red" }}>
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
