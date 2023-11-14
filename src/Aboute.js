import Navbar from "./Navbar";
import React from "react";
import AboutBG from "../src/assets/abouteBG1.png";
import Footer from "./Footer";

const Aboute = () => {
  return (
    <div className="bg-black ">
      <Navbar />
      <div class="container my-auto mx-auto lg:flex lg:gap-4 ">
        <div className="mx-auto max-w-2xl pt-32 md:pt-8 sm:py-32  lg:py-56 sm:my-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-orange-700 ">Burger Best</h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Burger premium ini adalah kelezatan yang luar biasa dengan daging sapi panggang yang juicy, lapisan keju gourmet meleleh, sayuran segar yang renyah, dan saus rahasia yang memanjakan lidah.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/product"
                className="rounded-md bg-orange-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                more
              </a>
            </div>
          </div>
        </div>
        <div class=" lg:my-auto md:mx-auto ">
          <img src={AboutBG} alt="aboute" width={600} class="md:mx-auto rounded-lg"></img>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Aboute;
