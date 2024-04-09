import React from 'react'
import MenuContextProvider from '@/context/menu-context'
import SearchContextProvider from '@/context/search-context'
import Layout from '@/components/layout'
import HeaderOne from '@/components-br/header-one'
import NatalHero from '@/components-br/natal-hero'
import NatalDescription from '@/components-br/natal-description'

const NatalPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle='Natal'>
          <HeaderOne />
          <NatalHero />
          <NatalDescription />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default NatalPage