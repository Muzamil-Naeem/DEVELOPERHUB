import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// HERO
export const animatePortfolioHero = (el) => {
  if (!el) return;

  return gsap.from(el.children, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
};

// PROJECT CARDS (IMPORTANT: works every scroll revisit)
export const animateProjectCards = (cards) => {
  if (!cards || cards.length === 0) return;

  return gsap.from(cards, {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "restart none restart none", // 🔥 REPEATS ON SCROLL UP/DOWN
    },
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
  });
};

// FILTER BAR
export const animateFilterBar = (el) => {
  if (!el) return;

  return gsap.from(el, {
    scrollTrigger: {
      trigger: ".filter-section",
      start: "top 90%",
      toggleActions: "restart none restart none",
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
  });
};

// EXPERTISE
export const animateExpertise = (cards) => {
  if (!cards || cards.length === 0) return;

  return gsap.from(cards, {
    scrollTrigger: {
      trigger: ".expertise",
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    opacity: 0,
    x: -40,
    duration: 0.6,
    stagger: 0.15,
  });
};

// IMPACT
export const animateImpact = (items) => {
  if (!items || items.length === 0) return;

  return gsap.from(items, {
    scrollTrigger: {
      trigger: ".impact",
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.15,
  });
};

// PROCESS
export const animateProcess = (items) => {
  if (!items || items.length === 0) return;

  return gsap.from(items, {
    scrollTrigger: {
      trigger: ".process",
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.1,
  });
};

// CTA
export const animatePortfolioCTA = (el) => {
  if (!el) return;

  return gsap.from(el, {
    scrollTrigger: {
      trigger: ".portfolio-cta",
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
  });
};