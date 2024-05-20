"use client";

import { useState } from "react";

import { Types } from "@/types";

import Icons from "../icons";
import ModalForm from "../modal/form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

interface DueDate {
	startDate: Date | null;
	endDate: Date | null;
}

interface CreateTaskFormProps {
	columns: Types.Columns[];
	triggerText: string;
	triggerVariant: "primary" | "secondary";
	status?: string;
}

const subTasksList = [
	{ title: "", isCompleted: false },
	{ title: "", isCompleted: false },
];

export default function CreateTask({ columns, triggerVariant = "primary", triggerText, status }: CreateTaskFormProps) {
	const [subTasks, setSubTasks] = useState(subTasksList);
	const [dueDate, setDueDate] = useState<DueDate>({
		startDate: null,
		endDate: null,
	});
	const addNewSubTask = () => {
		setSubTasks((prev) => [...prev, { title: "", isCompleted: false }]);
	};

	const removeSubTask = (indexToRemove: number) => {
		setSubTasks((prevSubTasks) => prevSubTasks.filter((_, index) => index !== indexToRemove));
	};

	const handleDateChange = (newDate: any) => {
		setDueDate(newDate);
	};

	const handleDialogItemOpenChange = (open: boolean) => {
		if (!open) {
			setSubTasks(subTasksList);
			handleDateChange({ startDate: null, endDate: null });
		}
	};

	return (
		<Dialog onOpenChange={handleDialogItemOpenChange}>
			<DialogTrigger asChild>
				{triggerVariant === "primary" ? (
					<Button className="gap-2 bg-size-200 py-3 sm:py-2">
						<span className="hidden sm:inline-block">{triggerText}</span>
						<Icons icon="Plus" className=" h-3 w-3 hover:bg-pos-100" />
					</Button>
				) : (
					<button className="mb-4 flex w-full items-center justify-center gap-2 rounded-[10px] border-2 border-dotted border-border bg-white py-3 text-center text-sm transition-colors hover:text-tertiary-darker hover:transition-colors dark:bg-tertiary-medium dark:hover:text-white">
						{triggerText}
						<Icons icon="Plus" className="h-3 w-3" />
					</button>
				)}
			</DialogTrigger>

			<DialogContent>
				<DialogTitle>Create Task</DialogTitle>
				<ModalForm
					type="create"
					subTasks={subTasks}
					status={status}
					columns={columns}
					dueDate={dueDate}
					handleDateChange={handleDateChange}
					addNewSubTask={addNewSubTask}
					removeSubTask={removeSubTask}
				/>
			</DialogContent>
		</Dialog>
	);
}
