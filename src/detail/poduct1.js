import React from "react";
import Navbar from "../Navbar";
import BG1 from "../assets/BG2.png";

const Product1 = () => {
  return (
    <div className="my-32">
      <Navbar />
      <div class="flex flex-wrap py-16   font-serif md:max-w-xl md:m-auto lg:max-w-3xl lg:m-auto">
        <div class="flex-none w-64 bg-slate-600 rounded-tl-lg bg-opacity-40 relative">
          <img src={BG1} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
        </div>
        <form class="flex-auto bg-orange-600 bg-opacity-40 rounded-tr-lg p-6 md:w-xl lg:w-2xl">
          <div class="flex flex-wrap items-baseline">
            <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-300">Original Burger</h1>
            <div class="flex-auto text-lg font-medium text-slate-300">$8</div>
            <div class="text-xs leading-6 font-medium uppercase text-slate-300">In stock</div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="space-x-1 flex text-sm font-medium">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">M</div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">L</div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-5 text-sm font-medium">
            <div class="flex-auto flex space-x-4 pr-4">
              <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 bg-opacity-50 border border-slate-400 text-slate-400 hover:bg-opacity-70" type="submit">
                Buy now
              </button>
              <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 bg-opacity-50 border border-slate-400 text-slate-400 hover:bg-opacity-70" type="button">
                Add to bag
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
          <p class="text-sm text-slate-500">Free shipping on all continental US orders.</p>
        </form>
        <section className="text-slate-200 mt-2 bg-slate-600 p-4 rounded-b-lg bg-opacity-40">
          <h1 className="text-orange-500 text-2xl text-center mb-4">Descripsi</h1>
          <p>
            Burger original adalah hidangan populer yang terdiri dari seiris daging cincang yang umumnya dipanggang, dibakar, atau dimasak. Daging ini biasanya berasal dari daging sapi, meskipun ada varian lain yang menggunakan daging ayam,
            kalkun, daging sapi bacon, ikan, atau bahkan sayuran.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Product1;
