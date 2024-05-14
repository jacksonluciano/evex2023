import React, { useState } from "react";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import Layout from "@/components/layout";
import Footer from "@/components-br/footer";
import HeaderOne from "@/components-br/header-one";
import AgendaHero from "@/components-br/agenda-hero";
import AgendaHorario from "@/components-br/agenda-horario";

const AgendaPage = () => {
  const [agendaSelecionada, setAgendaSelecionada] = useState(null)

  const handleClickBotao = (dia) => {
    setAgendaSelecionada(dia);
    const agendaSection = document.getElementById('agenda');
    console.log('Elemento da agenda:', agendaSection);
    agendaSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Brasil - Agenda">
          <HeaderOne />
          <AgendaHero
            agendaSelecionada={agendaSelecionada}
            handleClickBotao={handleClickBotao}
          />
          <AgendaHorario agendaSelecionada={agendaSelecionada} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AgendaPage;
