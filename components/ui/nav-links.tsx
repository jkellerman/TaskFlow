"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import Icons from "./icons";

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
		<ul className=" flex w-full flex-col items-center ">
			{Links.map((link, i) => (
				<li
					key={i}
					className={clsx("relative w-full ", {
						"lg:bg-primary": pathname === link.href,
						"lg:hover:bg-secondary-darker lg:hover:transition lg:dark:hover:bg-secondary lg:hover:[&>a]:text-primary lg:dark:hover:[&>a]:text-primary":
							pathname !== link.href,
					})}
				>
					{isExpanded && (
						<Link
							href={link.href}
							className={clsx(
								" flex w-full items-center justify-center py-4 text-xl font-bold text-text transition  lg:justify-start lg:gap-4 lg:pl-8",
								{
									" text-white": pathname === link.href,
								}
							)}
						>
							<span>
								<Icons
									icon={link.icon}
									className={clsx({
										" h-6 w-6": link.icon === "Dashboard",
										" h-[25px] w-[25px]": link.icon === "Board",
										" h-[13px] w-[26px]": link.icon === "Analytics",
									})}
								/>
							</span>
							<span className="hidden lg:inline-block">{link.name}</span>
						</Link>
					)}
				</li>
			))}
		</ul>
	);
}
