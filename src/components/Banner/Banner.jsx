const Banner = () => {
  return (
    <div className="text-center ">
      <div
        className="
      bg-[url('../../../Resources/image.png')]
       bg-cover bg-center lg:py-60 md:py-36 py-10 "
      >
        <input
          className="bg-white lg:pr-10 md:pr-5 pr-2 lg:pl-5 md:pl-3 pl-2
            py-2 lg:w-[25%] md:w-[50%] w-[75%] rounded-l-lg text-black"
          placeholder="Search here"
        ></input>
        <button
          className="bg-red-500 border-none font-normal text-white
         lg:py-2 md:py-1 py-0 lg:pr-5 pr-3  rounded-r-lg btn hover:bg-red-600 rounded-l-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
