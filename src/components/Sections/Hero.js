import React from "react";

export default function Hero() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
        <span className="w-full h-full absolute opacity-75" style={{backgroundColor: '#896bf7'}}></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Digital Design Solutions
              </h1>
              <p className="mt-4 text-lg text-white">
                Creating innovative digital experiences through design excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}