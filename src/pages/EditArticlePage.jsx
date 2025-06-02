import React from 'react'
import { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditArticlePage = ({ updateArticleSubmit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const article = useLoaderData();
  console.log("useLoaderData article", article);
  

  const [img, setImg] = useState(article.img);
  const [title, setTitle] = useState(article.title);
  const [subTitle, setSubTitle] = useState(article.subtitle);
  const [type, setType] = useState(article.type);
  const [location, setLocation] = useState(article.location);
  const [pays, setPays] = useState(article.pays);
  const [description, setDescription] = useState(article.description);
  const [subTitle_2, setSubTitle_2] = useState(article.subtitle_2||"");
  const [description_2, setDescription_2] = useState(article.description_2||"");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArticle = {
      _id: id,
      img: img,
      title: title,
      subtitle: subTitle? subTitle: null,
      type: type,
      description: description,
      subtitle_2: subTitle_2?subTitle_2:null,
      description_2: description_2? description_2:null,
      location: location,
      pays: pays
    };
    
    updateArticleSubmit(updatedArticle);
    toast.success("Article updated Successfully!");
    return navigate(`/articles`);
  };

  return (
    <> <section className="bg-blue-50 dark:bg-gray-700">
    <div className="container m-auto max-w-3xl py-10">
      <div className="bg-white dark:bg-gray-800 px-6 py-8 mb-4 shadow-md rounded-md  m-4 md:m-0">
        <form onSubmit={handleSubmit}  encType="multipart/form-data">
          <h2 className="text-3xl text-center text-indigo-500 font-semibold mb-6">
          Modifier l'article
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-4 mr-2">
            <label  htmlFor="img" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="img"
              name={img}
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
              placeholder="ajouter un image..."
              onChange={(e) =>
                setImg(e.target.files[0].name)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Type de Article
            </label>
            <select
              id="type"
              name="type"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3"
              // required
              value={type}
              onChange={(e) =>
               setType(e.target.value)
              }
            >
              <option value="Itinéraires">Itinéraires</option>
              <option value="Histoire">Histoire</option>
              <option value="Légendes">Légendes</option>
             
            </select>
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Titre
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
              placeholder="Titre d'article ..."
              // required
              value={title}
             onChange={(e) =>
                  setTitle(e.target.value)
              }
                
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subtitle" className="block text-gray-700 font-bold mb-2">
              SudTitre
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
              placeholder="Subtitre de article ..."
              value={subTitle}
              onChange={(e) =>
                 setSubTitle(e.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3"
              rows="10"
              placeholder="toute info relative au votre article..."
              value={description}
              onChange={(e) =>
                // setEditArticle({ ...article, description: e.target.value })
                setDescription(e.target.value)
              }
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="subtitle" className="block text-gray-700 font-bold mb-2">
              Sub Titre 2 (optional)
            </label>
            <input
              type="text"
              id="subtitle_2"
              name="subtitle_2"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
              placeholder="Subtitre de article ..."
              
              value={subTitle_2}
              onChange={(e) =>
                // setEditArticle({ ...article, subtitle_2: e.target.value })
                setSubTitle_2(e.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description 2 (optional)
            </label>
            <textarea
              id="description_2"
              name="description_2"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3"
              rows="4"
              placeholder="toute info relative au votre article..."
              value={description_2}
              onChange={(e) =>
                // setEditArticle({ ...article, description_2: e.target.value })
                setDescription_2(e.target.value)
              }
            ></textarea>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-4 mr-2">
            <label className="block text-gray-700 font-bold mb-2">
              Lieu
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
              placeholder="ex: Kyiv, Ukraine..."
              required
              value={location}
              onChange={(e) =>
                // setEditArticle({ ...article, location: e.target.value })
                setLocation(e.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Pays
            </label>
            <input
              type="text"
              id="pays"
              name="pays"
              className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
              placeholder="ex:  Ukraine..."
              required
              value={pays}
              onChange={(e) =>
                // setEditArticle({ ...article, pays: e.target.value })
                setPays(e.target.value)
              }
            />
          </div>
          </div>
          <div>
            <button
              className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
             Modifier l'article
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  </>
  )
}

export default EditArticlePage