import React from "react";
import Layout from "@/components/layout";
// import Footer from "@/components/footer";
// import ClientCarouselOne from "@/components/client-carousel-one";
// import TeamCarousel from "@/components/team-carousel";
// import FunfactOne from "@/components/funfact-one";
// import OEvex from "@/components/o-evex";
// import VideoTwo from "@/components/video-two";
// import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
// import HeroVideo from "@/components/hero-video";
// import VirtualPresencial from "@/components/virtual-presencial";
// import EvexLisboa2023 from "@/components/evex-lisboa-2023";
// import TransicoesEnergeticas from "@/components/transicoes-energeticas";
// import Comite from "@/components/comite";
// import Faq from "@/components/faq"
// import Bigcta from "@/components/big-cta";
// import Patrocinadores from "@/components/patrocinadores";
// import Duvidas from "@/components/duvidas"
import Home from "@/components-br/home"

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home">
          <Home />
          {/* <HeaderOne />
          <HeroVideo />
          <OEvex />
          <VirtualPresencial />
          <EvexLisboa2023 />
          <VideoTwo />         
          <FunfactOne />
          <TransicoesEnergeticas />         
          <ClientCarouselOne />
          <TeamCarousel />
          <Comite />
          <Faq />
          <Bigcta />
          <Patrocinadores />
          <Duvidas />
          <Footer /> */}
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
