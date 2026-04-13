import React from "react";
import Layout from "@/components/layout";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import NewHome from "@/components-br/newHome"

const HomeOne = () => {
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

export default HomeOne;
