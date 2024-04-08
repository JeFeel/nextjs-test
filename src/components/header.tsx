import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <header>
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/user">User List</Link>
        </li>
      </header>
    </HeaderDiv>
  );
};
export default Header;
