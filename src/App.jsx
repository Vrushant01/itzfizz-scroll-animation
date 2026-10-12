

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Data for the 4 statistic cards with their layout positions and scroll ranges
const statCards = [
  {
    id: "box1",
    stat: "58%",
    label: "Increase in pick up point use",
    position: { top: "5%", right: "30%" },
    start: "top+=400 top",
    end: "top+=600 top",
  },
  {
    id: "box2",
    stat: "23%",
    label: "Decreased in customer phone calls",
    position: { bottom: "5%", right: "35%" },
    start: "top+=600 top",
    end: "top+=800 top",
  },
  {
    id: "box3",
    stat: "27%",
    label: "Increase in pick up point use",
    position: { top: "5%", right: "10%" },
    start: "top+=800 top",
    end: "top+=1000 top",
  },
  {
    id: "box4",
    stat: "40%",
    label: "Decreased in customer phone calls",
    position: { bottom: "5%", right: "12.5%" },
    start: "top+=1000 top",
    end: "top+=1200 top",
  },
];

const headlineText = "WELCOME ITZFIZZ";

export default function App() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    // gsap.context handles scoping and automatic cleanup on unmount
    const ctx = gsap.context(() => {
      const car = carRef.current;
      const trail = trailRef.current;
      const headline = headlineRef.current;
      const letters = gsap.utils.toArray(".value-letter");

      if (!car || !trail || !headline) return;

      // Pre-calculate horizontal offset of each letter inside the headline
      const letterOffsets = letters.map((letter) => letter.offsetLeft);
      const baseLeft = headline.offsetLeft;
      const carWidth = 150;

      // 1. Car movement + green trail + letter reveal
      gsap.to(car, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          scrub: true,
          pin: trackRef.current,
          invalidateOnRefresh: true,
        },
        x: () => window.innerWidth - carWidth,
        ease: "none",
        onUpdate: function () {
          // Midpoint of car determines the reveal frontier
          const carX = gsap.getProperty(car, "x") + carWidth / 2;

          // Reveal letters as the car drives past them
          letters.forEach((letter, i) => {
            const letterX = baseLeft + letterOffsets[i];
            letter.style.opacity = carX >= letterX ? 1 : 0;
          });

          // Expand green trail width to follow the car
          gsap.set(trail, { width: carX });
        },
      });

      // 2. Animate each stat card to fade in over its scroll trigger range
      statCards.forEach((card) => {
        gsap.to(`#${card.id}`, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: card.start,
            end: card.end,
            scrub: true,
          },
          opacity: 1,
        });
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="section" ref={sectionRef}>
      <div className="track" ref={trackRef}>
        <div className="road" id="road">
          <img
            src="/car.png"
            alt="McLaren 720S sports car"
            className="car"
            id="car"
            ref={carRef}
          />
          <div className="trail" id="trail" ref={trailRef} />

          <div className="value-add" id="valueText" ref={headlineRef}>
            {headlineText.split("").map((char, index) => (
              <span key={index} className="value-letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {statCards.map((card) => (
          <div
            key={card.id}
            className="text-box"
            id={card.id}
            style={card.position}
          >
            <span className="num-box">{card.stat}</span> {card.label}
          </div>
        ))}
      </div>
    </div>
  );
}
