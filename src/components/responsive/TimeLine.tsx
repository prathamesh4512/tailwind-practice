const TimeLine = () => {
  return (
    <div className="container relative p-6 bg-slate-200 shadow-lg mx-auto flex flex-col gap-8 md:gap-10">
      <div className="absolute w-2 h-full bg-white shadow-sm rounded-full left-[68px] top-0 md:left-[75px] lg:left-1/2 lg:-translate-x-1/2 "></div>
      {[1, 2, 3, 4, 5].map((_, idx) => (
        <div className="relative md:flex md:items-center lg:even:ml-auto lg:odd:mr-auto lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
            className={`size-24 rounded-full border-4 border-white md:shrink-0 md:size-28 lg:absolute
                      ${idx % 2 ? "lg:-right-14" : "lg:-left-14"} 
      `}
          />
          <div
            className={`size-4 bg-white rotate-45 absolute left-10 md:left-28 lg:ml-auto
     ${idx % 2 ? "lg:right-14" : "lg:left-14"}
    `}
          ></div>
          <div
            className={`bg-white shadow-md rounded-md p-4 mt-2 text-sm md:mt-0 md:ml-2 md:text-lg 
    ${idx % 2 ? "lg:mr-16" : "lg:ml-16"} 
    `}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;