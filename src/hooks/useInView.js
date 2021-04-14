import { useState, useEffect } from "react";

export function useInView(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { tresholds: 1 };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => observer.unobserve(currentRef);
  }, [ref]);

  return isIntersecting;
}
