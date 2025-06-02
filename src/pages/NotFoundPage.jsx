import { Link } from "react-router-dom";

import image from "/src/assets/404.svg";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col bg-white text-center justify-items-center ">
      <div className="mx-auto">
        <img src={image} alt="Page not found" className="w-sm mt-5 mb-10" />
      </div>
      <h1 className="text-6xl text-indigo-500 font-bold mb-4">
        Page non trouvée
      </h1>
      <p className="text-xl mb-5">Cette page n'existe pas</p>
      <Link
        to="/"
        className="mx-auto text-white bg-blue-500 hover:bg-blue-900 rounded-md px-3 py-2 my-4"
      >
        Retour
      </Link>
    </section>
  );
};

export default NotFoundPage;
