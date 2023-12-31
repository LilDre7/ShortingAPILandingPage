const ButtonSignUp = () => {
  return (
    <>
      <button className="hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-10 rounded-3xl bg-sky-200 p-3 w-full flex justify-center items-center font-extrabold shadow-sm shadow-slate-400 md:w-36">
        <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
        <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
        <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
        <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
        <p className="z-10">Sign Up</p>
      </button>
    </>
  );
};

export default ButtonSignUp;
