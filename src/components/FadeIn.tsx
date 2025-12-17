'use client';

import { Variants, motion } from 'framer-motion';
import { RefObject, createContext, useContext } from 'react';

const FadeInStaggerContext = createContext(false);

const viewport = { margin: '0px 0px -150px' };

interface ViewportOptions {
  root?: RefObject<Element>;
  once?: boolean;
  margin?: string;
  amount?: 'some' | 'all' | number;
}

export function FadeIn({ variants, viewportProp, animate, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { variants?: Variants; viewportProp?: ViewportOptions; animate?: any }) {
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      className="self-center"
      variants={
        variants
          ? variants
          : isInStaggerGroup
          ? {
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }
          : {
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }
      }
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {
            // When in stagger group, don't use viewport - let parent control animation
            // Only add viewport if explicitly provided
            ...(viewportProp ? { viewport: viewportProp } : {}),
          }
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport: viewportProp || viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({ faster = false, once = false, animate, initial, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean; once?: boolean; animate?: any; initial?: string }) {
  // If animate prop is provided, use it instead of whileInView
  const animationProps = animate
    ? {
        animate,
        initial: initial || 'hidden',
      }
    : {
        initial: initial || 'hidden',
        whileInView: 'visible',
        ...(once
          ? {
              viewport: { ...viewport, once: true },
            }
          : {
              viewport,
            }),
      };

  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        {...animationProps}
        transition={{ staggerChildren: faster ? 0.09 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}

export function Stagger({ faster = false, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return <motion.div initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: faster ? 0.2 : 0.4 }} {...props} />;
}
