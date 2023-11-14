import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import BG2 from "../src/assets/BG2.png";
import BG9 from "../src/assets/BG9.png";
import BG3 from "../src/assets/BG3.png";
import BG4 from "../src/assets/BG4.png";
import BG5 from "../src/assets/BG5.png";
import BG6 from "../src/assets/BG6.png";

const products = [
  {
    id: 1,
    name: "original burger",
    href: "/product1",
    imageSrc: BG2,
    imageAlt: "bg",
    price: "$8",
    color: "hot and delicious.",
    Description:
      "Burger original adalah hidangan populer yang terdiri dari seiris daging cincang yang umumnya dipanggang, dibakar, atau dimasak. Daging ini biasanya berasal dari daging sapi, meskipun ada varian lain yang menggunakan daging ayam,kalkun, daging sapi bacon, ikan, atau bahkan sayuran.",
  },
  {
    id: 2,
    name: "Beef Burger",
    href: "/",
    imageSrc: BG9,
    imageAlt: "burger",
    price: "$5",
    color: "hot and delicious.",
    Description:
      "Burger daging sapi, atau yang sering disebut sebagai beef burger adalah hidangan populer yang terdiri dari seiris daging sapi cincang yang umumnya dipanggang atau digoreng dan disajikan di dalam sepotong roti. Ini adalah salah satu jenis burger yang paling umum dan dikenal luas di seluruh dunia.",
  },
  {
    id: 3,
    name: "special burger",
    href: "/",
    imageSrc: BG3,
    imageAlt: "celana pendek ",
    price: "$12",
    color: "hot and delicious.",
    Description:
      " burger yang ditawarkan dengan kombinasi bahan-bahan dan rasa yang unik dan istimewa. Setiap tempat makan atau restoran burger mungkin memiliki versi mereka sendiri dari special burger, menambahkan elemen kreatif dan keunikan pada hidangan tersebut.",
  },
  {
    id: 4,
    name: "cheese burger",
    href: "/",
    imageSrc: BG4,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$5",
    color: "lumer",
    Description:
      " variasi burger yang populer yang menonjolkan kehadiran keju yang meleleh di atas patty daging sapi. Ini adalah hidangan yang disukai oleh banyak orang karena kombinasi antara rasa gurih dan lezat dari daging sapi, serta kelezatan keju yang meleleh. ",
  },
  {
    id: 5,
    name: "special beef",
    href: "/",
    imageSrc: BG5,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$6",
    color: "tebel",
    Description: " variasi burger yang disajikan dengan kombinasi bahan-bahan dan rasa yang unik, menciptakan pengalaman kuliner yang istimewa dan membedakannya dari burger biasa.",
  },
  {
    id: 6,
    name: "BBQ Burger",
    href: "/",
    imageSrc: BG6,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "7",
    color: "saus BBQ",
    Description:
      "variasi burger yang diberi sentuhan cita rasa barbekyu (BBQ), menggabungkan kelezatan daging panggang dengan cita rasa saus barbekyu yang khas. Ini adalah hidangan yang populer di berbagai tempat, terutama selama musim panas atau di acara barbeku. ",
  },
  {
    id: 7,
    name: "bacon burger",
    href: "/",
    imageSrc: BG2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$8",
    color: "tambahan bacon",
    Description: "Bacon burger adalah varian burger yang menambahkan daging bacon sebagai salah satu komponennya, memberikan sentuhan gurih dan garing yang khas.",
  },
  {
    id: 8,
    name: "swiss burger",
    href: "/",
    imageSrc: BG5,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$5",
    color: "dengan keju swiss",
    Description:
      "Swiss burger adalah varian burger yang ditandai dengan penambahan keju Swiss sebagai elemen utama. Keju Swiss memiliki ciri khas dengan lubang-lubang kecilnya dan rasa yang kaya, memberikan sentuhan lembut dan gurih pada burger.",
  },
];

export default function Example() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailClick = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleBuy = () => {
    console.log("proudk dibeli!");
  };
  return (
    <div className="bg-black  pt-16">
      <Navbar />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <form class="pb-16">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-8 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:opacity-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-slate-600 dark:opacity-50 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              Search
            </button>
          </div>
        </form>
        <h2 className="text-2xl  font-bold tracking-tight text-slate-300">Pilih Produk</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 bg-opacity-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-sm text-gray-400">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-white">{product.price}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-orange-600 bg-opacity-80 text-white px-4 py-2 mr-2 rounded hover:bg-orange-400 focus:outline-none" onClick={() => handleDetailClick(product.id)}>
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-800 bg-opacity-75">
            <div className="bg-orange-800 bg-opacity-80 p-8 rounded-lg ">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <div className="flex items-center justify-center mb-4">
                <img src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} className="rounded-lg w-52 bg-slate-700 h-96 relative" />
                <div className="ml-4">
                  <p className="mb-36 max-w-prose text-justify">
                    <header className="font-bold">Deskripsi</header>
                    {selectedProduct.Description}
                  </p>
                  <p className="text-lg mb-2">{selectedProduct.price}</p>

                  <button className="bg-slate-700 text-slate-200 px-4 py-2 mb-4 rounded hover:bg-opacity-50 mr-16" onClick={handleCloseDetail}>
                    Tutup Detail
                  </button>
                  <a href="/product1" className="bg-slate-700 text-slate-200 px-4 py-2 mb-4 rounded hover:bg-opacity-50" onClick={handleBuy}>
                    buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="App-footer" class="h-10 block">
        <Footer />
      </footer>
    </div>
  );
}
