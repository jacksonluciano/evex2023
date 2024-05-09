import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
import Speakers from "@/components-br/speakers";
import HeaderOne from "@/components-br/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const SpeakersPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Evex Brasil - Speakers">     
         <HeaderOne />
          <Speakers />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default SpeakersPage;
