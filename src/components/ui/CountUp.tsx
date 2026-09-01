import { useEffect, useState } from 'react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface CountUpProps { target: number; suffix?: string; duration?: number }

export function CountUp({ target, suffix = '', duration = 1400 }: CountUpProps) {
  const { ref, isInView } = useInViewAnimation();
  const reduceMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) { setValue(target); return; }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, isInView, reduceMotion, target]);

  return <span ref={ref}>{value}{suffix}</span>;
}
