"use client";

import { useState } from "react";

import { Types } from "@/types";

import Icons from "../icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogPortal, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

interface CreateTaskFormProps {
	columns: Types.Columns[];
	triggerText: string;
	triggerVariant: "primary" | "secondary";
	status?: string;
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

const subTasksList = ["make a coffee", "drink coffee & smile"];

export default function CreateTaskForm({
	columns,
	triggerVariant = "primary",
	triggerText,
	status,
}: CreateTaskFormProps) {
	const [subTasks, setSubTasks] = useState(subTasksList);

	const addNewSubTask = () => {
		setSubTasks((prev) => [...prev, `make another one`]);
	};

	const removeSubTask = (indexToRemove: number) => {
		setSubTasks((prevSubTasks) => prevSubTasks.filter((_, index) => index !== indexToRemove));
	};

	return (
		<Dialog onOpenChange={(open) => !open && setSubTasks(subTasksList)}>
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
			<DialogPortal>
				<DialogContent>
					<DialogTitle>Create Task</DialogTitle>
					<Form>
						<FormField name="title">
							<div className="flex items-center gap-2">
								<FormLabel>title</FormLabel>
								<FormMessage match="valueMissing">Please enter a title</FormMessage>
							</div>

							<FormControl asChild>
								<Input type="text" required placeholder="e.g. take a coffee break" maxLength={150} />
							</FormControl>
						</FormField>
						<FormField name="description">
							<FormLabel>
								description <span className="ml-1 text-sm">(optional)</span>{" "}
							</FormLabel>
							<FormControl asChild>
								<Textarea
									placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
									maxLength={1000}
								/>
							</FormControl>
						</FormField>
						<div className="flex w-full gap-4">
							<FormField name="status" className="w-full flex-1">
								<FormLabel>status</FormLabel>
								<FormControl asChild>
									<Select defaultValue={status ? status : columns[0].name}>
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
										<Select>
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
						</div>
						<FormField name="subtasks" className="mb-0">
							<FormLabel>subtasks</FormLabel>
							{subTasks.map((subTask, i) => (
								<div key={i} className="mb-2 flex items-center gap-2">
									<FormControl asChild>
										<Input type="text" placeholder={`e.g ${subTask}`} maxLength={75} />
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
								<Icons icon="Plus" className="h-4 w-4" />
								Create Task
							</Button>
						</FormSubmit>
					</Form>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	);
}
