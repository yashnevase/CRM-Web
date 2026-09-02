import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface MetricCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export function MetricCounter({ value, suffix = '', label, decimals = 0 }: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const target = useMotionValue(0);
  const spring = useSpring(target, { stiffness: 90, damping: 22 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) target.set(value);
  }, [inView, target, value]);

  useEffect(
    () => spring.on('change', (latest) => setDisplay(Number(latest.toFixed(decimals)))),
    [decimals, spring],
  );

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-muted">{label}</p>
    </div>
  );
}
