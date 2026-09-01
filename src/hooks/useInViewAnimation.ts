import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useInViewAnimation(amount = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  return { ref, isInView };
}
