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
	{ name: "anon", color: "octonary" },
];

interface LabelsProps {
	isExpanded: boolean;
}

export default function Labels({ isExpanded }: LabelsProps) {
	return (
		<div>
			<h2 className=" mb-2 whitespace-nowrap pl-[6px] text-sm">Labels</h2>
			<ul>
				{boardLabels.map((label, i) => (
					<li key={i} className="flex items-center ">
						<div className="flex max-w-[190px] items-center gap-x-3 px-4 py-2">
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

							<span
								className={`text-tertiary-dark w-full origin-left truncate font-medium capitalize transition-transform duration-500  ${!isExpanded && "scale-0"}`}
							>
								{label.name}
							</span>
						</div>
					</li>
				))}
			</ul>
			<Button className="gap-x-3" variant="ghost" size="md">
				<span className="min-h-6 min-w-6">
					<Icons icon="Plus" className="h-6 w-6" />
				</span>
				<span
					className={`text-tertiary-dark origin-left truncate  font-medium transition-transform duration-500  ${!isExpanded && "scale-0"}`}
				>
					Create New
				</span>
			</Button>
		</div>
	);
}
