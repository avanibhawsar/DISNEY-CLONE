// import React, { useEffect, useState, useRef } from "react";
// import GlobalApi from "../Services/GlobalApi";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// function Slider() {
//   const [movieList, setMovieList] = useState([]);
//   useEffect(() => {
//     getTrendingMovies();
//   }, []);
//   const getTrendingMovies = () => {
//     GlobalApi.getTrendingVideos.then((resp) => {
//       console.log(resp.data.results);
//       setMovieList(resp.data.results);
//     });
//   };

//   return (
//     <div>Slider</div>
//     // <div>hello</div>
//   );
// }

// export default Slider;

import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
//import "tailwind-scrollbar-hide/v4";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenwidth = window.innerWidth;

  useEffect(() => {
    getTrendingMovies();

    const interval = setInterval(() => {
      sliderRight(elementRef.current);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenwidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenwidth - 110;
  };
  return (
    <div>
      <HiMiniChevronLeft
        className="hidden md:block text-white text-[60px] absolute cursor-pointer mx-8 mt-[260px] z-10"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiMiniChevronRight
        className="hidden md:block text-white text-[60px] absolute cursor-pointer mx-8 mt-[260px] right-0 z-10"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className=" flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <div className="relative min-w-full md:h-[550px] mr-5 rounded-lg">
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full md:h-[550px] object-cover object-center mr-5 rounded-lg hover:border-[4px] border-gray-500 transition-all duration-100 ease-out"
            />
            <h2 className="text-white text-[30px] z-10  absolute bottom-10 left-5">
              {item.title || item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
