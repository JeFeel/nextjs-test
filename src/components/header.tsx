import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  text-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      {/* <p>© {new Date().getFullYear()} My Website. All rights reserved.</p> */}
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/user">User List</Link>
      </li>
    </HeaderDiv>
  );
};
export default Header;
