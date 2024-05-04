"use client";

import { useState } from "react";

import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";

import Projects from "../projects";
import Icons from "./icons";
import Logo from "./logo";
import NavLinks from "./nav-links";

export default function SideNav() {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<div
			className={`relative h-screen border-r border-border bg-white p-7 pt-9 transition-width duration-500 dark:bg-tertiary-darker ${isExpanded ? "w-60" : " w-[115px]"}`}
		>
			<button
				onClick={handleClick}
				className={clsx(
					"absolute -right-4 top-9 hidden h-[30px] w-[30px] items-center justify-center rounded-full border border-secondary-darker bg-secondary-medium hover:border-primary hover:bg-secondary-darker hover:text-tertiary-darker hover:transition-colors dark:border-text dark:bg-tertiary-darker dark:hover:bg-tertiary-lighter dark:hover:text-white lg:flex",
					{
						"rotate-180 transition-transform duration-500": !isExpanded,
					}
				)}
			>
				<Icons icon="ChevronLeft" />
			</button>
			<div className="mb-10 flex items-center gap-x-4">
				<div className="pl-3 ">
					<Logo className="h-9 w-9" />
				</div>

				<span
					className={`origin-left text-xl font-bold text-tertiary-darker transition-transform duration-500 dark:text-white ${!isExpanded && "scale-0"}`}
				>
					TaskFlow
				</span>
			</div>
			<NavLinks isExpanded={isExpanded} />
			<Separator.Root decorative orientation="horizontal" className="my-8 h-[1px] w-full bg-border" />
			<Projects isExpanded={isExpanded} />
		</div>
	);
}
