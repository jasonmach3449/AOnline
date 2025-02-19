import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '$889M',
        heading: "إجمالي الأصول",
        subheading: "تنمو فئات أصولنا بمقدار 32 مليون دولار شهريًا",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '$638M',
        heading: "الاستثمار الاسلامي",
        subheading: "الأدوات المالية الإسلامية لفئات الأصول الاستثمارية الإسلامية لدينا",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '8%',
        heading: "الإيرادات الشهرية المتكررة",
        subheading: "يحقق مستخدمونا عائدًا شهريًا متكررًا على أصولهم مع الاستخدام",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '282K',
        heading: "أعضائنا",
        subheading: "قاعدة مستخدمين كبيرة في دول إسلامية متعددة",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border  p-2 w-10 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;
