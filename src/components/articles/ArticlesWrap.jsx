import React from "react";
import ArticlesList from "./ArticlesList";

const ArticlesWrap = ({ title, isHome }) => {
  return (
    <section className="bg-blue-50 dark:bg-gray-800 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {title}
        </h2>
      </div>

      <ArticlesList isHome={isHome} />
    </section>
  );
};

export default ArticlesWrap;
