import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
import HeaderOne from "@/components-br/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import Patrocinadores from "@/components-br/patrocinadores";

// 2026
import SeventhEditionHero from "@/components-br/SeventhEditionHero";
import SeventhEditionOverviewSection from "@/components-br/SeventhEditionOverviewSection";
import RememberEvexPreviousEdition from "@/components-br/RememberEvexPreviousEdition";
import CeoMessage from "@/components-br/CeoMessage";
import EventLocation from "@/components-br/EventLocation";
import EvexProgram from "@/components-br/EvexProgram";
import EvexHighlights from "@/components-br/EvexHighlights";
import LinksSection from "@/components-br/LinksSection";
import SpeakersSection from "@/components-br/SpeakersSection"
import GetTicketSection from "@/components-br/GetTicketSection";

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
          <EventLocation/>
          <EvexProgram/>
          <EvexHighlights/>
          <LinksSection/>
          <SpeakersSection/>
          <GetTicketSection/>
          <Patrocinadores />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
   </>
  );
};

export default HomeOne;
