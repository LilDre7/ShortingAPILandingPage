// 🐋
import Nav from "./Nav";
import ButtonSignUp from "./ButtonSignUp";

const header = () => {
  return (
    <>
      <Nav />
      <header className="text-white flex flex-col items-center justify-center w-full h-screen bg-[#F9FAFB] overflow-hidden">
        <div className="mb-3">
          <img
            className="ml-[23px] w-[135%] max-w-[800px] "
            src="/public/images/illustration-working.svg"
            alt="Illustration Working"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 text-center mt-6">
          More than just shorter links
        </h1>
        <p className="mt-3 px-4 text-lg text-gray-600">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <ButtonSignUp />
      </header>
    </>
  );
};

export default header;
