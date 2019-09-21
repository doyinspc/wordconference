/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="purple">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(bg.png)"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand mt-5 p-5" style={{ backgroundColor:"rgba(0,0,0,0.4)", borderRadius: 20}}>
            <h1 className="h1-seo" style={{ fontFamily : 'Cinzel Decorative', fontSize : 70 }}>WORD CONFERENCE 2019</h1>
            <h3 style={{ fontFamily : 'Niconne' , fontSize : 40  }}>"Power of the Word"<small>  Psalm 107:20</small></h3>
            <b><h1  id="demo"></h1></b>
          </div>
          </Container>
      </div>
    </>
  );
}

export default IndexHeader;
