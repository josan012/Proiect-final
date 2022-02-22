import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "@fontsource/rubik";
import Header from "../components/Header";
import Date from "../components/Date";
import Calculator from "../components/Calculator";
import Result from "../components/Result";
import Charts from "../components/Charts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Date />
      <Calculator />
      <Result />
      <Charts />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
