
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UploadAndDisplayImage from "../components/UploadAndDisplayImage";

const initialNewArticle = {
  img: "PlaceSaintSophie.jpg",
  title: "",
  subtitle: "",
  type: "Itinéraires",
  description: "",
  subtitle_2: "Le centre-ville",
  description_2:"",
  location: "",
  pays: "Ukraine",
};

const AddArticlePage = ({ addArticleSubmit }) => {
  const [newArticle, setNewArticle] = useState(initialNewArticle);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    addArticleSubmit(newArticle);
    toast.success("Article Added Successfully!");

    // console.log("newArticle===>", newArticle);

    return navigate("/articles");
  };

  return (
    <>
      <section className="bg-blue-50 dark:bg-gray-800 ">
        <div className="container m-auto max-w-3xl py-10">
          <div className="bg-white dark:bg-gray-800 dark:border-1 dark:border-indigo-500 px-6 py-8 mb-4 shadow-md rounded-md  m-4 md:m-0">
            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
              <h2 className="text-3xl text-center text-indigo-500 font-semibold mb-6">
                Ajouter nouvel Article
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mb-4 mr-2">
                <label  htmlFor="img" className="block text-gray-700 font-bold mb-2">
                  Image
                </label>
                {/* <UploadAndDisplayImage imageName={newArticle.img}/> */}
                <input
                  // type="img"
                  type="file"
                  id="img"
                  name={img}
                  className="bg-indigo-50 dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded w-full py-2 px-3 mb-2"
                  placeholder="ajouter un image..."
                  required
                  // value={newArticle.img} 
                  onChange={(e) =>
                    // setNewArticle({ ...newArticle, img: e.target.value })
                    setNewArticle({ ...newArticle, img: e.target.files[0].name })
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
                  required
                  value={newArticle.type}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, type: e.target.value })
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
                  placeholder="Titre de article ..."
                  required
                  value={newArticle.title}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, title: e.target.value })
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
                  required
                  value={newArticle.subtitle}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, subtitle: e.target.value })
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
                  rows="4"
                  placeholder="toute info relative au votre article..."
                  value={newArticle.description}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, description: e.target.value })
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
                  required
                  value={newArticle.subtitle_2}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, subtitle_2: e.target.value })
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
                  value={newArticle.description_2}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, description_2: e.target.value })
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
                  value={newArticle.location}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, location: e.target.value })
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
                  value={newArticle.pays}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, pays: e.target.value })
                  }
                />
              </div>
              </div>
              <div>
                <button
                  className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit (Ajouter nouvel Article)
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddArticlePage;
