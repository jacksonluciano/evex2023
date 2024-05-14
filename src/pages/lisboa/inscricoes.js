import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Inscricoess from "@/components/inscricoes";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const InscricoesPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Lisboa - Inscrições">     
         <HeaderOne />
         <Inscricoess />
         <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InscricoesPage;
