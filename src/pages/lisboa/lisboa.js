import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import PorqueLisboa from "@/components/porque-lisboa";
import Tap from "@/components/tap";
import Reitoria from "@/components/reitoria";


const Lisboa = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Lisboa - Lisboa">
          <HeaderOne />
          <PorqueLisboa />
          <Reitoria />       
          <Tap />  
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Lisboa;
