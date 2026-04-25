import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO (CINEMATIC TIMELINE)
========================= */
export const homeHero = (title, text, buttons) => {
  const tl = gsap.timeline();

  tl.from(title, {
    opacity: 0,
    y: 120,
    skewY: 5,
    duration: 1.2,
    ease: "power4.out",
  })
    .from(
      text,
      {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .from(
      buttons,
      {
        opacity: 0,
        y: 30,
        scale: 0.85,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

  return tl;
};

/* =========================
   SECTION TITLE (PREMIUM REVEAL)
========================= */
export const sectionTitle = (el) => {
  return gsap.from(el, {
    opacity: 0,
    x: -80,
    skewX: 6,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "restart none none reset",
     
    },
  });
};

/* =========================
   CARDS (MODERN STAGGER GRID)
========================= */
export const cardsStagger = (el) => {
  return gsap.from(el, {
    opacity: 0,
    y: 100,
    scale: 0.9,
    duration: 0.9,
    stagger: {
      amount: 0.6,
      from: "start",
    },
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
     toggleActions: "restart none none reset",

    },
  });
};

/* =========================
   PARALLAX BACKGROUND
========================= */
export const parallax = (el) => {
  return gsap.to(el, {
    y: 150,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   CTA BLOCK (FOCUS IMPACT)
========================= */
export const ctaBlock = (el) => {
  return gsap.from(el, {
    opacity: 0,
    scale: 0.8,
    y: 80,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "restart none none reset",
    },
  });
};

/* =========================
   CONTACT FORM (SMOOTH BUILD)
========================= */
export const contactForm = (el) => {
  return gsap.from(el, {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "restart none none reset",
    },
  });
};

export const formFields = (el) => {
  return gsap.from(el, {
    opacity: 0,
    y: 25,
    stagger: 0.12,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
     toggleActions: "restart none none reset",
    },
  });
};


