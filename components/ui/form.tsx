"use client";

import * as React from "react";

import * as FormPrimitive from "@radix-ui/react-form";
import { cn } from "@/lib/utils";

const Form = FormPrimitive.Root;

const FormControl = FormPrimitive.Control;

const FormSubmit = FormPrimitive.Submit;

const FormField = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Field>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Field>
>(({ className, ...props }, ref) => (
	<>
		<FormPrimitive.Field ref={ref} className={cn("mb-4 flex flex-col ", className)} {...props} />
	</>
));
FormField.displayName = FormPrimitive.Field.displayName;

const FormLabel = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Label>
>(({ className, ...props }, ref) => (
	<>
		<FormPrimitive.Label
			ref={ref}
			className={cn("mb-2 font-medium capitalize text-tertiary-lighter dark:text-white", className)}
			{...props}
		/>
	</>
));
FormLabel.displayName = FormPrimitive.Label.displayName;

const FormMessage = React.forwardRef<
	React.ElementRef<typeof FormPrimitive.Message>,
	React.ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ className, ...props }, ref) => (
	<>
		<FormPrimitive.Message ref={ref} className={cn("mb-2 text-sm italic text-destructive", className)} {...props} />
	</>
));
FormMessage.displayName = FormPrimitive.Message.displayName;

export { Form, FormField, FormControl, FormLabel, FormMessage, FormSubmit };
