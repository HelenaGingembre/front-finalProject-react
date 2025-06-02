import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./MainLayout/MainLayout";
import HomePage from "./pages/Home";
import ArticlesPage from "./pages/ArticlesPage";
import AddArticlePage from "./pages/AddArticlePage";
import ArticlePage, { articleLoader } from "./pages/ArticlePage";
import EditArticlePage from "./pages/EditArticlePage";

import { addArticle, deleteArticle, updateArticle } from "./service/APIservice";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route
          path="/articles/:id"
          element={<ArticlePage deleteArticle={deleteArticle} />}
          loader={articleLoader}  
        />
        <Route path="/add-article" element={<AddArticlePage addArticleSubmit={addArticle}/>} />
        <Route
          path="/edit-article/:id"
          element={<EditArticlePage updateArticleSubmit={updateArticle} />}
          loader={articleLoader}
        />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
  )
);

return <RouterProvider router={router} />;
}

export default App;
