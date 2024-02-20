import * as React from "React";

import cn from "clsx";

const Lupa = () => (
  <div className="absolute text-zinc-500 hover:text-white top-[50%] left-2 translate-y-[-50%] hidden lg:block">
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      width="24"
      height="24"
    >
      <g>
        <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
      </g>
    </svg>
  </div>
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <Lupa />
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border bg-zinc-800 border-zinc-600 px-3 py-2 placeholder:text-muted-foreground  focus-visible:bg-black focus-visible:outline-none focus-visible:ring-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:pl-8",
            className
          )}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
