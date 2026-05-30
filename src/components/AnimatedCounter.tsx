import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function: easeOutExpo for ultra-smooth transition
            const easeOutExpo = (x: number): number => {
              return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const easedPercentage = easeOutExpo(percentage);
            const currentCount = Math.floor(from + (to - from) * easedPercentage);

            setCount(currentCount);

            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(to);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [from, to, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
