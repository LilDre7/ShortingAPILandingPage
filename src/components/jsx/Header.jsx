// 🐋
import Nav from "./Nav";
import ButtonGetStarted from "./ButtonGetStarted";

const header = () => {
  return (
    <>
      <Nav />
      <header className="text-white flex flex-col items-center justify-center w-full min-h-screen overflow-hidden mt-16 lg:flex lg:flex-row md:max-w-[1020px] md:mx-auto md:overflow-visible mx-auto lg:-mt-14 ">
        <div className="mb-3 lg:order-3">
          <img
            className="ml-[23px] w-[135%] lg:max-w-[800px] lg:w-[100%] "
            src="images/illustration-working.svg"
            alt="Illustration Working"
          />
        </div>
        <div className="lg:ml-4 lg:w-[40%] ">
          <h1 className="text-5xl font-bold text-gray-900 text-center mt-6 lg:text-7xl lg:text-start">
            More than just shorter links
          </h1>
          <p className="mt-3 px-4 py-3 text-lg text-gray-600 text-center lg:text-start lg:px-0 lg:text-2xl ">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="flex justify-center lg:flex lg:justify-start ">
            <ButtonGetStarted />
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
