import React, { FC } from "react";
import styles from "./MainLayout.module.css";
import Head from "next/head";
import Navbar from "../Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | Diego Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;