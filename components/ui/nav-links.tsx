"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import Icons from "../icons";

interface NavLinksProps {
	isExpanded: boolean;
}

const Links = [
	{ name: "Workspace", href: "/workspace", icon: "Dashboard" as const },
	{ name: "Board", href: "/board", icon: "Board" as const },
	{ name: "Insights", href: "/insights", icon: "Analytics" as const },
];

export default function NavLinks({ isExpanded }: NavLinksProps) {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="text-text">
				{Links.map((link, i) => (
					<li
						key={i}
						className={clsx(`relative mb-4 flex items-center rounded-md`, {
							"border-t border-primary-lighter bg-primary text-primary-foreground transition-colors dark:border-tertiary-lighter dark:bg-tertiary-medium dark:text-white":
								pathname === link.href,
							"border-t border-transparent hover:bg-secondary-medium hover:text-primary hover:transition-colors hover:duration-300 dark:hover:bg-tertiary-lighter dark:hover:text-white":
								pathname !== link.href,
						})}
					>
						<Link
							href={link.href}
							className="flex items-center gap-x-3 px-4 py-2 after:absolute after:h-full after:w-full after:content-['']"
						>
							<Icons icon={link.icon} className="h-6 w-6" />
							<span
								className={`text-tertiary-dark origin-left font-medium transition-transform duration-500  ${!isExpanded && "scale-0"}`}
							>
								{link.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
