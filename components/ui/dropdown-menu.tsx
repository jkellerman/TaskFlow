import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, forwardedRef) => {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				className={cn(
					"rounded-md border border-border bg-white px-1 py-2 shadow-md dark:bg-tertiary-lighter",
					className
				)}
				{...props}
				ref={forwardedRef}
				sideOffset={sideOffset}
			/>
		</DropdownMenuPrimitive.Portal>
	);
});

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
	return (
		<DropdownMenuPrimitive.Item
			className={cn(
				" flex h-6 cursor-pointer select-none items-center rounded-sm py-4 pl-4 pr-8 text-sm text-tertiary-lighter outline-none dark:text-white ",
				className
			)}
			{...props}
			ref={forwardedRef}
		/>
	);
});

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup };
