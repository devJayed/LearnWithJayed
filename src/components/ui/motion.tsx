import { LazyMotion, domAnimation, m, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const reveal: Variants = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };
export function MotionProvider({ children }: { children: ReactNode }) { return <LazyMotion features={domAnimation}>{children}</LazyMotion>; }
export function Reveal({ children, className, ...props }: HTMLMotionProps<"div">) { return <m.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} {...props}>{children}</m.div>; }
