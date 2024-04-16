import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
import Comite from "@/components-br/comite";
import HeaderOne from "@/components-br/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const COmitePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Comitê Científico e Organizador">     
         <HeaderOne />
          <Comite />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default COmitePage;
