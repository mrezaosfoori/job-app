import React from "react";
import { forwardRef } from "react";
import { cn } from "../../utils";
import { ChevronDown } from "lucide-react";

export default forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement>
>(function Select({ className, ...props }, ref) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      ></select>
      <ChevronDown className="absolute left-3 top-3 h-4 w-4 opacity-50" />
    </div>
  );
});
