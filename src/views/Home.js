import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Ministers from "views/sections/Ministers.js";
import Words from "views/sections/Words.js";
import PastorSection from "views/sections/PastorSection";
import Introduction from "views/sections/Introduction";
import Map from "views/sections/Map";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Introduction />
          <PastorSection/>
          <Ministers/>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
