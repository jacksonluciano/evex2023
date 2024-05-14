import React from "react";
import Layout from "@/components/layout";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import Home from "@/components-br/home"

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="EVEx Energy">
          <Home />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
