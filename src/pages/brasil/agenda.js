import React from 'react'
import MenuContextProvider from '@/context/menu-context'
import SearchContextProvider from '@/context/search-context'
import Layout from '@/components/layout'
import Footer from "@/components-br/footer";
import HeaderOne from '@/components-br/header-one'
import AgendaHero from '@/components-br/agenda-hero';
import AgendaHorario from '@/components-br/agenda-horario';

const AgendaPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle='Agenda'>
          <HeaderOne />
          <AgendaHero />
          <AgendaHorario />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default AgendaPage