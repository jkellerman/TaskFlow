"use client";

import * as React from "react";

import * as AlertPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";

const Alert = AlertPrimitive.Root;

const AlertTrigger = AlertPrimitive.Trigger;

const AlertPortal = AlertPrimitive.Portal;

const AlertCancel = AlertPrimitive.Cancel;

const AlertAction = AlertPrimitive.Action;

const AlertOverlay = React.forwardRef<
	React.ElementRef<typeof AlertPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof AlertPrimitive.Overlay>
>(({ className, children, ...props }, forwardedRef) => (
	<>
		<AlertPrimitive.Overlay
			ref={forwardedRef}
			className={cn("fixed inset-0 animate-fade bg-tertiary/50 duration-150 dark:bg-tertiary/70", className)}
			{...props}
		>
			{children}
		</AlertPrimitive.Overlay>
	</>
));
AlertOverlay.displayName = AlertPrimitive.Overlay.displayName;

const AlertContent = React.forwardRef<
	React.ElementRef<typeof AlertPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AlertPrimitive.Content>
>(({ className, children, ...props }, forwardedRef) => (
	<AlertPortal>
		<AlertOverlay />
		<AlertPrimitive.Content
			ref={forwardedRef}
			className={cn(
				"fixed left-1/2 top-1/2 w-[90vw] max-w-[550px] -translate-x-1/2 -translate-y-1/2 transform animate-content-show rounded-md border-t border-border bg-white p-6 shadow-lg dark:bg-tertiary-lighter",
				className
			)}
			{...props}
		>
			{children}
		</AlertPrimitive.Content>
	</AlertPortal>
));
AlertContent.displayName = AlertPrimitive.Content.displayName;

const AlertTitle = React.forwardRef<
	React.ElementRef<typeof AlertPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof AlertPrimitive.Title>
>(({ className, ...props }, forwardedRef) => (
	<AlertPrimitive.Title
		ref={forwardedRef}
		className={cn("text-center text-lg font-bold text-tertiary-lighter dark:text-white", className)}
		{...props}
	/>
));
AlertTitle.displayName = AlertPrimitive.Title.displayName;

const AlertDescription = React.forwardRef<
	React.ElementRef<typeof AlertPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof AlertPrimitive.Description>
>(({ className, ...props }, forwardedRef) => (
	<AlertPrimitive.Description
		ref={forwardedRef}
		className={cn("text-muted-foreground text-sm", className)}
		{...props}
	/>
));
AlertDescription.displayName = AlertPrimitive.Description.displayName;

export {
	Alert,
	AlertPortal,
	AlertOverlay,
	AlertTrigger,
	AlertContent,
	AlertTitle,
	AlertDescription,
	AlertCancel,
	AlertAction,
};
