import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Speakers from "@/components/speakers";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const SpeakersPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Speakers">     
         <HeaderOne />
          <Speakers />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default SpeakersPage;
