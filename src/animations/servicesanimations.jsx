import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO (ONLY ON LOAD)
========================= */
export const animateServicesHero = (el) => {
  if (!el) return;

  gsap.from(el.children, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
  });
};

/* =========================
   WHAT WE OFFER (REPEAT ANIMATION)
========================= */
export const animateServiceCards = (container) => {
  if (!container) return;

  const cards = container.querySelectorAll(".service-card");

  gsap.fromTo(
    cards,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
         toggleActions: "restart none none reset", // 🔥 REPEAT ENABLED
        invalidateOnRefresh: true,
      },
    }
  );
};

/* =========================
   WHY CHOOSE US (REPEAT ANIMATION)
========================= */
export const animateWhyCards = (container) => {
  if (!container) return;

  const cards = container.querySelectorAll(".why-card");

  gsap.fromTo(
    cards,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
         toggleActions: "restart none none reset", // 🔥 REPEAT ENABLED
        invalidateOnRefresh: true,
      },
    }
  );
};

/* =========================
   PROCESS (REPEAT ANIMATION)
========================= */
export const animateProcess = (container) => {
  if (!container) return;

  const items = container.querySelectorAll("div");

  gsap.fromTo(
    items,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reset",
      },
    }
  );
};

/* =========================
   CTA (REPEAT OPTIONAL)
========================= */
export const animateCTA = (el) => {
  if (!el) return;

  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "restart none none reset",
      },
    }
  );
};