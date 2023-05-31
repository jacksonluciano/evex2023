import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import PorqueLisboa from "@/components/porque-lisboa";
import Tap from "@/components/tap";
import Reitoria from "@/components/Reitoria";


const Lisboa = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home One">
          <HeaderOne />
          {/* <HeroVideo /> */}
          {/* <OEvex /> */}
          <PorqueLisboa />
         
          {/* <VideoTwo />          */}
          {/* <FunfactOne /> */}
          <Reitoria />       
          <Tap />  
          {/* <ClientCarouselOne /> */}
          {/* <TeamCarousel /> */}
          {/* <Comite /> */}
          {/* <Faq /> */}
          {/* <Bigcta /> */}
          {/* <Patrocinadores /> */}
          {/* <Duvidas /> */}
          {/* <SubscribeForm /> */}
          {/* <PortfolioHome /> */}
          {/* <SliderOne /> */}
          {/* <ServiceTwo /> */}
          {/* <TrustedClient /> */}
          {/* <ParallaxOne /> */}
          {/* <BlogHome /> */}
          {/* <CallToActionOne extraClassName="ready" /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Lisboa;
