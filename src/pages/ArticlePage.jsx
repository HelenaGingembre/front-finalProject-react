
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { FaLocationDot, FaArrowLeft } from "react-icons/fa6";
import { BASE_URL } from '../service/APIservice';

const ArticlePage = ({ deleteArticle }) => {
    // const {id} = useParams;
    // console.log("id", id);
    
    const article = useLoaderData();
    // console.log("article==in articlePage", article)
    const navigate = useNavigate();


    const onDeleteClick = (articleId) => {
        const confirm = window.confirm (`Êtes-vous sûr de vouloir supprimer cet article - '${article.title}' ?` );
        if(!confirm) return;
        deleteArticle(articleId);
  
        toast.success ('Article a été supprimé avec succès');
        navigate ('/articles');
      }
  

  return (
    <>
    <section className="bg-indigo-50 dark:bg-gray-700">
      <div className ="container m-auto py-6 px-6">
        <Link
          to="/articles"
          className ="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft/> &nbsp; Retour aux articles
        </Link>
      </div>
    </section>
     <section className="bg-blue-50 dark:bg-gray-800">
        <div className="container m-auto max-w">
          <div className="bg-white  dark:bg-gray-800 px-6 py-8 shadow-md rounded-md   md:m-0">
            <main>
              <div className="bg-white dark:bg-gray-800 dark:border-1 dark:border-indigo-500 p-6 rounded-lg shadow-md text-center ">
                <img src={`/public/img/${article.img}`} alt={article.title} />
                <div>
                <h1 className="text-6xl  font-tangerine font-bold mb-4">{article.title}</h1>
                <div className="text-gray-500 mb-4 flex flex-col md:flex-row align-middle justify-around ">
                  <div className="text-gray-500 mb-4">{article.type}</div>
                  <div className=' justify-center flex  flex-row'>
                  <FaLocationDot className="text-lg text-indigo-700 mr-2 inline-block align-middle"></FaLocationDot>
                  <p className="text-indigo-700 mr-2 inline-block align-middle">{article.location}</p>
                  </div>
                  <div  className=' justify-center flex  flex-row'>
                    <FaLocationDot className="text-lg text-indigo-700 mr-2 align-middle"></FaLocationDot>
                  <p className="text-blue-700 align-middle">{article.pays}</p>
                  </div>
                </div>
                </div>
              </div>

              
              <div className="bg-white dark:bg-gray-800 dark:border-1 dark:border-indigo-500 rounded-lg shadow-md ">
              <h2 className="text-blue-900  text-lg font-bold mb-3">{!article.subtitle? "":article.subtitle}</h2>
              <p className="px-5  text-justify">{article.description} </p>

                 <h3 className="py-4"> {!article.subtitle_2?"":article.subtitle_2}</h3>
               
                <p className="px-4 text-justify ">{!article.description_2?"":article.description_2} </p>
              </div>
            </main>
            <div className="bg-white dark:bg-gray-800 dark:border-1 dark:border-indigo-500 p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-bold mb-6">Gestion</h3>
             <div className='flex  md:flex-row flex-col   justify-center md:justify-around align-middle items-stretch'>
             <Link
                to={`/edit-article/${article._id}`}
                className ="bg-indigo-500  hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full md:w-80 mb-2 h-10 focus:outline-none focus:shadow-outline"> 
                Modifier l'article
             </Link>
                <Link
                  onClick={ () => onDeleteClick (article._id) }
                  className="bg-blue-400  hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full md:w-80 h-10 focus:outline-none focus:shadow-outline"
 > Supprimer l'article
                </Link>
             </div>
             
                  
                </div>
                
            </div> 
         </div>
      </section>
    </>
  )
}


export const articleLoader = async ({params}) => {
    const res = await fetch (`${BASE_URL}/api/articles/${params.id}`);
    // console.log("params.Id ", params.id)
    const data = await res.json();
    return data;
}


export default ArticlePage;