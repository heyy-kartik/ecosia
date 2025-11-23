import * as React from "react";
import { cn } from "@/lib/utils";

export interface Button2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button2 = React.forwardRef<HTMLButtonElement, Button2Props>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all bg-white/10 text-white hover:bg-white/20 backdrop-blur-md shadow-md disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-white/10",
          className
        )}
        {...props}
      />
    );
  }
);
Button2.displayName = "Button2";

export { Button2 };