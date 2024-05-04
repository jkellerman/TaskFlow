import Link from "next/link";

import Icons from "./ui/icons";

interface ProjectsProps {
	isExpanded: boolean;
}

const projects = [{ name: "platform launch" }];

export default function Projects({ isExpanded }: ProjectsProps) {
	return (
		<>
			<h2 className=" mb-2 text-sm">Projects</h2>
			<ul>
				{projects.map((project, i) => (
					<li
						key={i}
						className="relative flex items-center rounded-md transition-colors hover:text-tertiary-darker dark:hover:text-white"
					>
						<Link
							href={`board/${project.name}`}
							className="flex max-w-[190px] items-center gap-x-3 px-4 py-2 after:absolute after:h-full after:w-full after:content-['']"
						>
							<span className="min-h-6 min-w-6">
								<Icons icon="Folder" className="h-6 w-6" />
							</span>

							<span
								className={`text-tertiary-dark w-full origin-left  truncate font-medium capitalize transition-transform duration-500  dark:hover:text-white ${!isExpanded && "scale-0"}`}
							>
								{project.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
			<button className="flex max-w-[190px] items-center gap-x-3 px-4 py-2 hover:text-tertiary-darker dark:hover:text-white">
				<span className="min-h-6 min-w-6">
					<Icons icon="Plus" className=" h-6 w-6 " />
				</span>
				<span
					className={`text-tertiary-dark origin-left truncate  font-medium transition-transform duration-500  ${!isExpanded && "scale-0"}`}
				>
					Create New
				</span>
			</button>
		</>
	);
}
