import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import SearchInput from "../SearchInput";
import ArticleCard from "./ArticleCard";
import { BASE_URL } from "../../service/APIservice";

const ArticlesList = ({ isHome }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  const filteredArticles = () => {
    const data = articles.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search) ||
        item.subtitle.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search) ||
             item.subtitle_2?.toLowerCase().includes(search) ||
            item.description_2?.toLowerCase().includes(search) ||
            item.location.toLowerCase().includes(search) ||
            item.type.toLowerCase().includes(search);
    });

    setSearchResult(data);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${BASE_URL}/api/articles`;
        const response = await fetch(apiUrl);
        const result = await response.json();
        if(!isHome) {
           setArticles(result);
        setSearchResult(result);
      }
        else {
          setArticles(result.slice(0,3));
          setSearchResult(result.slice(0,3));
        } 
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSearchResult(filteredArticles);
  }, [search]);

  const handleChange = (e) => {setSearch(e.target.value.toLowerCase())};

  return (
    <>
    
     { !isHome?<SearchInput onChange={handleChange} />:""  } 
     {loading ? ( <Spinner loading={loading} />
              ) : (
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchResult.map((articleItem) => {
          return(
          <li key={articleItem._id.toString()} className= "overflow-hidden bg-white dark:bg-gray-800 dark:border-1 dark:border-blue-500 rounded-xl shadow-md relative">
            <ArticleCard article={articleItem}  /> </li>);
         })}
      </ul> 
    )}
    </>
  );
};

export default ArticlesList;
