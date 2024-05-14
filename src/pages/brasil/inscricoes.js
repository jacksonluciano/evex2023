import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
import Inscricoess from "@/components-br/inscricoes";
import HeaderOne from "@/components-br/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";


const InscricoesPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Brasil - Inscrições">     
         <HeaderOne />
         <Inscricoess />
         <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InscricoesPage;
