import { useState } from "react";

import { Types } from "@/types";
import clsx from "clsx";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface ModalProps {
	title: string;
	description: string;
	subtasks: {
		title: string;
		isCompleted: boolean;
	}[];
	status: string;
	columns: Types.Columns[];
}

export default function Modal({ title, description, subtasks, status, columns }: ModalProps) {
	const [tasks, setTasks] = useState(subtasks);

	const handleCheckboxChange = (index: number) => {
		const newTasks = [...tasks];
		newTasks[index].isCompleted = !newTasks[index].isCompleted;
		setTasks(newTasks);
	};

	return (
		<DialogContent className="max-w-[450px]">
			<div className="px-4">
				<DialogTitle className="mb-6 pt-4 text-start">{title}</DialogTitle>
				<DialogDescription className="mb-4">{description}</DialogDescription>

				{tasks.map((subtask, i) => (
					<div
						key={i}
						className="relative mb-2 flex w-full items-center gap-4 rounded-md border border-border bg-secondary-medium/70 px-4 py-2 transition duration-1000 last-of-type:mb-8 dark:border-tertiary-medium dark:bg-tertiary-medium"
					>
						<Checkbox id={`c${i + 1}`} checked={subtask.isCompleted} onCheckedChange={() => handleCheckboxChange(i)} />
						<label
							className={clsx(
								"cursor-pointer text-sm text-tertiary-lighter before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-red-400 before:bg-transparent before:content-[''] dark:text-white",
								{
									"text-text line-through dark:text-text": subtask.isCompleted,
								}
							)}
							htmlFor={`c${i + 1}`}
						>
							{subtask.title}
						</label>
					</div>
				))}

				<Select defaultValue={status}>
					<SelectTrigger className="mb-4 w-full ">
						<SelectValue placeholder="Select..." />
					</SelectTrigger>
					<SelectContent className=" w-[240px] sm:w-[368px]">
						{columns.map((column, i) => (
							<SelectItem key={i} value={column.name}>
								{column.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Button variant="secondary" className="w-full">
					Save changes
				</Button>
			</div>
		</DialogContent>
	);
}
