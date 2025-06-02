import React from "react";

const portfolioItems = [
  {
    title: "Graphic Design Project",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
  },
  {
    title: "UI/UX Design",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  },
  {
    title: "Motion Graphics",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279"
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
  }
];

export default function Portfolio() {
  return (
    <section className="pt-20 pb-48" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Our Portfolio</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Check out some of our amazing work
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {portfolioItems.map((item, index) => (
            <div key={index} className="lg:w-4/12 px-4 mb-12">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <img
                  alt={item.title}
                  className="align-middle border-none max-w-full h-auto rounded-lg"
                  src={item.image}
                />
                <div className="p-6">
                  <h5 className="text-xl font-semibold">{item.title}</h5>
                  <p className="mt-2 mb-4 text-gray-600">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}