import React from 'react'

export default function hero1() {
  return (
    <main className="flex flex-col xl:flex-row h-screen">
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
       
      </a>
    </div>
  </div>
  <div className="w-full xl:w-1/2 h-screen">
    <img
      className="object-cover w-full h-screen mb-6"
      src="./assets/banner/arab1.jpg"
      alt="Robot Group"
    />
  </div>
</main>

  )
}
