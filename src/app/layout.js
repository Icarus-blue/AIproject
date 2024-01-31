"use client";
import { Sora } from "next/font/google";
import "@/assets/css/font-awesome-all.min.css";
import "@/assets/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const sora = Sora({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en" className={sora.className}>
      <body>{children}</body>
    </html>
  );
}
