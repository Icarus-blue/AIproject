"use client";
import React, { useEffect, useMemo, useState } from "react";
import bg from "@/assets/img/hero/hero-bg-1.jpeg";
import dashboard from "@/assets/img/hero/mainbackground.png";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const content = useMemo(
    () => ["AI smart teaching ", "digital interactive 3D iFluent Unit", "VR lessons"],
    []
  );
  const [contents, setContents] = useState("");
  const [num, setNum] = useState(0);
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    let timeOut = 100;
    if (content[num][contents.length] === " ") {
      timeOut = 0;
    } else if (content[num].length === contents.length) {
      timeOut = 3000;
      setJumping(true);
    } else {
      timeOut = 100;
      setJumping(false);
    }
    setTimeout(() => {
      if (content[num].length <= contents.length) {
        setContents("");
        if (content[num + 1]) {
          setNum(num + 1);
        } else {
          setNum(0);
        }
      } else {
        setContents(contents + content[num][contents.length]);
        if (contents.length + 1 === content[num].length) {
          setJumping(true);
        } else if (content[num][contents.length] !== " ") {
          setJumping(!jumping);
        }
      }
    }, timeOut);
  }, [contents, content, num, jumping]);

  return (
    <section
      className="aai-hero-one position-relative"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-7">
            <div className="aai-hero-one-content">
              <h6 className="aai-hero-one-title">
                Holographic 3D Educational AI technology <br />
                <span className="gradient-text typing-animation">
                  {contents}
                  <span
                    style={{
                      opacity: 0,
                    }}
                  ></span>
                </span>
                <span
                  className={jumping ? "cursor" : ""}
                  style={{ background: "transparent", color: "white" }}
                >
                  |
                </span>
              </h6>
              <p className="aai-hero-one-desc">
              Educational courses combining AI smart teaching and digital interactive 3D iFluent Unit / VR lessons
              </p>
              <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
                <Link href="/prices" className="aai-btn btn-pill-solid">
                  Get Started
                </Link>
                <Link href="/about" className="aai-gradient-outline-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-xl-5 mt-5 mt-lg-0">
            <div>
              <Image
                height={1000}
                width={700}
                style={{borderRadius:300}}
                src={dashboard.src}
                // className="img-fluid aai-hero-img d-none d-xl-block"
                alt=""
              />
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
