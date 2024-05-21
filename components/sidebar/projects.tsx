import Link from "next/link";

import Icons from "../icons";
import { Button } from "../ui/button";
import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const projects = [{ name: "platform launch" }];

export default function Projects() {
	return (
		<>
			<h2 className=" mb-2 text-sm">Projects</h2>
			<ul>
				{projects.map((project, i) => (
					<TooltipProvider key={i}>
						<Tooltip delayDuration={150}>
							<TooltipTrigger asChild>
								<li className="hover:text-tertiary-darker hover:transition-colors dark:hover:text-white">
									<Button asChild variant="ghost" size="md">
										<Link href={`/board/${encodeURIComponent(project.name)}`}>
											<Icons icon="Folder" className="h-6 w-6" />
										</Link>
									</Button>
								</li>
							</TooltipTrigger>

							<TooltipContent
								side="right"
								sideOffset={4}
								className="z-50 animate-enter-l rounded-md bg-tertiary-lighter px-4 py-1 capitalize text-white dark:bg-white dark:text-tertiary-darker"
							>
								{project.name}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
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
						Create new project
						<TooltipArrow className=" fill-tertiary-darker dark:fill-white" />
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</>
	);
}
