import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-9 w-full rounded-md border border-border bg-transparent px-3 py-1 text-sm text-tertiary-lighter shadow-sm transition-colors placeholder:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary dark:text-white dark:placeholder:text-text  dark:focus-visible:ring-text max-sm:h-10 ",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
