"use client";

import * as React from "react";
import { useState } from "react";

import { Types } from "@/types";

import Icons from "../icons";
import ModalForm from "../modal/form";
import { Alert, AlertAction, AlertCancel, AlertContent, AlertDescription, AlertTitle, AlertTrigger } from "../ui/alert";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface EditTaskProps {
	title: string;
	description: string;
	subTaskList: {
		title: string;
		isCompleted: boolean;
	}[];
	status: string;
	columns: Types.Columns[];
	labels: string[];
	date: string;
}

export default function EditTask({ title, description, subTaskList, status, columns, labels, date }: EditTaskProps) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [hasOpenDialog, setHasOpenDialog] = useState(false);

	const [subTasks, setSubTasks] = useState(subTaskList);
	const [dueDate, setDueDate] = useState<Types.dueDate>({
		startDate: new Date(date),
		endDate: new Date(date),
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

	const handleDialogItemSelect = (e: Event) => {
		e.preventDefault();
	};

	const handleDialogItemOpenChange = (open: boolean) => {
		setHasOpenDialog(open);
		if (open === false) {
			setDropdownOpen(false);
		}
		setSubTasks(subTaskList);
	};

	return (
		<>
			<DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
				<DropdownMenuTrigger asChild>
					<span className="max-h-[24px] cursor-pointer hover:text-tertiary-darker dark:transition-colors dark:hover:text-white">
						<Icons icon="Ellipsis" className="h-6 w-6" />
					</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[175px]" hidden={hasOpenDialog}>
					<Dialog onOpenChange={handleDialogItemOpenChange}>
						<DialogTrigger asChild>
							<DropdownMenuItem className="group data-[highlighted]:text-primary" onSelect={handleDialogItemSelect}>
								<Icons
									icon="Mark"
									className="h-5 w-5 pr-2 opacity-0 transition  duration-300 group-hover:opacity-100"
								/>
								<span className="-translate-x-4 transition duration-300 group-hover:translate-x-0">Edit Task</span>
							</DropdownMenuItem>
						</DialogTrigger>
						<DialogContent>
							<DialogTitle>Edit Task</DialogTitle>
							<ModalForm
								type="edit"
								title={title}
								description={description}
								subTasks={subTasks}
								status={status}
								labels={labels}
								columns={columns}
								dueDate={dueDate}
								handleDateChange={handleDateChange}
								addNewSubTask={addNewSubTask}
								removeSubTask={removeSubTask}
							/>
						</DialogContent>
					</Dialog>
					<Alert onOpenChange={handleDialogItemOpenChange}>
						<AlertTrigger>
							<DropdownMenuItem
								className="group text-destructive dark:text-destructive"
								onSelect={handleDialogItemSelect}
							>
								<Icons
									icon="Mark"
									className="h-5 w-5 pr-2 opacity-0 transition  duration-300 group-hover:opacity-100"
								/>
								<span className="-translate-x-4 transition duration-300 group-hover:translate-x-0">Delete Task</span>
							</DropdownMenuItem>
						</AlertTrigger>
						<AlertContent>
							<AlertTitle className="mb-4">Delete Task</AlertTitle>
							<AlertDescription className="mb-8 px-4">
								Are you sure you want to delete the {`'${title}'`} task and its subtasks? This action cannot be
								reversed.
							</AlertDescription>
							<div className="flex w-full gap-4">
								<AlertCancel asChild>
									<Button className="flex-1 bg-tertiary-lighter hover:bg-tertiary-lighter/80" variant="secondary">
										Cancel
									</Button>
								</AlertCancel>
								<AlertAction asChild>
									<Button className="flex-1" variant="destructive">
										Delete Task
									</Button>
								</AlertAction>
							</div>
						</AlertContent>
					</Alert>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
