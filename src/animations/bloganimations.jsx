import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateBlogHero = (el) => {
  if (!el) return;

  gsap.fromTo(
    el.children,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      toggleActions: "restart none none reset"
    }
  );
};

export const animateBlogTitle = (el) => {
  if (!el) return;

  gsap.fromTo(
    el,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "restart none none reset"
      }
    }
  );
};

export const animateBlogCards = (cards) => {
  if (!cards || cards.length === 0) return;

  gsap.fromTo(
    cards,
    { opacity: 0, y: 50, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards[0], 
        start: "top 90%",
        toggleActions: "restart none none reset"
      }
    }
  );
};

