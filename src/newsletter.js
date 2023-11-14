import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h2 className="md:text-4xl sm:text-3xl text-1xl font-bold py-2">
            Mau tanya <span className="text-gray-400 block text-xl">Soal Produk? </span>
          </h2>
          <p>biar selalu mendapat informasi terbaru.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-gray-600 hover:bg-gray-400 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Notify Me</button>
          </div>
          <p>
            Kami peduli dengan perlindungan data anda. <span className="text-gray-600">Baca kebijakan kami</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
