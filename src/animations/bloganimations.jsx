import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// HERO
export const animateBlogHero = (el) => {
  if (!el) return;

  gsap.from(el.children, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });
};

// TITLE
export const animateBlogTitle = (el) => {
  if (!el) return;

  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out",
  });
};

// CARDS (FINAL FIX)
export const animateBlogCards = (cards) => {
  if (!cards || !cards.length) return;

  gsap.from(cards, {
    scrollTrigger: {
      trigger: cards[0].parentElement,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
  });
};