import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import clsx from "clsx";

import Icons from "../icons";
import { Button } from "../ui/button";

const boardLabels = [
	{ name: "development", color: null },
	{ name: "ui design", color: "secondary" },
	{ name: "research", color: "tertiary" },
	{ name: "testing", color: "quaternary" },
	{ name: "marketing", color: "quinary" },
	{ name: "sales", color: "senary" },
	{ name: "devops", color: "septenary" },
	{ name: "ad hoc", color: "octonary" },
];

export default function Labels() {
	return (
		<div>
			<h2 className=" mb-2 whitespace-nowrap pl-[6px] text-sm">Labels</h2>
			<ul>
				{boardLabels.map((label, i) => (
					<li key={i}>
						<div className="max-w-[190px] items-center px-4 py-2">
							<span
								className={clsx(" min-h-6 min-w-6 ", {
									"text-label-fg": !label.color || label.color === "default",
									"text-label-secondary-fg": label.color === "secondary",
									"text-label-tertiary-fg": label.color === "tertiary",
									"text-label-quaternary-fg": label.color === "quaternary",
									"text-label-quinary-fg": label.color === "quinary",
									"text-label-senary-fg": label.color === "senary",
									"text-label-septenary-fg": label.color === "septenary",
									"text-label-octonary-fg": label.color === "octonary",
								})}
							>
								<Icons icon="Dot" className="h-6 w-6" />
							</span>
						</div>
					</li>
				))}
			</ul>
			<TooltipProvider>
				<Tooltip delayDuration={700}>
					<TooltipTrigger asChild>
						<Button className="text-base" variant="ghost" size="md">
							<Icons icon="Plus" className=" h-6 w-6 " />
						</Button>
					</TooltipTrigger>

					<TooltipContent className="rounded-md bg-tertiary-darker p-2 text-xs text-white dark:bg-white dark:text-tertiary-lighter">
						Create new label
						<TooltipArrow className=" fill-tertiary-darker dark:fill-white" />
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
