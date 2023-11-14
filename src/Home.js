import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgBurger from "../src/assets/bgBurger.jpg";

export default function Example() {
  return (
    <div
      class="bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgBurger})`,
      }}
    >
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="container my-2">
          <div className="w-full   py-8 lg:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-justify px-8  ">
              <h1 className="text-4xl font-bold tracking-tight text-orange-600 sm:text-6xl">
                Burger <span className="text-orange-700">Best</span>
              </h1>
              <h2 className="text-3xl italic my-1 py-3 font-semibold text-slate-300">Hot and Delicious</h2>
              <p class="text-xl text-slate-300 item-center">
                Burger yang melampaui harapan dan <span class="text-slate-100 block font-sans">sangat istimewa.</span>
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/Product"
                  className="rounded-md bg-orange-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <footer className="App-footer" class="h-10 block pt-40 pb-0 my-8 ">
        <Footer />
      </footer>
    </div>
  );
}
