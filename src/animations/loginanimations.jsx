import gsap from "gsap";


export const loginHeroAnim = (hero) => {
  if (!hero) return;

  gsap.fromTo(
    hero.children,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }
  );
};

export const loginFormAnim = (form) => {
  if (!form) return;

  gsap.fromTo(
    form,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }
  );
};


export const loginFieldAnim = (fields) => {
  if (!fields || fields.length === 0) return;

  gsap.fromTo(
    fields,
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out"
    }
  );
};