import React from 'react'
import Image from "next/image";

function hero3() {
  return (
    <main className="flex flex-col xl:flex-row h-screen">
  <div className="w-full xl:w-1/2 h-screen">
    <Image
      className="object-cover w-full h-screen mb-6"
      src={"./assets/banner/office.jpg"}
      alt="Robot Group"
    />
  </div>
  <div className="w-full xl:w-1/2 my-4 h-screen flex items-center justify-center">
    <div className="w-4/6">
      <h1 className="tracking-tight font-light text-gray-500 text-4xl"></h1>
      <h1 className="text-center text-6xl md:text-8xl tracking-tight leading-none font-extrabold text-cyan-500 align-right">
      قيمنا
      </h1>
      <p className="text-lg text-gray-500 mt-2">
      انطلاقًا من مهمتنا وقيمنا، نحن ملتزمون بالمساهمة في عالم أكثر عدلاً واستدامة ونركز على رعاية ثقافتنا الشاملة والموجهة نحو المجتمع. نرحب بجميع الموظفين للانضمام إلى مجموعات التقارب الخاصة بنا وتقديم الدعم من خلال فرص التطوع في شؤون المجتمع.
      </p>
      <a
        href="#"
        className="inline-block bg-cyan-500 hover:bg-pink-600 mt-3 px-6 py-3 rounded-md text-white"
      >
        اكتشف المزيد
      </a>
    </div>
  </div>
</main>

  )
}

export default hero3