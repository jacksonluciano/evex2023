import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Agenda from "@/components/agenda";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const AgendaPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Inscrições">     
         <HeaderOne />
         <Agenda />
         <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AgendaPage;
