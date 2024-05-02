"use client";

import { useState } from "react";

import clsx from "clsx";

import Icons from "./icons";
import NavLinks from "./nav-links";

export default function SideNav() {
	const [isExpanded, setIsExpanded] = useState(true);

	const handleClick = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<>
			<button
				onClick={handleClick}
				className="absolute left-[100px] top-8 flex min-h-[30px] min-w-[30px] items-center justify-center rounded-full border border-text bg-background text-white hover:border-primary hover:bg-secondary-darker hover:transition dark:hover:bg-tertiary-lighter lg:left-[220px]"
			>
				<Icons icon="ChevronLeft" className=" text-tertiary-darker dark:text-white" />
			</button>
			<div
				className={clsx("relative border-r border-border bg-background transition-all  lg:pt-12", {
					"w-0 min-w-0 border-none": !isExpanded,
					"w-[115px] min-w-[115px] lg:w-[236px] lg:min-w-[236px]": isExpanded,
				})}
			>
				<div className="flex h-full flex-col items-center ">
					<NavLinks isExpanded={isExpanded} />
				</div>
			</div>
		</>
	);
}
