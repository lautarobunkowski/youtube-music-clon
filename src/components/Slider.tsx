"use client";

import * as React from "React";
import * as SliderPrimitive from "@radix-ui/react-slider";

import cn from "clsx";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[2px] group-hover:h-[4px] w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="absolute h-full bg-[#ff0000] group-hover:h-[4px]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-3 w-3 group-hover:h-4 group-hover:w-4 active:scale-125 rounded-full bg-[#ff0000] ring-offset-background focus-visible:outline-none focus-visible:ring-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
