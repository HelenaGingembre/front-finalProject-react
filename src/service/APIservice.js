export const BASE_URL = 'http://localhost:4000';

//ajouter nouvel article
export const addArticle = async (newArticle) => {
    const res = await fetch( `${BASE_URL}/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });
    return;
  };

  //supprimer article
  export const deleteArticle = async (id) => {
    const res = await fetch(`${BASE_URL}/api/articles/${id}`, {
      method: "DELETE",
    });
    return;
  };
  
  //getArticle
  export const getArticleById = async (id) => {
    const response = await fetch(`${BASE_URL}/api/articles/${id}`);
    const result = await response.json();
    return result;
  };

  //updateArticle
  export const updateArticle = async (article) => {
    const res = await fetch(`${BASE_URL}/api/articles/${article._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    return;
  };
