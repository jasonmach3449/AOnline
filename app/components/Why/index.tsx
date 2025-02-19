import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "إدارة الخبراء والنمو المؤكد",
        subheading: "استفد من الاستراتيجيات الاحترافية التي تتمتع بسجل حافل من عوائد ثابتة تتراوح من 5% إلى 7.5% مع الالتزام بإدارة المخاطر الصارمة.",
    },
    {
        heading: "متنوعة وآمنة",
        subheading: "استمتع بمخاطر أقل مع محفظة متنوعة وراحة البال التي توفرها العمليات الشفافة والآمنة.",
    },
    {
        heading: "استثمار سهل",
        subheading: "يمكنك توفير الوقت والجهد من خلال السماح لنا بالتعامل مع الأبحاث والتداول ومراقبة السوق، مما يتيح لك الوصول الحصري إلى الخبرة على المستوى المؤسسي.",
    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">لماذا تختارنا؟</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">يوفر الاستثمار في صندوق التحوط الخاص بالعملات المشفرة فرصة فريدة وحصرية للمجتمع الإسلامي والعربي لتعظيم العائدات مع الالتزام بالمبادئ الأخلاقية وتقليل المخاطر في عالم العملات المشفرة الديناميكي</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
