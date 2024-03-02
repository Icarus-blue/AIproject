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
          "AI-Powered Learning: The iFluent system uses AI to figure out how you learn best and then changes the lessons to fit you. This means you can learn at your own pace in a way that's best for you.",
          "3D Teaching Device: The iFluent Unit is a device that shows you a 3D teacher who looks really lifelike. It's like having a teacher right there with you, making learning more interesting.",
          "Talk to Your iFluent Ai Teacher: With NLP technology, you can talk to the AI teacher just like you would with a real person. This makes it easy to ask questions and get help whenever you need it.",
          "Understands Your Feelings: The iFluent System is smart enough to understand emotions, so it can help you learn in a way that feels good for you. It's like having a teacher who really gets you.",
          "Makes Learning Fun: Lessons come alive in 3D and VR, turning them into exciting games and activities. This can make you more interested and help you remember better."
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
