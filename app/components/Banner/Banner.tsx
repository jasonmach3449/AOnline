import Image from "next/image";
import Link from "next/link";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                        قم بتنمية التشفير الخاص بك بشكل آمن <br /> اكسب 7.5%. ابدأ اليوم
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        تستفيد أمل أونلاين من سنوات خبرتها في إدارة محافظ العملات المشفرة لمستخدميها. إنهم يستخدمون الأدوات المالية المتوافقة مع مبادئ التمويل الإسلامي واستراتيجيات الاستثمار لتوليد الثروة للعملاء، بغض النظر عما إذا كان سوق العملات المشفرة يشهد صعودًا (ارتفاع الأسعار) أو سوقًا هابطًا (انخفاض الأسعار).
                        </p>
                    </div>


                    <div className="text-center mt-5 mb-5">
                    <Link href="/Wallet">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                        ابدأ في تطبيقنا
                        </button>
                    </Link>    
                        <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                        تسجيل الدخول
                        </button>
                        
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image 
                            src={'/assets/banner/dashboard.png'} 
                            alt="banner-image" 
                            width={1200} 
                            height={598} 
                            className="rounded-lg" // Optional: Apply rounded edges directly to the image
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;
