import React from "react";

export default function About() {
  return (
    <section className="relative py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full" style={{backgroundColor: '#896bf7'}}>
                <i className="fas fa-info-circle text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">About Us</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We are a creative digital agency passionate about helping businesses grow through innovative design solutions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="About Us"
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            />
          </div>
        </div>
      </div>
    </section>
  );
}