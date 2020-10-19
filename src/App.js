import React from "react";
import "./App.sass";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

let fixHeaderRow = () => {
  let header = document.querySelector(".header");
  let headerBg = document.querySelector(".header__row-bg-fixed");

  if (window.scrollY > 20) {
    headerBg.classList.add("fixed-header");
    header.style.paddingTop = "210px";
    headerBg.style.background = "#393939";
    headerBg.style.height = "89px";
    if (document.documentElement.clientWidth < 1300) {
      headerBg.style.height = "65px";
      header.style.paddingTop = "180px";
    }
    if (document.documentElement.clientWidth < 768) {
      headerBg.style.height = "55px";
    }
  } else {
    headerBg.classList.remove("fixed-header");
    header.style.paddingTop = "20px";
    headerBg.style.background = "none";
    headerBg.style.height = "inherit";
  }
};

function App() {

  React.useEffect(() => {
    window.addEventListener("scroll", fixHeaderRow);
    return () => window.removeEventListener("scroll", fixHeaderRow);
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
