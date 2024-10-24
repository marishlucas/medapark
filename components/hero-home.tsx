import Link from "next/link";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo01 from "@/components/modal-video-01";
import Image from "next/image";

import heroImg from "@/public/images/hero-img.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-100 opacity-75 md:opacity-20  pointer-events-none z-10 "
        aria-hidden="true"
      ></div>
      <Image
        src={heroImg}
        alt="imagine-hero"
        data-aos="fade-top"
        className="absolute w-screen h-full object-cover object-top inset-0 bg-slate-900 pointer-events-none -z-10 "
      ></Image>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-44 md:pb-40">
          {/* Hero content */}
          <div className="max-w-xl  mx-auto md:max-w-none flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className=" z-20 text-center  md:text-left md:max-w-[33rem]"
              data-aos="fade-right"
            >
              <h1 className="h1 font-playfair-display text-slate-900 mb-4">
                Capacele care iti protejează orașul
              </h1>
              <p className="text-xl text-slate-800 mb-8">
                Suntem primii producători de capace de fontă și compozit din
                România. Oferim soluții rezistente și eficiente pentru orice
                proiect urban.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-white bg-orange-600 hover:bg-orange-700 w-full group"
                    href="/request-demo"
                  >
                    Cumpără acum
                    <span className="tracking-normal text-orange-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-slate-800 hover:bg-slate-800 w-full"
                    href="#0"
                  >
                    Cine suntem noi
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
          </div>
        </div>
      </div>
    </section>
  );
}
