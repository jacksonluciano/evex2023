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
import HeroVideo from "@/components-br/hero-video";
import OndeSera from "@/components-br/onde-sera";
import ComoSera from "@/components-br/como-sera";
import TransicaoEnergetica from "@/components-br/transicao-energetica";
import Bigcta from "@/components-br/big-cta";
import Patrocinadores from "@/components-br/patrocinadores";
import Duvidas from "@/components-br/duvidas"
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
          <Patrocinadores />
          <Duvidas />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
