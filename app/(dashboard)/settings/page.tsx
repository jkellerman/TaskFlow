"use client";

import { useRouter } from "next/navigation";

import Icons from "@/components/icons";
import ThemeProvider from "@/components/theme";
import {
	Alert,
	AlertAction,
	AlertCancel,
	AlertContent,
	AlertDescription,
	AlertTitle,
	AlertTrigger,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Settings() {
	const router = useRouter();
	return (
		<div className="relative flex w-full flex-col items-center justify-center gap-12  pt-12 text-tertiary-lighter  dark:text-white">
			<button
				type="button"
				onClick={() => router.back()}
				className="dark absolute left-48 top-12 flex items-center text-sm text-text hover:text-tertiary-lighter hover:transition-colors dark:text-text dark:hover:text-white"
			>
				<Icons icon="ArrowLeft" className="h-6 w-6" />
				Back
			</button>
			<div className=" w-[90%] max-w-[600px] rounded-xl border border-border bg-white p-8 dark:bg-tertiary-medium">
				<h2 className="mb-4 text-xl font-bold ">Account</h2>
				<div className="item-center mb-4 flex flex-col gap-6 sm:flex-row">
					<div className="flex flex-1 flex-col gap-y-2">
						<Label htmlFor="firstName">First Name</Label>
						<Input type="text" placeholder="Joe" id="firstName" />
					</div>
					<div className=" flex flex-1 flex-col gap-y-2">
						<Label htmlFor="lastName">Last Name</Label>
						<Input type="text" placeholder="Bloggs" id="lastName" />
					</div>
				</div>
				<div className="flex w-full flex-col gap-y-2 sm:max-w-64">
					<Label>Email</Label>
					<Input
						type="email"
						defaultValue="joeBloggs@gmail.com"
						disabled
						className="bg-secondary-medium text-text/50 dark:bg-tertiary-lighter dark:text-text/50"
					/>
				</div>
			</div>
			<div className="w-[90%] max-w-[600px] rounded-xl border border-border bg-white p-8 dark:bg-tertiary-medium">
				<h2 className="mb-4 text-xl font-bold">Appearance</h2>
				<p className="mb-8 text-text">This will change the theme across the entire app</p>
				<div className="item-center flex gap-6">
					<ThemeProvider />
				</div>
			</div>
			<div className=" mb-8 w-[90%] max-w-[600px] rounded-xl border border-destructive bg-transparent">
				<div className="border-b border-border">
					<h2 className=" px-8 py-4 text-xl font-bold">Delete account</h2>
				</div>

				<div className="item-center flex gap-6 px-8 py-4 dark:text-text">
					<p>Permanently delete your account and all it&apos;s associated data, this action cannot be undone.</p>
				</div>
				<div className="item-center flex justify-end gap-6 rounded-b-xl bg-secondary-medium px-8 py-4 dark:bg-tertiary-medium dark:text-text">
					<Alert>
						<AlertTrigger>
							<Button variant="destructive">Delete Account</Button>
						</AlertTrigger>
						<AlertContent className="border px-8 dark:border-destructive">
							<AlertTitle className="mb-4">Delete Account</AlertTitle>
							<AlertDescription className="mb-4">
								Type this account email to delete your account and it&apos;s data. This action cannot be undone.
							</AlertDescription>

							<Input type="email" required placeholder="e.g. joebloggs@gmail.com" className="mb-8" />

							<div className="flex w-full gap-4">
								<AlertCancel asChild>
									<Button className="flex-1 bg-tertiary-lighter hover:bg-tertiary-lighter/80" variant="secondary">
										Cancel
									</Button>
								</AlertCancel>
								<AlertAction asChild>
									<Button className="flex-1" variant="destructive">
										Delete Account
									</Button>
								</AlertAction>
							</div>
						</AlertContent>
					</Alert>
				</div>
			</div>
		</div>
	);
}
