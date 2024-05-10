import Progress from "./progress";

interface TaskProps {
	index: number;
	format: "column" | "list";
	color: string[];
	title: string;
	description: string;
	subtasks: {
		title: string;
		isCompleted: boolean;
	}[];
}

export default function Task({ title, description, subtasks, color, index, format }: TaskProps) {
	const numOfCompletedSubTasks = subtasks.filter((subtask) => subtask.isCompleted).length;

	if (format === "column") {
		return (
			<div className="mb-4 max-w-72 rounded-[10px] border-2 border-border bg-white p-6 transition-colors dark:bg-tertiary-lighter">
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
