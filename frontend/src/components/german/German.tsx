import React from "react";
import useGerman from "./useTEF";
import GermanForm from "./TEFForm";

const avatars: string[] = [
  "https://media.onlinefrenchskool.com/assets/avatar/Avatar1.svg",
  "https://media.onlinefrenchskool.com/assets/avatar/Avatar2.svg",
  "https://media.onlinefrenchskool.com/assets/avatar/Avatar3.svg",
  "https://media.onlinefrenchskool.com/assets/avatar/Avatar4.svg",
  "https://media.onlinefrenchskool.com/assets/avatar/1k.svg",
];

const RingCheck: React.FC<{ color?: string }> = ({ color = "#4A3CF3" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.6" />
    <path d="M6.3 10.1l2.3 2.3L13.7 7.4" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);





const German: React.FC = () => {
  const { COLORS, content} = useGerman();

  return (
    <section className="w-full pt-20 bg-[#FDFEF8]">
      <div className="mx-auto max-w-[1700px] px-6 md:px-[120px]">
        <div className="mx-auto grid max-w-[1500px] items-start gap-10 py-12 md:grid-cols-[minmax(0,1fr)_620px] md:gap-0 md:py-16">
          {/* LEFT */}
          <div className="mx-auto max-w-[520px] text-center md:mx-0 md:max-w-none md:text-left">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1  border-[#38B9F2] border-[1px]"
              style={{ backgroundColor: COLORS.bannerText, color: COLORS.primary }}
            >
              <div className="bg-[#F0F6D0] inline-flex items-center gap-1 rounded-full px-3 py-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle opacity="0.25" cx="5" cy="5" r="5" fill="#6D7B19" />
                    <circle cx="5" cy="5" r="2" fill="#6D7B19" />
                  </svg>
                </span>
                <span className="text-[12px] text-[#6D7B19] font-semibold ">New</span>
              </div>
              <span className="text-[14px] font-normal text-[#242325]">{content.badge}</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M11.5833 14.1668L15.75 10.0002M15.75 10.0002L11.5833 5.8335M15.75 10.0002H3.25" stroke="#022850" stroke-width="1.2" stroke-miterlimit="10" stroke-linejoin="round" />
                </svg>
              </span>
            </div>

            <h1 className="text-[28px] leading-[60px] font-semibold text-[#022850] sm:text-[32px] md:text-[48px]">
              TEF Preparation Course <br /> for Canada PR
            </h1>
            <p className="text-[22px] leading-[27px] font-semibold text-[#022850] py-4 " >
              {content.subtitle}
            </p>

            <p className="mt-3 text-[#757279] text-[18px] leading-[27px] md:mt-4 md:max-w-xl" >
              Achieve <span className="text-[#757279] text-[18px] leading-[27px] font-semibold">CLB 7 in just 90 days</span> with Live Online classes led by certified French tutors. Get flexible schedules, personalised study plans, real exam-style practice tests, and one-to-one guidance every step of the way.
            </p>

            <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/contact_us"
                className="inline-flex bg-transparent border-[#38400D] text-[#38400D] border-[1px] h-12 w-full items-center justify-center rounded-xl text-sm font-semibold sm:w-auto sm:px-6"

              >
                {content.ctas.explore}
              </a>

              <a
                href="#courses"
                className="inline-flex h-12 w-full bg-[#D3E373] text-[#38400D] items-center justify-center rounded-xl border text-sm font-semibold sm:w-auto sm:px-6"

              >
                {content.ctas.book} <span className="ml-2">→</span>
              </a>
            </div>

            <div className="mt-6 grid gap-2 grid-cols-2 justify-start items-start">
              {/* First Column - Left Bullets */}
              <ul className="space-y-2" style={{ color: COLORS.body }}>
                <li className="justify-start items-center flex gap-3 md:text-[14px] text-[12px]">
                  <RingCheck />
                  <p><span className="font-semibold">Personalised guidance</span> for every student</p>
                </li>
                <li className="justify-start items-center flex gap-3 md:text-[14px] text-[12px]">
                  <RingCheck />
                  <p><span className="font-semibold">Live and recorded classes</span> with French tutors</p>
                </li>
                <li className="justify-start items-center flex gap-3 md:text-[14px] text-[12px]">
                  <RingCheck />
                  <p><span className="font-semibold">Regular feedback</span> on speaking and writing</p>
                </li>
              </ul>

              {/* Second Column - Right Bullets */}
              <ul className="space-y-2" style={{ color: COLORS.body }}>
                <li className="justify-start items-center flex gap-3 md:text-[14px] text-[12px]">
                  <RingCheck />
                  <p><span className="font-semibold">Mock tests</span> designed like the official TEF exam</p>
                </li>
                <li className="justify-start items-center flex gap-3 md:text-[14px] text-[12px]">
                  <RingCheck />
                  <p>Flexible<span className="font-semibold"> weekday and weekend</span> batches</p>
                </li>
                <li className="justify-start items-center flex gap-3 md:text-[14px] text-[12px]">
                  <RingCheck />
                  <p><span className="font-semibold">Support</span> available throughout your preparation</p>
                </li>
              </ul>
            </div>



            <div className="mt-6 flex flex-col items-center gap-3 md:items-start">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Student avatar ${i + 1}`}
                    className="h-8 w-8 rounded-full object-cover"
                    loading={i > 1 ? "lazy" : "eager"}
                  />
                ))}
              </div>
              <p className="text-sm text-[#757279]" >
                {content.socialProof}
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="relative">
            <GermanForm />
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default German;
