import React from "react";

import Image from "next/image";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";
import location from "../assets/location.svg";
import search from "../assets/search.svg";
import { Button } from "@/src/components/ui/button";

function Hero() {
  return (
    <div className=" flex   w-full flex-col items-center justify-center mb-[150px]  " >
      {/* Radial gradient for the container to give a faded look */}

      <div className=" flex flex-col md:flex-row gap-[2px] md:gap-2  p-1 md:p-4    ">
        <section className="flex flex-1 items-center justify-center">
          <Image
            src={hero}
            alt="hero image"
            className=" bottom-0 z-30 h-full w-full object-cover bg-red-300 bg-opacity-5"
          />
        </section>
        <section className="z-[9999]  flex-1 opacity-95">
          <p className="text-[24px] sm:text-[22px] md:text-[40px] xl:text-[46px]  ">
            کاری پیدا کن
          که مطابق علاقت باشه...
          </p>

          <p className="mt-2 md:mt-8 text-[16px] sm:text-[18px] text-slate-500 ">
            هزاران فرصت شغلی در تمام بخش‌های پیشرو منتظر تو هستند...
          </p>
        </section>

        {/* image */}
      </div>
      <div className="flex w-full flex-col  gap-4 bg-red-900  bg-opacity-5  ">
        <div className="flex flex-col md:flex-row gap-3 items-center  p-4  md:h-[100px] ">
        <div className="flex  p-2  w-full bg-white border ">
        <div className="flex md:min-w-[300px]  flex-1  p-1 items-center gap-2 ">
              <Image
                src={search}
                alt="hero image"
                    className=" w-6 h-6"
              />
              <input type="text" placeholder="عنوان ..." className=" p-4 w-full h-full " />
            </div>
            <div className="flex md:min-w-[300px] border-r-2 flex-1  p-1 items-center gap-2 ">
              <Image
                src={location}
                alt="hero image"
                className=" w-6 h-6"
              />
              <input type="text" placeholder="مکان ..." className=" p-4  w-full h-full "  />
            </div>
          </div>

          <Button asChild ><p className="w-full h-full text-[21px] cursor-pointer md:max-w-[200px] font-bold min-h-[60px]">جستجو</p></Button>
         
        </div>
        <p className="px-4 ">پیشنهاد:طراحی UI/UX، برنامه‌نویسی، بازاریابی دیجیتال، ساخت ویدئو و انیمیشن.</p>
      </div>
    </div>
  );
}

export default Hero;
