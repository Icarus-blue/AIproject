import React from "react";
import bg1 from "@/assets/img/bg/service-1.jpeg";
import bg2 from "@/assets/img/bg/service-2.jpeg";
import img1 from "@/assets/img/services/service-1.svg";
import img2 from "@/assets/img/services/img1.png";
import img3 from "@/assets/img/services/chatgpt.jpeg";
import ServiceCard from "../cards/ServiceCard";

function Service() {
  return (
    <section className="aai-services">
      <ServiceCard
        img={img1}
        bg={bg1}
        desc="Busy world need more engaging, we need more efficient smart education for human life"
        title="What is Problem we have right now?"
        features={[
          "One size for all approach ",
          "Lack of Engagement",
          "Resource Constraints",
          "Technological Integration",
        ]}
      />
      <ServiceCard
        img={img2}
        bg={bg2}
        desc="Ai platform system  for educatonal courses combining AI smart teaching and with digital interactive 3D iFluent Unit device /VR lessons based on an interactive simulations
        "
        title="Solution– AI+3D Interactive simulations"
        features={[
          "Ai can analyze individual learning patterns and tailor the educational content accordingly, providing personalized learning experiences. This caters to the varied learning speeds and styles of students, potentially improving outcomes and comprehension",
          "Interactive 3D iFluent Unit is the Ai device  which features a high-resolution holographic display that projects a lifelike, three-dimensional Ai teacher. The hologram is crystal clear and immersive, providing an engaging learning experience",
          "TWe use NLP tech and  enables the Ai to comprehend and respond to human language, allowing students to communicate with the Ai teacher as they would with a human teacher at anytime",
          "Intelligent real-time  emotional Communication allows students to visualize and interact with these knowledge and accompany in a more tangible way, enhancing more support for deep personalization",
          "VR environments can make learning more engaging and exciting. By turning lessons into interactive experiences, students may show increased motivation and attention, leading to better retention of information"
        ]}
        style={{ flexDirection: "row-reverse" }}
      />
      <ServiceCard
        img={img3}
        bg={bg1}
        desc="It is widely used right now, So many people follow ChatGPT"
        title="ChatGpt Overview"
        features={[
          "180M+ followers in ChatGpt",
          "$200M revenue in 2023",
          "3:1 LTV/CAC",
          "100M+ paying subscribers",
          "63% expected growth in 2024",
          "70% gross margin",
          "UK growing market",
          "1B+ 2024 "
        ]}
      />
    </section>
  );
}

export default Service;
