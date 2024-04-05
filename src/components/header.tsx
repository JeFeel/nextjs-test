import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      {/* <p>© {new Date().getFullYear()} My Website. All rights reserved.</p> */}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
