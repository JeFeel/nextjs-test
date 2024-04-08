import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  text-align: center;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <footer>
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </FooterDiv>
  );
};

export default Footer;
