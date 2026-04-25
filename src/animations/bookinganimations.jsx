import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* HERO */
export const bookingHeroAnim = (el) => {
  if (!el) return;

  gsap.from(el.children, {
    opacity: 0,
    y: 60,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
  });
};

/* FORM */
export const bookingFormAnim = (el) => {
  if (!el) return;

  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reset play reset",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
  });
};

/* FIELDS */
export const bookingFieldsAnim = (fields) => {
  if (!fields?.length) return;

  gsap.from(fields, {
    scrollTrigger: {
      trigger: ".booking-form",
      start: "top 85%",
      toggleActions: "play reset play reset",
    },
    opacity: 0,
    y: 30,
    stagger: 0.12,
    duration: 0.6,
    ease: "power2.out",
  });
};

/* BOOKINGS CARDS */
export const bookingCardsAnim = (cards) => {
  if (!cards?.length) return;

  gsap.from(cards, {
    scrollTrigger: {
      trigger: ".upcoming",
      start: "top 85%",
      toggleActions: "play reset play reset",
    },
    opacity: 0,
    x: -40,
    stagger: 0.1,
    duration: 0.6,
  });
};

/* INFO SECTION */
export const bookingInfoAnim = (el) => {
  if (!el) return;

  gsap.from(el.children, {
    scrollTrigger: {
      trigger: ".booking-info",
      start: "top 85%",
      toggleActions: "play reset play reset",
    },
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.7,
  });
};