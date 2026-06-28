import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
import SpeakersHome from "@/components-br/speakers-home";
// import LisboaToNatal from "@/components-br/lisboa-to-natal";
import HeaderOne from "@/components-br/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
// import HeroVideo from "@/components-br/hero-video";
import SeventhEditionHero from "@/components-br/SeventhEditionHero";
import SeventhEditionOverviewSection from "@/components-br/SeventhEditionOverviewSection";
import RememberEvexPreviousEdition from "@/components-br/RememberEvexPreviousEdition";
import CeoMessage from "@/components-br/CeoMessage";
import EvexHighlights from "@/components-br/EvexHighlights";
import LinksSection from "@/components-br/LinksSection";
import SpeakersSection from "@/components-br/SpeakersSection"
import OndeSera from "@/components-br/onde-sera";
import ComoSera from "@/components-br/como-sera";
import TransicaoEnergetica from "@/components-br/transicao-energetica";
import Bigcta from "@/components-br/big-cta";
import Patrocinadores from "@/components-br/patrocinadores";
import Duvidas from "@/components-br/duvidas";
// import QuintaEdicao from "@/components-br/5-edicao";
import { Helmet } from "react-helmet";

const HomeOne = () => {
  return (
   <>
    <Helmet>
      <link rel="icon" href="../../assets/images-br/favicon.png" type="image/png"/>
    </Helmet>
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Brasil">
          <HeaderOne />
          <SeventhEditionHero />
          <SeventhEditionOverviewSection/>
          <RememberEvexPreviousEdition/>
          <CeoMessage/>
          <EvexHighlights/>
          <LinksSection/>
          <SpeakersSection/>
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
   </>
  );
};

export default HomeOne;
