import React from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarOpen(false);
    }
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Your Logo
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${navbarOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {[
                { name: "Home", id: "hero" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-blueGray-700 hover:text-purple-500 cursor-pointer transition-colors duration-200"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
