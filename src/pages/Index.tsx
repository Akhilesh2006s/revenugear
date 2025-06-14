"use client";

import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { ThreeDMarquee } from "../components/ui/container-scroll-animation";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Tabs } from "../components/tabs";
import { motion } from "framer-motion";
import { FeatureCard } from "../components/FeatureCard";
import {
  Globe,
  Settings,
  FlaskConical,
  FileText,
  Sparkles,
} from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = `95% of customer calls at a vehicle dealership are never reviewed. That's why customers leave silently.`;

// Card data with natural sizing
const cardData = [
  { image: "src/pages/1.jpg" },
  { image: "src/pages/2.jpg" },
  { image: "src/pages/3.jpg" },
  { image: "src/pages/4.jpg" },
  { image: "src/pages/5.jpg" },
  { image: "src/pages/6.jpg" },
  { image: "src/pages/7.jpg" },
  { image: "src/pages/8.jpg" },
  { image: "src/pages/9.jpg" },
  { image: "src/pages/10.jpg" },
  { image: "src/pages/11.jpg" },
  { image: "src/pages/12.jpg" },
];

function CardsScrollAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    cardData.forEach((_, index) => {
      const isEven = index % 2 === 0;
      const startX = isEven ? "-120vw" : "120vw";
      const endX = isEven ? "120vw" : "-120vw";

      // Initial state
      gsap.set(`.scroll-card-${index}`, {
        x: startX,
        opacity: 0,
        scale: 0.7,
        rotationY: isEven ? -15 : 15,
      });

      // Enhanced animation timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: `.scroll-card-${index}`,
          start: "top 85%",
          end: "top 15%",
          scrub: 1.2,
          onEnter: () => {
            gsap.to(`.scroll-card-${index}`, {
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              duration: 0.3,
            });
          },
          onLeave: () => {
            gsap.to(`.scroll-card-${index}`, {
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              duration: 0.3,
            });
          },
        },
      })
      .to(`.scroll-card-${index}`, {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power2.out",
      })
      .to(`.scroll-card-${index}`, {
        x: endX,
        opacity: 0,
        scale: 0.7,
        rotationY: isEven ? 15 : -15,
        duration: 1.5,
        ease: "power2.in",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-black py-40" ref={containerRef}>
      <div className="relative w-full flex flex-col items-center space-y-32">
        {cardData.map((card, index) => (
          <div key={index} className={`scroll-card scroll-card-${index}`}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:bg-black border rounded-xl p-3 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src={card.image}
                    alt={`RevenueGear feature ${index + 1}`}
                    className="w-auto h-auto max-w-full max-h-96 rounded-lg mx-auto block"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
      
      {/* Added floating particles for visual enhancement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  const tabs = [
    {
      title: "International & Indian Language Support",
      value: "product",
      content: (
        <FeatureCard
          icon={<Globe className="w-6 h-6 text-white" />}
          title="International & Indian Language Support"
          description="Understands customer calls in any language with 95%+ accuracy"
        />
      ),
    },
    {
      title: "Detects All Revenue Leaks",
      value: "Detects All Revenue Leaks",
      content: (
        <FeatureCard
          icon={<Settings className="w-6 h-6 text-white" />}
          title="Detects All Revenue Leaks"
          description="Keeps all backend services running at 99.9% uptime with proactive error monitoring"
        />
      ),
    },
    {
      title: "Automatic Complaint Classification",
      value: "Automatic Complaint Classification",
      content: (
        <FeatureCard
          icon={<FlaskConical className="w-6 h-6 text-white" />}
          title="Automatic Complaint Classification"
          description="Experiment and train models in real-time with <1.5% error rate"
        />
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <FeatureCard
          icon={<FileText className="w-6 h-6 text-white" />}
          title="Content Hub"
          description="Create, monitor, and optimize content with 72%+ user engagement"
        />
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <FeatureCard
          icon={<Sparkles className="w-6 h-6 text-white" />}
          title="Random Insights"
          description="Explore surprise metrics and live experiments to uncover hidden patterns"
        />
      ),
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#333333]">
      <Navbar />
      <div className="relative h-[40rem] overflow-hidden">
        <ThreeDMarquee images={images} />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4 text-center">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to RevenueGear
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-powered voice intelligence for dealerships to eliminate revenue
              leaks.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl text-center">
        <div className="text-4xl md:text-5xl font-semibold leading-relaxed">
          <TextGenerateEffect words={words} />
        </div>
      </div>

      <CardsScrollAnimation />

      <div className="w-full px-4 md:px-0 max-w-6xl mx-auto mt-20 mb-40">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}