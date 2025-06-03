import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { _id, img, type, title, subtitle, description, subtitle_2, description_2,  location, pays } = article;

  const [showFullDesc, setShowFullDesc] = useState(false);
  let descriptionMod = description;
  if (!showFullDesc) {
    descriptionMod = descriptionMod.substring(0, 120) + "...";
  }

  return (
    <>
     <div className="h-50 md:h-40  w-full overflow-hidden">
      <img src={`/public/img/${img}`} alt={title} className="w-full object-cover"/>
      </div>
      <div className="mb-5 px-4">
        <div className="text-gray-600 font-tangerine text-4xl my-2">{type}</div>
        <h3 className="text-xl ">{title}</h3>
      </div>
      <div className="px-4">
      <h3 className="text-blue-500 font-tangerine text-4xl mb-2">{subtitle}</h3>
      <div className="mb-5">{descriptionMod}</div>
     
      <button
        onClick={() => setShowFullDesc((prev) => !prev)}
        className="h-[36px] text-blue-500 hover:text-blue-300  md-2 cursor-pointer text-justify text-sm "
      >
        {showFullDesc ? "Moins" : "Plus"}
      </button>
      </div>
     

      <div className="border border-gray-100 dark:border-gray-700 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4 px-4">
        <div className="text-indigo-500 font-tangerine  mb-3">
          <FaLocationDot className="inline"></FaLocationDot>
          {location}
        </div>
        <Link
          to={`/articles/${_id}`}
        
          className="h-[36px] bg-blue-500 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Lire plus
        </Link>
      </div>
      
    </>
  );
};

export default ArticleCard;
