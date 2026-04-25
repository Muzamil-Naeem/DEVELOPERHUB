import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ================= HERO =================
export const contactHeroAnim = (hero) => {
  if (!hero) return;

  gsap.from(hero.children, {
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
};

// ================= INFO =================
export const contactInfoAnim = (cards) => {
  if (!cards || cards.length === 0) return;

  gsap.from(cards, {
    scrollTrigger: {
      trigger: cards[0].parentElement, // ✅ FIXED
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });
};

// ================= FORM =================
export const contactFormAnim = (form) => {
  if (!form) return;

  gsap.from(form.children, {
    scrollTrigger: {
      trigger: form,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });
};

// ================= FAQ =================
export const contactFaqAnim = (items) => {
  if (!items || items.length === 0) return;

  gsap.from(items, {
    scrollTrigger: {
      trigger: items[0].parentElement, // ✅ FIXED
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.2,
    ease: "power2.out"
  });
};