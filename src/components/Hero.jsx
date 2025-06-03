import React from "react";

const Hero = ({
  title = "Meilleurs voyages en Ukraine",
  subTitle = "Voyages, Histoire, Légendes!",
}) => {
  return (
    <section className="box-border bg-[url(/img/PlaceSaintSophie.jpg)] bg-cover bg-bottom bg-fixed bg-gray-200 py-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center ">
          <h1 className="text-4xl font-tangerine font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-indigo-100">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
