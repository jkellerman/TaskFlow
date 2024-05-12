"use client";

import Logo from "../logo";
import { Separator } from "../ui/separator";
import Labels from "./labels";
import NavLinks from "./nav-links";
import Projects from "./projects";

export default function SideNav() {
	return (
		<div className="flex w-[120px] min-w-[120px] flex-col items-center overflow-y-scroll border-r border-border bg-white py-9 transition-colors dark:bg-tertiary-darker">
			<div className="mb-10 text-tertiary-darker dark:text-white">
				<Logo className="h-8 w-8" />
			</div>
			<NavLinks />
			<Separator decorative orientation="horizontal" />
			<Projects />
			<Separator decorative orientation="horizontal" />
			<Labels />
		</div>
	);
}
