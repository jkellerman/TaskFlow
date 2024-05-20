import Icons from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getOrdinal } from "@/lib/formatter";
import { Types } from "@/types";
import Datepicker from "react-tailwindcss-datepicker";

interface ModalFormProps {
	type: "create" | "edit";
	title?: string;
	description?: string;
	subTasks: {
		title: string;
		isCompleted: boolean;
	}[];
	status?: string;
	columns: Types.Columns[];
	labels?: string[];
	dueDate: Types.dueDate;
	handleDateChange: (newDate: any) => void;
	addNewSubTask: () => void;
	removeSubTask: (indexToRemove: number) => void;
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

export default function ModalForm({
	type,
	title,
	description,
	subTasks,
	status,
	columns,
	labels,
	dueDate,
	handleDateChange,
	addNewSubTask,
	removeSubTask,
}: ModalFormProps) {
	return (
		<Form>
			<FormField name="title">
				<div className="flex items-center gap-2">
					<FormLabel>title</FormLabel>
					<FormMessage match="valueMissing">Please enter a title</FormMessage>
				</div>
				<FormControl asChild>
					<Input type="text" defaultValue={title} required placeholder="e.g. take a coffee break" maxLength={150} />
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
							<Select defaultValue={labels && labels[0]}>
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
							<Input
								type="text"
								defaultValue={subTask.title}
								placeholder={subTasks[0].title.length === 0 ? `e.g. make ${getOrdinal(i + 1)} coffee` : ``}
								maxLength={75}
							/>
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
			<div className="flex justify-center">
				<Button className="mb-4  gap-2" variant="ghost" type="button" onClick={addNewSubTask}>
					<Icons icon="Plus" className="h-4 w-4" />
					Add a new subtask
				</Button>
			</div>

			<FormSubmit asChild>
				<Button className="w-full capitalize" variant="secondary">
					{type === "create" ? (
						<>
							<Icons icon="Plus" className="h-4 w-4" /> create task
						</>
					) : (
						"save changes"
					)}
				</Button>
			</FormSubmit>
		</Form>
	);
}
