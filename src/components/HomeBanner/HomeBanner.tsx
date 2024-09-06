import React from "react";
import { Parallax } from "react-parallax";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">

        <Parallax
          blur={6}
          bgImage="/images/pikaso.jpeg"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex"
          contentClassName="container-fluid d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content text-center">
              <span>Your DEX, Your Rules</span>
              <h3>
              Your Gateway to the Decentralized World
                <br />
                with MegaMatchSwap
              </h3>
              <a className="main_btn" href="#">
                Launch D-App
              </a>
            </div>
          </div>
        </Parallax>
     
    </section>
  );
};

export default HomeBanner;
