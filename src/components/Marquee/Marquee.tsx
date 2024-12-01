

import * as React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function combineClasses(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div className="relative">
  <div
    {...props}
    className={combineClasses(
      "group flex overflow-hidden p-2 [--duration:60s] [--gap:1rem] [gap:var(--gap)] max-w-[1340px] mx-auto relative",
      vertical ? "flex-col" : "flex-row",
      className
    )}
  >
    {Array.from({ length: repeat }).map((_, i) => (
      <div
        key={i}
        className={combineClasses(
          "flex shrink-0 justify-around [gap:var(--gap)]",
          vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
    ))}
  </div>
<div className="absolute top-0 bottom-0 inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent opacity-90 pointer-events-none" />
<div className="absolute top-0 bottom-0 inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent opacity-90 pointer-events-none" />

</div>
  );
}

