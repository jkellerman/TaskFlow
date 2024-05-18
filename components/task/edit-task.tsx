"use client";

import * as React from "react";
import { useRef, useState } from "react";

import { Types } from "@/types";
import Datepicker from "react-tailwindcss-datepicker";

import Icons from "../icons";
import { Alert, AlertAction, AlertCancel, AlertContent, AlertDescription, AlertTitle, AlertTrigger } from "../ui/alert";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogPortal, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

interface DueDate {
	startDate: Date | null;
	endDate: Date | null;
}

interface EditTaskProps {
	title: string;
	description: string;
	subtasks: {
		title: string;
		isCompleted: boolean;
	}[];
	status: string;
	columns: Types.Columns[];
	labels: string[];
	date: string;
}

const boardLabels = [
	{ name: "development", color: null },
	{ name: "ui design", color: "secondary" },
	{ name: "research", color: "tertiary" },
	{ name: "testing", color: "quaternary" },
	{ name: "marketing", color: "quinary" },
	{ name: "sales", color: "senary" },
	{ name: "devops", color: "septenary" },
	{ name: "ad hoc", color: "octonary" },
];

export default function EditTask({ title, description, subtasks, status, columns, labels, date }: EditTaskProps) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [hasOpenDialog, setHasOpenDialog] = useState(false);

	const [subTasks, setSubTasks] = useState(subtasks);
	const [dueDate, setDueDate] = useState<DueDate>({
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
		setSubTasks(subtasks);
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
							<Form>
								<FormField name="title">
									<div className="flex items-center gap-2">
										<FormLabel>title</FormLabel>
										<FormMessage match="valueMissing">Please enter a title</FormMessage>
									</div>
									<FormControl asChild>
										<Input
											type="text"
											defaultValue={title}
											required
											placeholder="e.g. take a coffee break"
											maxLength={150}
										/>
									</FormControl>
								</FormField>
								<FormField name="description">
									<FormLabel>description</FormLabel>
									<FormControl asChild>
										<Textarea
											placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
											defaultValue={description}
											maxLength={1000}
										/>
									</FormControl>
								</FormField>
								<div className="flex w-full gap-4">
									<FormField name="status" className="w-full flex-1">
										<FormLabel>status</FormLabel>
										<FormControl asChild>
											<Select defaultValue={status}>
												<SelectTrigger>
													<SelectValue placeholder="Select..." />
												</SelectTrigger>
												<SelectContent>
													{columns.map((column, i) => (
														<SelectItem key={i} value={column.name}>
															{column.name}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormControl>
									</FormField>
									{boardLabels.length > 0 && (
										<FormField name="label" className="flex-1">
											<FormLabel>Label</FormLabel>
											<FormControl asChild>
												<Select defaultValue={labels[0]}>
													<SelectTrigger>
														<SelectValue placeholder="Select..." />
													</SelectTrigger>
													<SelectContent>
														{boardLabels.map((label, i) => (
															<SelectItem key={i} value={label.name}>
																{label.name}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormControl>
										</FormField>
									)}
									<FormField name="due date" className="w-full flex-1">
										<FormLabel>Due Date</FormLabel>
										<FormControl asChild>
											<Datepicker
												value={dueDate}
												onChange={handleDateChange}
												useRange={false}
												asSingle={true}
												displayFormat={"DD/MM/YYYY"}
												primaryColor={"violet"}
												inputClassName=" dark:bg-tertiary-lighter border border-border p-2 py-2 rounded-md text-sm text-tertiary-lighter dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
												popoverDirection="up"
											/>
										</FormControl>
									</FormField>
								</div>
								<FormField name="subtasks" className="mb-0">
									<FormLabel>Sub Tasks</FormLabel>
									{subTasks.map((subTask, i) => (
										<div key={i} className="mb-2 flex items-center gap-2">
											<FormControl asChild>
												<Input type="text" defaultValue={subTask.title} maxLength={75} />
											</FormControl>
											<button
												className="hover:text-tertiary-lighter hover:transition-colors dark:hover:text-white"
												onClick={() => removeSubTask(i)}
												type="button"
											>
												<Icons icon="Cross" className="h-6 w-6" />
											</button>
										</div>
									))}
								</FormField>
								<Button className="mb-4 w-full gap-2" variant="ghost" type="button" onClick={addNewSubTask}>
									<Icons icon="Plus" className="h-4 w-4" />
									Add a new subtask
								</Button>
								<FormSubmit asChild>
									<Button className="w-full " variant="secondary">
										Save changes
									</Button>
								</FormSubmit>
							</Form>
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
