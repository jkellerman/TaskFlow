import React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

/**
 * Primary variant needs "bg-size-200" added to classNames for gradient effect to work, for some reason bg-size gets discarded from the classList using cva
 * E.g 			<Button className="gap-2 bg-size-200">
					Create Task
					<Icons icon="Plus" className="h-3 w-3 hover:bg-pos-100" />
				</Button>
 */

const buttonVariants = cva("inline-flex items-center rounded-md", {
	variants: {
		variant: {
			primary:
				"bg-gradient-to-t from-primary-darker via-primary to-primary-darker  bg-pos-0 border-primary-lighter text-primary-foreground border-t transition-background-position duration-300 hover:bg-pos-100",
			destructive: "bg-destructive text-white text-sm hover:bg-destructive/85 transition-colors duration-300",
			ghost: "max-w-[190px] hover:text-tertiary-darker dark:hover:text-white",
		},
		size: {
			default: "px-5 py-2 text-sm",
			sm: "px-3 py-2",
			md: "px-4 py-2",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	}
);

Button.displayName = "Button";

export { Button, buttonVariants };
