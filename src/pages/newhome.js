import React from "react";
import Layout from "@/components/layout";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
// import Home from "@/components-br/home"
import NewHome from "@/components-br/newHome"

const Newhome = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Energy">
          <NewHome />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Newhome;
