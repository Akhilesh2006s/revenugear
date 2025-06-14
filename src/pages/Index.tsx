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
  PhoneCall,
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

function MysteryHeading() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const container = containerRef.current;
    
    // Split into words for cleaner, professional animation
    const text = heading.textContent;
    const words = text.split(' ');
    heading.innerHTML = words.map((word, i) => 
      `<span class="mystery-word" style="display: inline-block; margin-right: 0.25em;">${word}</span>`
    ).join('');

    const wordElements = heading.querySelectorAll('.mystery-word');

    // Clean, professional initial state
    gsap.set(wordElements, {
      y: 60,
      opacity: 0,
      rotationX: -45,
      transformOrigin: "center bottom"
    });

    // Subtle background particles
    gsap.to(".bg-particle", {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      duration: "random(8, 12)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Professional animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    // Clean entrance animation
    tl.to(wordElements, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15
    })
    // Subtle glow effect
    .to(wordElements, {
      textShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
      duration: 0.6,
      stagger: 0.08
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      
      {/* Minimal, professional background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-particle absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 700
            }}
          >
            The Mystery of Vanishing Customers
          </h2>
        </motion.div>

        {/* Clean, professional subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center space-x-4"
        >
          <motion.div 
            className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Discover the business story
          </p>
          <motion.div 
            className="w-16 h-px bg-gradient-to-l from-transparent to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Professional icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex justify-center space-x-8"
        >
          {[
            { icon: '📊', label: 'Analytics' },
            { icon: '🎯', label: 'Strategy' },
            { icon: '💼', label: 'Business' },
            { icon: '🔍', label: 'Insights' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              <div className="text-2xl md:text-3xl">
                {item.icon}
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Clean bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </div>
  );
}

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
          description="Spots churn risk, repeat complaints, overcharging, missed follow-ups, and poor service signals."
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
          description="Instantly tags and organizes complaints into actionable categories—no manual effort needed."
        />
      ),
    },
    {
      title: "100% Visibility on All Recorded Calls",
      value: "100% Visibility on All Recorded Calls",
      content: (
        <FeatureCard
          icon={<PhoneCall className="w-6 h-6 text-white" />}
          title="Content Hub"
          description="Reviews of all customer calls including Maintenance Reminders and Post Service Follow Up."
        />
      ),
    },
    {
      title: "Customer Sentiment Score",
      value: "Customer Sentiment Score",
      content: (
        <FeatureCard
          icon={<Sparkles className="w-6 h-6 text-white" />}
          title="Random Insight"
          description="Measures how happy or frustrated each customer is, using voice tone and language cues."
        />
      ),
    },
    {
      title: "Voice of Customer Dashboard",
      value: "Voice of Customer Dashboard",
      content: (
        <FeatureCard
          icon={<Sparkles className="w-6 h-6 text-white" />}
          title="Random Insights"
          description="One powerful dashboard to track negative & positive feedback, trends, and team performance."
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

      <MysteryHeading />

      <CardsScrollAnimation />

      <div className="w-full px-4 md:px-0 max-w-17xl mx-auto mt-20 mb-40">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}