import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../component/layout";
import ValueList from '../component/valuelist'

const Home = ({bpi}: any) => {
  console.log(bpi)
  return (
    <>
      <Layout>
        <div className="ml-10 md:ml-96" >
          <h1 className="border border-collapse m-3 p-3 text-2xl sm:text-3xl text-blue-600">Welcome To Bitcoin Prices</h1>
          <h1 className="m-3 text-gray-300 font-semibold">Check Current Bitcoin Prices</h1>
          <ValueList  bpi={bpi} />
        </div>
      </Layout>
    </>
  );
};

Home.getInitialProps =async function() {
  const res =await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data= await res.json();
 
  return{
    bpi:data.bpi,
  };

};

export default Home;
