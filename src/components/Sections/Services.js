import React, { useEffect } from "react";

const services = [
  {
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    description: [
      "🎨 We create bold, clean, and unforgettable visual identities.",
      "💡 From logos to print media, we help you stand out in a crowded market.",
      "📦 Get everything you need to look like a premium brand."
    ]
  },
  {
    title: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    description: [
      "🧠 Smart, simple, and intuitive interfaces that *just work*.",
      "🎯 We focus on how users think, not just how things look.",
      "📲 Mobile-first, pixel-perfect — every damn time."
    ]
  },
  {
    title: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    description: [
      "🔥 Animations that don't just move — they speak.",
      "📹 Perfect for reels, ads, intros, or just to flex on the timeline.",
      "✨ We turn static brands into moving legends."
    ]
  },
  {
    title: "Social Media",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    description: [
      "📱 Strategy, content, design — all in one pack.",
      "📊 We grow your audience without cringe vibes.",
      "🚀 Say goodbye to ghosted IG pages and hello to real engagement."
    ]
  }
];

export default function ServicesZigZag() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
    <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          💼 Our Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>
  
      <div className="space-y-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} items-center gap-12 lg:gap-20`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <ul className="space-y-3 text-gray-700 text-lg">
                  {service.description.map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-semibold">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div 
                
                className="overflow-hidden rounded-xl shadow-xl border-1 border-white mb-4"
                style={{ borderRadius:"12px", objectFit: "cover"}}
                
                >
                
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover max-h-[400px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  
  );
}
