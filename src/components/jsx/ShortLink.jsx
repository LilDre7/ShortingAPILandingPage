import { useState } from "react";
import axios from "axios";

const ShortLink = () => {
  const [IsoriginalUrl, setoriginalUrl] = useState("");
  const [IsShortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API__KEY = "0cefaad9e7da25465c3380ec5312062b03b2bc02";
    const ORIGINAL__URL = "https://api-ssl.bitly.com/v4/shorten";

    const requestData = {
      long_url: IsoriginalUrl,
    };

    console.log(IsoriginalUrl);

    try {
      const response = await axios.post(ORIGINAL__URL, requestData, {
        headers: {
          Authorization: `Bearer ${API__KEY}`,
          "Content-Type": "application/json",
        },
      });

      const shortLink = response.data.link;
      console.log(shortLink);
      setShortUrl(shortLink);
    } catch (error) {
      console.error("Error al acortar el enlace:", error);
    }
  };

  return (
    <main className="">
      <div className="flex flex-col mx-auto bg-[#3b3054] border-2 w-[340px] px-5 py-5 mt-10 rounded-xl relative overflow-hidden shadow-lg shadow-slate-50">
        <svg
          className="absolute overflow-hidden bottom-0 left-0 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a2d9ff"
            // fill-opacity="1"
            d="M0,64L21.8,69.3C43.6,75,87,85,131,101.3C174.5,117,218,139,262,138.7C305.5,139,349,117,393,96C436.4,75,480,53,524,48C567.3,43,611,53,655,85.3C698.2,117,742,171,785,192C829.1,213,873,203,916,192C960,181,1004,171,1047,144C1090.9,117,1135,75,1178,69.3C1221.8,64,1265,96,1309,133.3C1352.7,171,1396,213,1418,234.7L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
        <form className="w-full z-10" onSubmit={handleSubmit}>
          <input
            placeholder="Shorten a link here..."
            className=" w-full py-4 px-5 rounded-lg placeholder:font-bold placeholder:text-xl"
            type="text"
            id="originalUrl"
            value={IsoriginalUrl}
            onChange={(e) => setoriginalUrl(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-[#2BD0D0] w-full py-4 mt-5 rounded-lg z-50 font-bold text-xl tracking-wide"
          >
            Shorten it!
          </button>
        </form>
      </div>
      {/*********🚀**** RESPONSE DATA *****🚀*******/}
    </main>
  );
};

export default ShortLink;
