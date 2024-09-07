import Image from "next/image";
import React from "react";

type Props = {};

const Stats = (props: Props) => {
  return (
    <section className="number-area" id="number-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5">
            <div className="number-img">
              <Image width={336} height={480} src="/images/stats.png" alt="" />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="number-content">
              <h4>
                Providing Personalized And <br />
                High Quality Service .
              </h4>
              <p>
                We at MMS are committed to delivering an exceptional user
                experience. We strive to provide a secure, efficient, and
                transparent platform for your decentralized trading needs. Our
                team is dedicated to maintaining high standards of service,
                ensuring your satisfaction and trust in our platform.
              </p>
              <div className="number-wrapper">
                <div className="single-number">
                  <h5>
                    <span className="counter">15</span>K+
                  </h5>
                  <p>happy customer</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">10</span>K+
                  </h5>
                  <p>Project Done</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">9</span>/
                    <span className="counter">10</span>
                  </h5>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
