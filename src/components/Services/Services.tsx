import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">What We Provide</h3>
          <p>
            Depending on the project's roadmap and the evolving landscape of
            decentralized finance.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={92}
                  height={92}
                  src="/images/token-swap.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Token Swapping</h5>
                <p>
                  By offering a convenient and secure token swapping service,
                  MegaMatchSwap plays a vital role in connecting different
                  blockchain ecosystems and facilitating the movement of value
                  across the decentralized finance landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={92}
                  height={92}
                  src="/images/liquidity-provision.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Liquidity Provision</h5>
                <p>
                  Liquidity provision is a crucial aspect of decentralized
                  exchanges (DEXs) like MegaMatchSwap (MMS). It involves
                  contributing tokens to trading pairs, creating a pool of
                  liquidity that enables other users to swap tokens.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={92}
                  height={92}
                  src="/images/yield-farming.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Yield Farming</h5>
                <p>
                  MMS offers a variety of yield farming opportunities, allowing
                  users to earn rewards while supporting the growth of the
                  platform and the decentralized finance ecosystem, can be a
                  lucrative way to generate passive income.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={92}
                  height={92}
                  src="/images/community.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Community Engagement</h5>
                <p>
                  By fostering a strong sense of community, MMS can create a
                  more vibrant and sustainable platform. A thriving community
                  can contribute to the platform's growth, development, and
                  overall success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
