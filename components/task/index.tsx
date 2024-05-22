import { formatDate } from "@/lib/formatter";
import { Types } from "@/types";

import Icons from "../icons";
import Modal from "../modal/task";
import { Dialog, DialogTrigger } from "../ui/dialog";
import EditTask from "./edit-task";
import Label from "./label";
import Progress from "./progress";

interface TaskProps {
	/**
	 * To access color index for column color/theme
	 */
	columnIndex?: number;
	/**
	 * Date for task completion
	 */
	dueDate: string;
	/**
	 * Select format for displaying task (based on tab selected (board or list))
	 */
	format: "column" | "list";
	/**
	 * Color selected for column, also used for color picker
	 */
	color: string[] | string;
	/**
	 * Title and color theme for each column
	 */
	columns?: Types.Columns[];
	/**
	 * Title of task
	 */
	title: string;
	/**
	 * Task description
	 */
	description: string;
	/**
	 * Labels selected for task
	 */
	labels: string[];
	/**
	 * Which column currently assigned to, should be the same as the current column
	 */
	status: string;
	/**
	 * list of subtasks
	 */
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
	columnIndex,
	format,
	labels,
	dueDate,
	status,
	columns,
}: TaskProps) {
	const numOfCompletedSubTasks = subtasks.filter((subtask) => subtask.isCompleted).length;

	if (format === "column") {
		return (
			<div className="relative">
				<EditTask
					title={title}
					description={description}
					subTaskList={subtasks}
					status={status}
					columns={columns as Types.Columns[]}
					labels={labels}
					date={dueDate}
				/>
				<Dialog>
					<DialogTrigger asChild>
						<div className="mb-4 max-w-80 cursor-pointer rounded-[10px] border border-border bg-white p-6 transition-colors dark:bg-tertiary-medium dark:drop-shadow-md">
							<div className="mb-2 flex  justify-between">
								<div>
									{(labels.length > 0 || dueDate) && (
										<div className=" mb-2 flex flex-wrap items-center gap-2">
											{labels.length > 0 && <Label label={labels} />}
											{dueDate && (
												<span className="inline-flex rounded-2xl border  border-label bg-label-bg px-4 py-1 text-xs font-medium capitalize text-label-fg transition-colors dark:drop-shadow-md">
													{formatDate(dueDate)}
												</span>
											)}
										</div>
									)}
									<h3 className="mb-2 font-bold text-tertiary-darker dark:text-white">{title}</h3>
								</div>
							</div>
							<p className="mb-4 text-xs"> {description}</p>

							<Progress
								numOfCompletedSubTasks={numOfCompletedSubTasks}
								numOfSubTasks={subtasks.length}
								color={color as string[]}
								columnIndex={columnIndex as number}
							/>
						</div>
					</DialogTrigger>
					<Modal
						title={title}
						description={description}
						subtasks={subtasks}
						status={status}
						columns={columns as Types.Columns[]}
					/>
				</Dialog>
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
							<Icons icon="CheckList" className="h-4 w-4" />
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
