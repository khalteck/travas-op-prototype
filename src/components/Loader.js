const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-slate-600/90 flex justify-center items-center z-50">
      <div className="bg-white md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <div className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] bg-gradient-to-b from-blue-500 to-white rounded-full relative rotate">
          {/* <div className="w-1/3 h-full bg-white"></div> */}
          <div className="w-1/2 h-1/2 bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
