import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
// import ClientCarouselOne from "@/components/client-carousel-one";
import SpeakersHome from "@/components-br/speakers-home";
// import FunfactOne from "@/components/funfact-one";
import LisboaToNatal from "@/components-br/lisboa-to-natal";
// import VideoTwo from "@/components/video-two";
import HeaderOne from "@/components-br/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeroVideo from "@/components/hero-video";
import OndeSera from "@/components-br/onde-sera";
import ComoSera from "@/components-br/como-sera";
// import EvexLisboa2023 from "@/components/evex-lisboa-2023";
import TransicaoEnergetica from "@/components-br/transicao-energetica";
// import Comite from "@/components/comite";
// import Faq from "@/components/faq"
import Bigcta from "@/components-br/big-cta";
import Patrocinadores from "@/components/patrocinadores";
import Duvidas from "@/components/duvidas"
import QuintaEdicao from "@/components-br/5-edicao";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Evex Brasil">
          <HeaderOne />
          <HeroVideo />
          <LisboaToNatal />
          <QuintaEdicao />
          <OndeSera />
          <TransicaoEnergetica />
          <ComoSera />         
          <SpeakersHome />
          <Bigcta />
          {/* <EvexLisboa2023 /> */}
          {/* <VideoTwo />          */}
          {/* <FunfactOne /> */}
          {/* <ClientCarouselOne /> */}
          {/* <Comite /> */}
          {/* <Faq /> */}
          <Patrocinadores />
          <Duvidas />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
