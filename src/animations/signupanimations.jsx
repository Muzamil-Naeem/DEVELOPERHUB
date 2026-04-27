import gsap from "gsap";

export const authPageAnim = (container) => {
  if (!container) return;

  gsap.from(container, {
    opacity: 0,
    y: 70,
    scale: 0.95,
    duration: 0.8,
    ease: "power3.out"
  });
};