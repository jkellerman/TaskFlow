import { formatDate } from "@/lib/formatter";

import Icons from "../icons";
import Label from "./label";
import Progress from "./progress";

interface TaskProps {
	index?: number;
	dueDate: string;
	format: "column" | "list";
	color: string[] | string;
	title: string;
	description: string;
	labels: string[];
	status?: string;
	subtasks: {
		title: string;
		isCompleted: boolean;
	}[];
}

export default function Task({
	title,
	description,
	subtasks,
	color,
	index,
	format,
	labels,
	dueDate,
	status,
}: TaskProps) {
	const numOfCompletedSubTasks = subtasks.filter((subtask) => subtask.isCompleted).length;

	if (format === "column") {
		return (
			<div className="mb-4 max-w-80 rounded-[10px] border border-border bg-white p-6 transition-colors dark:bg-tertiary-medium dark:drop-shadow-md">
				<div className="mb-2 flex items-center justify-between">
					<div className=" flex flex-wrap items-center gap-2">
						<Label label={labels} />
						<span className="inline-flex rounded-2xl border  border-label bg-label-bg px-4 py-1 text-xs font-medium capitalize text-label-fg transition-colors dark:drop-shadow-md">
							{formatDate(dueDate)}
						</span>
					</div>
					<span className="hover:text-tertiary-darker dark:transition-colors dark:hover:text-white">
						<Icons icon="Ellipsis" className="h-6 w-6" />
					</span>
				</div>
				<h3 className="mb-2 font-bold text-tertiary-darker dark:text-white">{title}</h3>
				<p className="mb-4 text-xs"> {description}</p>

				<Progress
					numOfCompletedSubTasks={numOfCompletedSubTasks}
					numOfSubTasks={subtasks.length}
					color={color as string[]}
					index={index as number}
				/>
			</div>
		);
	} else if (format == "list") {
		return (
			<div className="flex h-[68px] items-center justify-between rounded-md border border-border bg-white px-4 py-4 transition-colors dark:bg-tertiary-medium md:px-8">
				<div className=" flex w-full items-center gap-4 sm:w-4/5 lg:w-1/2 xl:w-1/3">
					<div className="h-3 w-3 min-w-3 rounded-full" style={{ backgroundColor: color as string }}></div>
					<span className="truncate text-xs font-bold text-tertiary-lighter transition-colors dark:text-white md:text-base">
						{title}
					</span>
				</div>

				<p className=" hidden w-1/4 max-w-[250px] truncate text-sm transition-colors xl:block">{description}</p>

				<div className="hidden w-1/3 justify-between lg:flex">
					<div>
						<div className="   flex flex-wrap items-center gap-2">
							<Label label={labels} />
							<span className=" inline-flex rounded-2xl border border-label  bg-label-bg px-4 py-1 text-xs font-medium capitalize text-label-fg transition-colors dark:drop-shadow-md">
								{formatDate(dueDate)}
							</span>
						</div>
					</div>
					<div className="hidden items-center gap-4 xl:flex">
						<span className="text-xs">{status}</span>
						<span className="flex items-center gap-2 text-sm transition-colors">
							<Icons icon="List" className="h-4 w-4" />
							{numOfCompletedSubTasks}/{subtasks.length}
						</span>
					</div>
				</div>
				<span className=" animate-scale justify-items-end transition-colors dark:text-white">
					<Icons icon="ChevronRight" className="h-2 w-2" />
				</span>
			</div>
		);
	} else {
		return <div>An error occurred. Trouble loading tasks...</div>;
	}
}
