import Link from "next/link";

import Icons from "./icons";

const labels = [{ name: "Development" }, { name: "UI Design" }, { name: "Testing" }, { name: "Research" }];

interface LabelsProps {
	isExpanded: boolean;
}

export default function Labels({ isExpanded }: LabelsProps) {
	return (
		<div>
			<h2 className=" mb-2 whitespace-nowrap pl-[6px] text-sm">Labels</h2>
			<ul>
				{labels.map((project, i) => (
					<li key={i} className="flex items-center ">
						<div className="flex max-w-[190px] items-center gap-x-3 px-4 py-2">
							<span className="min-h-6 min-w-6 text-secondary-darker dark:text-text">
								<Icons icon="Dot" className="h-6 w-6" />
							</span>

							<span
								className={`text-tertiary-dark w-full origin-left  truncate font-medium capitalize transition-transform duration-500  ${!isExpanded && "scale-0"}`}
							>
								{project.name}
							</span>
						</div>
					</li>
				))}
			</ul>
			<button className="flex max-w-[190px] items-center gap-x-3 px-4 py-2 hover:text-tertiary-darker dark:hover:text-white">
				<span className="min-h-6 min-w-6">
					<Icons icon="Plus" className="h-6 w-6" />
				</span>
				<span
					className={`text-tertiary-dark origin-left truncate  font-medium transition-transform duration-500  ${!isExpanded && "scale-0"}`}
				>
					Create New
				</span>
			</button>
		</div>
	);
}
