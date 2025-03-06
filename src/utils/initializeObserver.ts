export function initializeObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "50px" }
  );

  document.querySelectorAll("[data-animate]").forEach((element) => {
    observer.observe(element);
  });

  return observer;
}
