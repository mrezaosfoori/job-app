import React from "react";

import Image from "next/image";
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";
import { Button } from "@/src/components/ui/button";

function Hero() {
  return (
    <div className="relative flex h-[50rem]   w-full flex-col items-center justify-center  " >
      {/* Radial gradient for the container to give a faded look */}

      <div className=" flex  p-4    ">
        <section className="flex flex-1 items-center justify-center">
          <Image
            src={hero}
            alt="hero image"
            className=" bottom-0 z-30 h-full w-full object-cover"
          />
        </section>
        <section className="z-[9999]  flex-1 opacity-95">
          <p className="text-[50px]  ">
            کاری پیدا کن
            <br />
            که با علایق و مهارت‌هات هم‌خوانی داشته باشه
          </p>

          <p className="mt-8 text-[18px] text-slate-500 ">
            هزاران فرصت شغلی در تمام بخش‌های پیشرو منتظر تو هستند...
          </p>
        </section>

        {/* image */}
      </div>
      <div className="flex w-full flex-col  gap-6 bg-red-900  bg-opacity-5 ">
        <div className="flex gap-3  p-4 ">
        <div className="flex  p-2 bg-white w-full ">
            <div className="relative min-w-[300px] flex-1 ">
              <Image
                src={logo}
                alt="hero image"
                className=" absolute right-2 top-1/2 translate-y-[-50%] w-6 h-6"
              />
              <input type="text" placeholder="عنوان ..." className=" p-4 w-full h-full placeholder:absolute placeholder:right-10" />
            </div>
            <div className="relative min-w-[300px] border-r-2 flex-1 ">
              <Image
                src={logo}
                alt="hero image"
                className=" absolute right-2  top-1/2 translate-y-[-50%] w-6 h-6"
              />
              <input type="text" placeholder="مکان ..." className=" p-4 w-full h-full placeholder:absolute placeholder:right-10"  />
            </div>
          </div>

          <Button asChild ><p className="w-full h-full text-[20px] cursor-pointer max-w-[200px]">جستجو</p></Button>
        </div>
        <p>asdadad</p>
      </div>
    </div>
  );
}

export default Hero;
