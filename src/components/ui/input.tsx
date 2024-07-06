import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 rounded-md border border-input px-4 py-2 text-sm ring-offset-green file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        style={{ minWidth: "200px" }} // Set a minimum width to prevent collapse
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

// Separate component for Name input
export const NameInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Your Name"
          className={cn("bg-muted/50 dark:bg-muted/80", className)}
          aria-label="name"
          ref={ref}
          style={{ width: "380px" }} // Specific width in pixels
          {...props}
        />
      </div>
    );
  }
);
NameInput.displayName = "NameInput";

// Separate component for Email input
export const EmailInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="mt-4">
        <Input
          type="email"
          placeholder="Your Email"
          className={cn("bg-muted/50 dark:bg-muted/80", className)}
          aria-label="email"
          ref={ref}
          style={{ width: "380px" }} // Specific width in pixels
          {...props}
        />
      </div>
    );
  }
);
EmailInput.displayName = "EmailInput";
