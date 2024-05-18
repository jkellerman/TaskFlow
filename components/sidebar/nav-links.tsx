import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import Icons from "../icons";
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const Links = [
	{ name: "Workspace", href: "/workspace", icon: "Dashboard" as const },
	{ name: "Board", href: "/board", icon: "Board" as const },
	{ name: "Insights", href: "/insights", icon: "Analytics" as const },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="text-text">
				{Links.map((link, i) => (
					<TooltipProvider key={i}>
						<Tooltip delayDuration={150}>
							<TooltipTrigger asChild>
								<li
									className={clsx(`mb-4 rounded-md last:mb-0`, {
										"border-t border-primary-lighter bg-primary text-primary-foreground transition-colors dark:border-tertiary-lighter dark:bg-tertiary-medium dark:text-white":
											pathname === link.href,
										"border-t border-transparent hover:bg-secondary-medium hover:text-primary hover:transition-colors hover:duration-300 dark:hover:bg-tertiary-lighter dark:hover:text-white":
											pathname !== link.href,
									})}
								>
									<Link
										href={link.href}
										className="relative flex items-center justify-center px-4 py-2 after:absolute after:h-full after:w-full after:content-['']"
									>
										<Icons icon={link.icon} className="h-6 w-6" />
									</Link>
								</li>
							</TooltipTrigger>
							<TooltipPortal>
								<TooltipContent
									side="right"
									sideOffset={10}
									className="animate-enter-l rounded-md bg-tertiary-lighter px-4 py-1 text-white dark:bg-white dark:text-tertiary-darker"
								>
									{link.name}
								</TooltipContent>
							</TooltipPortal>
						</Tooltip>
					</TooltipProvider>
				))}
			</ul>
		</nav>
	);
}
