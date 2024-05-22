"use client";

import * as React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max, style, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn(
			"h-[5px] w-full rounded-md bg-secondary-medium transition-colors dark:bg-tertiary-lighter",
			className
		)}
		{...props}
		value={value}
		max={max}
	>
		<ProgressPrimitive.Indicator className="h-full rounded-md transition-width duration-500" style={style} />
	</ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
