import React from 'react'
import MenuContextProvider from '@/context/menu-context'
import SearchContextProvider from '@/context/search-context'
import Layout from '@/components/layout'
import Footer from "@/components-br/footer";
import HeaderOne from '@/components-br/header-one'
import EvexHeroDescription from '@/components-br/evex-hero-description'
import EvexHeroVideo from '@/components-br/evex-hero-video'
import EvexLastEditions from '@/components-br/evexLastEditions'
import Editions from '@/components-br/editions'
import Evento from '@/components-br/evento'

const OevexPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle='O EVEx'>
          <HeaderOne />
          <EvexHeroDescription />
          <EvexHeroVideo />
          <EvexLastEditions />
          <Editions />
          <Evento />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default OevexPage