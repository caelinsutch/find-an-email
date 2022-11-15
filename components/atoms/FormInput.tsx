import { cn } from "@/lib/utils";
import React from "react";

type FormInputProps = {
  error?: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ label, error, id, className, ...props }, ref) => (
  <div className="grid gap-1">
    {label &&
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
    }
    <input
      ref={ref}
      className={cn(
        ["my-0 mb-2 block h-12 w-full rounded-md border border-slate-300 py-2 px-3 text-md placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1", className
        ])}
      {...props}
    />
    {Boolean(error) && (
      <p className="px-1 text-xs text-red-600">
        {error}
      </p>
    )}
  </div>
))
