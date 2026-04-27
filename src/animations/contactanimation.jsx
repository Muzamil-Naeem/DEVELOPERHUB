import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactHeroAnim = (hero) => {
  if (!hero) return;

  gsap.fromTo(
    hero.children,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      toggleActions: "restart none none reset"
    }
  );
};

export const contactInfoAnim = (cards) => {
  if (!cards || cards.length === 0) return;

  gsap.fromTo(
    cards,
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 85%",
        toggleActions: "restart none none reset"
      }
    }
  );
};

export const contactFormAnim = (form) => {
  if (!form) return;

  gsap.fromTo(
    form.children,
    { opacity: 0, x: -40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: form,
        start: "top 85%",
        toggleActions: "restart none none reset"
      }
    }
  );
};

export const contactFaqAnim = (items) => {
  if (!items || items.length === 0) return;

  gsap.fromTo(
    items,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.2,
      scrollTrigger: {
        trigger: items[0],
        start: "top 90%",
        toggleActions: "restart none none reset"
      }
    }
  );
};