"use client";

import { useState } from "react";

import { Types } from "@/types";
import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";

import Icons from "../icons";
import Task from "../task";
import CreateTask from "../task/create-task";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ColumnsProps {
	columns: Types.Columns[];
}

export default function Columns({ columns }: ColumnsProps) {
	const colors = columns.map((column) => column.color);

	const [columnColors, setColumnColors] = useState(colors);

	const debouncedHandleColorChange = useDebouncedCallback(
		(color: string, i: number) => {
			const updatedColors = [...columnColors];
			updatedColors[i] = color;
			setColumnColors(updatedColors);
		},

		300
	);

	const handleColorChange = (color: string, i: number) => {
		debouncedHandleColorChange(color, i);
	};

	return (
		<>
			{columns.map((column, columnIndex) => (
				<div key={columnIndex}>
					<div className="mb-4 flex w-80 items-center rounded-[10px] border border-border bg-white px-4 py-3 text-sm font-bold tracking-wider text-tertiary transition-colors dark:bg-tertiary-medium dark:text-white">
						<div className="flex w-full items-center justify-between">
							<div className="flex items-center">
								<Popover>
									<PopoverTrigger
										className={"mr-3 h-4 w-4 rounded-full"}
										style={{ backgroundColor: columnColors[columnIndex] }}
									>
										<span className=" sr-only">color picker</span>
									</PopoverTrigger>

									<PopoverContent className="animate-scale">
										<HexColorPicker
											color={columnColors[columnIndex]}
											onChange={(color) => handleColorChange(color, columnIndex)}
										/>
									</PopoverContent>
								</Popover>

								<span>
									{column.name} ({column.tasks.length})
								</span>
							</div>
							<span className="text-text hover:text-tertiary-darker dark:transition-colors dark:hover:text-white">
								<Icons icon="Ellipsis" className="h-6 w-6 " />
							</span>
						</div>
					</div>

					<CreateTask columns={columns} triggerVariant="secondary" triggerText="Add Task" status={column.name} />

					<div className="flex flex-col">
						{column.tasks.map((task, i) => (
							<Task
								key={i}
								columnIndex={columnIndex}
								title={task.title}
								description={task.description}
								subtasks={task.subtasks}
								color={columnColors}
								format="column"
								labels={task.labels}
								dueDate={task["due date"]}
								columns={columns}
								status={task.status}
							/>
						))}
					</div>
				</div>
			))}

			<button className="hover: inline-flex max-h-14 items-center gap-2 whitespace-nowrap rounded-[10px] bg-secondary-darker px-8 text-sm text-white transition-colors hover:bg-secondary-darker/85 hover:text-white hover:transition-colors dark:bg-tertiary-medium dark:hover:bg-tertiary-lighter">
				<Icons icon="Plus" className="h-6 w-6" />
				Add new column
			</button>
		</>
	);
}
