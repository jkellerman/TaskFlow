import Label from "./label";
import Progress from "./progress";

interface TaskProps {
	index: number;
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

/**
 * User functional requirements for adding labels
 * User clicks add new label
 * Types in the name of label and assigns it a colour
 * That is then sent to database which assigns the label to a list of labels associated with that board
 * Adds that new label to list of labels
 * When creating a task, user selects a label from predefined set a labels
 * Those labels get rendered in the card with the name and colour
 *  */

export default function Task({ title, description, subtasks, color, index, format, labels }: TaskProps) {
	const numOfCompletedSubTasks = subtasks.filter((subtask) => subtask.isCompleted).length;

	if (format === "column") {
		return (
			<div className="mb-4 max-w-80 rounded-[10px] border border-border bg-white p-6 transition-colors dark:bg-tertiary-medium dark:drop-shadow-md">
				<Label label={labels} />
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
