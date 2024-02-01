import React from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";
import bg from "@/assets/img/bg/aai-feature-bg.jpeg";
import cardImg from "@/assets/img/features/Picture1.jpeg";
import cardImg2 from "@/assets/img/features/Picture2-1.jpeg";
import cardImg3 from "@/assets/img/features/Picture3.jpg";
import cardImg4 from "@/assets/img/features/Picture4.jpeg";
import cardImg5 from "@/assets/img/features/Picture5.png";
import cardImg6 from "@/assets/img/features/Picture6.jpeg";
import cardImg7 from "@/assets/img/features/Picture7.jpeg";
import FeatureCard from "../cards/FeatureCard";

function Features({ className }) {
  return (
    <section
      className={className ? `aai-features ${className}` : "aai-features"}
      style={{ background: `url(${bg.src}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="aai-section-title mb-3 text-center mb-5">
              <h2 className="section-title">How it works</h2>
              <p className="section-desc">
                The ifluent Ai platform appears to be a highly customizable Ai-based educational tool designed to cater to the diverse learning needs and preferences of individual students.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <FeatureCard
            img={cardImg}
            title="Free social media resources"
            // desc="Subscription service"
          />
          <FeatureCard
            img={cardImg2}
            title="Subscription service"
            // desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg3}
            title="Delivered monthly"
            // desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg4}
            title="3D iFluent Unit  Ai Device "
            // desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg5}
            title="Mobile app-personal virtual assistant for information "
            // desc="Generates suggestions for ad on targeting on ad."
          />
          <FeatureCard
            img={cardImg6}
            title="The Virtual Reality (VR) Learning Environments"
            // desc="Rewrites your text and say things different way."
          />
           <FeatureCard
            img={cardImg7}
            title="iFluent AR Headset   "
            // desc="Rewrites your text and say things different way."
          />
        </div>
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="110"
        >
          <Link href="/services-details" className="aai-btn btn-pill-solid">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}

Features.propTypes = {
  className: ProtoTypes.string,
};

export default Features;
