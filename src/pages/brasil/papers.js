import React from 'react'
import MenuContextProvider from '@/context/menu-context'
import SearchContextProvider from '@/context/search-context'
import Layout from '@/components/layout'
import HeaderOne from '@/components-br/header-one'
import Footer from '@/components-br/footer'
import PapersHero from '@/components-br/papers-hero'
import PapersTimeLine from '@/components-br/papers-timeline'
import PapersObservations from '@/components-br/papers-observations'

const PapersPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle='Papers'>
          <HeaderOne />
          <PapersHero />
          <PapersTimeLine />
          <PapersObservations />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default PapersPage