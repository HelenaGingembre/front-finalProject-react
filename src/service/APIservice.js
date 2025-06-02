export const BASE_URL = 'http://localhost:4000';


//ajouter nouvel article
export const addArticle = async (newArticle) => {
  console.log("перейшли до функції API service addArticle");
  
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
    /* try {
      const url = `${BASE_URL}/api/articles/$`;
      console.log("params= getArticleById==>", id);
      return await axios.get(url).then((res) => {
        console.log("getArticleById===>", res.data);
        return res.data;
      });
    } catch (error) {
      console.log("error: ", error.message);
     }*/
    const response = await fetch(`${BASE_URL}/api/articles/${id}`);
    console.log(" params= ById==>", id);
    const result = await response.json();
    console.log("getArticlesById===>", result);
    return result;
  };

  //updateArticle
  export const updateArticle = async (article) => {
    console.log("in function article-id updated", article);
    
    const res = await fetch(`${BASE_URL}/api/articles/${article._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    console.log("article-id updated", article._id);
    
    return;
  };
