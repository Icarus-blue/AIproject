import React from "react";
import bg1 from "@/assets/img/bg/service-1.jpeg";
import bg2 from "@/assets/img/bg/service-2.jpeg";
import img1 from "@/assets/img/services/service-1.svg";
import img2 from "@/assets/img/services/service-2.svg";
import img3 from "@/assets/img/services/service-3.svg";
import ServiceCard from "../cards/ServiceCard";

function Service() {
  return (
    <section className="aai-services">
      <ServiceCard
        img={img1}
        bg={bg1}
        desc="Give our AI a few descriptions and we'll automatically create blog articles, product descriptions and more for you within just few second."
        title="Create Content in Single Click with AI Power"
        features={[
          "Let's Communicate with your customers with emotions",
          "Start creating powerful content, for your next ads",
          " Settling In Country",
        ]}
      />
      <ServiceCard
        img={img2}
        bg={bg2}
        desc="Just let me know the topic or genre you have in mind, and I'll
                  assist you in creating engaging content. Feel free to provide
                  any specific instructions or ideas you'd like me to
                  incorporate."
        title="Write Blog Posts, Stories, & Even Books"
        features={[
          "The AI-generated text is always fresh and relevant.",
          "The AI-generated text is guaranteed to be unique and original.",
          "The AI-generated text is SEO-friendly and authoritative.",
        ]}
        style={{ flexDirection: "row-reverse" }}
      />
      <ServiceCard
        img={img3}
        bg={bg1}
        desc="Give our AI a few descriptions and we'll automatically create
        blog articles, product descriptions and more for you within
        just few second."
        title="Instruct to our AI and generate copy"
        features={[
          "Entering & Leaving From Country",
          "Country Citizenship",
          "Settling In Country",
        ]}
      />
    </section>
  );
}

export default Service;
