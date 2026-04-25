import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO (CINEMATIC BUT SAFE)
========================= */
export const aboutHero = (title, text) => {
  const tl = gsap.timeline();

  tl.from(title, {
    opacity: 0,
    y: 80, // reduced from 120
    duration: 1,
    ease: "power4.out",
    clearProps: "all",
  }).from(
    text,
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all",
    },
    "-=0.5"
  );

  return tl;
};

/* =========================
   STORY (CLEAN SLIDE)
========================= */
export const aboutStory = (el) => {
  return gsap.from(el, {
    opacity: 0,
    x: -60, // reduced
    duration: 0.9,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   MISSION / VISION (NO 3D)
========================= */
export const missionVision = (cards) => {
  return gsap.from(cards, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: cards[0], // 🔥 important fix
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   VALUES GRID (STABLE)
========================= */
export const valuesGrid = (cards) => {
  return gsap.from(cards, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: {
      amount: 0.5,
      from: "center",
    },
    ease: "power2.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: cards[0], // 🔥 important fix
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   WHY US (SMOOTH)
========================= */
export const whyUs = (items) => {
  return gsap.from(items, {
    opacity: 0,
    x: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: items[0], // 🔥 fix
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   TIMELINE (CLEAN FLOW)
========================= */
export const timelineAnimation = (items) => {
  return gsap.from(items, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.2,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: items[0], // 🔥 fix
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   CTA (FOCUSED BUT SAFE)
========================= */
export const aboutCTA = (el) => {
  return gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 0.9,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};