import Link from "next/link";

import Icons from "./icons";
import { Button } from "./ui/button";

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
						className="relative flex items-center rounded-md hover:text-tertiary-darker hover:transition-colors dark:hover:text-white"
					>
						<Button asChild variant="ghost" size="md">
							<Link
								href={`board/${project.name}`}
								className="gap-x-3 after:absolute after:h-full after:w-full after:content-['']"
							>
								<span className="min-h-6 min-w-6">
									<Icons icon="Folder" className="h-6 w-6" />
								</span>

								<span
									className={`text-tertiary-dark w-full origin-left  truncate font-medium capitalize 
								transition-transform duration-500  dark:hover:text-white ${!isExpanded && "scale-0"}`}
								>
									{project.name}
								</span>
							</Link>
						</Button>
					</li>
				))}
			</ul>
			<Button className="gap-x-3 text-base" variant="ghost" size="md">
				<span className="min-h-6 min-w-6">
					<Icons icon="Plus" className=" h-6 w-6 " />
				</span>
				<span
					className={`text-tertiary-dark origin-left truncate  font-medium transition-transform duration-500  ${!isExpanded && "scale-0"}`}
				>
					Create New
				</span>
			</Button>
		</>
	);
}
