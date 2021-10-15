import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Widgets from "../components/widgets/Widgets";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </>
  );
};

export default Home;
