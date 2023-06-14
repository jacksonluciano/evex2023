import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import EnergyTalks from "@/components/energy-talks";
import EnergyAcademy from "@/components/energy-academy";
import ExperienciasHero from "@/components/experiencias-hero";
import EnergyMasterclasses from "@/components/energy-masterclasses";
import EnergyExpo from "@/components/energy-expo";


const Experiencias = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Experiências">
          <HeaderOne />
          <ExperienciasHero />
          <EnergyTalks />
          <EnergyMasterclasses /> 
          <EnergyAcademy />      
          <EnergyExpo />  
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Experiencias;
