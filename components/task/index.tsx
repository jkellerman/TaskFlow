import { formatDate } from "@/lib/formatter";

import Icons from "../icons";
import Label from "./label";
import Progress from "./progress";

interface TaskProps {
	index: number;
	dueDate: string;
	format: "column" | "list";
	color: string[];
	title: string;
	description: string;
	labels: string[];
	subtasks: {
		title: string;
		isCompleted: boolean;
	}[];
}

export default function Task({ title, description, subtasks, color, index, format, labels, dueDate }: TaskProps) {
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
					color={color}
					index={index}
				/>
			</div>
		);
	}
}
