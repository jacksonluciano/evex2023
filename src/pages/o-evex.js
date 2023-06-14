import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import EvexHeroVideo from "@/components/evex-hero-video";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import VideoThree from "@/components/video-three";
import Evento from "@/components/evento";
import EventoTwo from "@/components/evento-two";
import ExperienceGallery from "@/components/experience-gallery";
import PatrocinadoresEvento from "@/components/patrocinadores-evento";


const OevexPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Inscrições">     
         <HeaderOne />
         <EvexHeroVideo />
         <VideoThree/>
         <Evento />
         <ExperienceGallery />
         <EventoTwo />
         <PatrocinadoresEvento />
         <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default OevexPage;
