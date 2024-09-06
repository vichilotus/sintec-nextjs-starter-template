import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image
                width={500}
                height={500}
                src="/images/trading.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h4>
                DESIGNED TO FACILITATE
                <br />
                SEAMLESS TRADING ACROSS
                <br />
                MULTIPLE BLOCKCHAINS.
              </h4>
              <p>
                It offers a user-friendly interface and advanced features making
                it a popular choice for both novice and experienced traders.
                With MegaMatchSwap, you can easily swap tokens, provide
                liquidity, and participate in various DeFi protocols.
              </p>
              <a className="main_btn" href="#">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
