import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import style from "styled-components";

const MainPage = style.div`
  padding : 10pt;
  text-align : center;
`;

const Page: NextPageWithLayout = () => {
  return <MainPage>hello world</MainPage>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
