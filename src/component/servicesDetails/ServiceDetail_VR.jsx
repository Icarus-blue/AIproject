import React from "react";
import Link from "next/link";
import sl1 from "@/assets/img/others/Picture6.png";
import slr1 from "@/assets/img/others/Picture5.jpg";
import slr2 from "@/assets/img/others/Picture4.png";
import Image from "next/image";

function ServiceDetail_VR() {
  return (
    <section className="aai-service-details">
      <div className="container">
        <div className="row justify-content-between g-4 align-items-center">
          <div className="col-lg-8">
            <div>
              <h2 className="section-title">Virtual Reality (VR) Learning Environments
              </h2>
              <p className="section-desc">The Virtual Reality (VR) Learning Environments support the iFluent AR headset acts as a gateway to this virtual space, where learning is not just seen but experienced. 
</p>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-8">
            <div className="swiper aaiImgSlider mb-4 mb-lg-0">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination aai-swiper-pagination"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-4">
              <div className="col-12">
                <div>
                  <Image
                    height={sl1.height}
                    width={sl1.width}
                    src={slr1.src}
                    className="img-fluid aai-service-thumb w-100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <Image
                    height={slr2.height}
                    width={slr2.width}
                    src={slr2.src}
                    className="img-fluid aai-service-thumb w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail_VR;
