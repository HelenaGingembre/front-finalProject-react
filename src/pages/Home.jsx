import React from "react";
import Hero from "../components/Hero";
import ArticlesWrap from "../components/articles/ArticlesWrap";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ArticlesWrap 
      isHome={true} 
      title={"Articles récents"} />
    </>
  );
};

export default HomePage;
