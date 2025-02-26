import React from 'react';
import Image from "next/image";

export default function Hero5() {
  return (
    <main className="flex flex-col xl:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 my-4 h-screen flex items-center justify-center">
        <div className="w-4/6">
          <h1 className="tracking-tight font-light text-gray-500 text-4xl">ماذا نفعل</h1>
          <h1 className="text-6xl md:text-8xl tracking-tight leading-none font-extrabold text-cyan-500">
            ملتزمون بالتميز
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            Amal Digital Asset هي شركة عالمية رائدة في مجال استثمار العملات المالية الإسلامية. بناءً على أكثر من 20 عامًا من الخبرة الاستثمارية، نسعى لتحقيق عوائد مجزية لمستثمرينا من خلال استراتيجيات الاستثمار الأساسية والمنهجية عبر فئات الأصول والمناطق الجغرافية.
          </p>
          <a
            href="#"
            className="inline-block bg-cyan-500 hover:bg-pink-600 mt-3 px-6 py-3 rounded-md text-white"
          >
            {/* Button Text */}
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full xl:w-1/2 h-screen flex items-center justify-center">
        <Image
          className="object-cover w-full h-screen"
          src={"./assets/banner/art.jpg"}
          alt= "one"
        />
      </div>
    </main>
  );
}