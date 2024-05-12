"use client";

import { useState } from "react";

import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";

import Icons from "../icons";
import Task from "../task";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ColumnsProps {
	columns: {
		color: string;
		name: string;
		tasks: {
			title: string;
			description: string;
			"due date": string;
			labels: string[];
			status: string;
			subtasks: {
				title: string;
				isCompleted: boolean;
			}[];
		}[];
	}[];
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
			{columns.map((column, index) => (
				<div key={index}>
					<div className="mb-4 flex w-80 items-center rounded-[10px] border border-border bg-white px-4 py-3 text-sm font-bold tracking-wider text-tertiary transition-colors dark:bg-tertiary-medium dark:text-white">
						<div className="flex w-full items-center justify-between">
							<div className="flex items-center">
								<Popover>
									<PopoverTrigger
										className={"mr-3 h-4 w-4 rounded-full"}
										style={{ backgroundColor: columnColors[index] }}
										aria-label="toggle color picker"
									></PopoverTrigger>

									<PopoverContent className="animate-scale">
										<HexColorPicker color={columnColors[index]} onChange={(color) => handleColorChange(color, index)} />
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

					<button className="mb-4 flex w-full items-center justify-center gap-2 rounded-[10px] border-2 border-dotted border-border bg-white py-3 text-center text-sm transition-colors hover:text-tertiary-darker hover:transition-colors dark:bg-tertiary-medium dark:hover:text-white">
						Add Task
						<Icons icon="Plus" className="h-3 w-3" />
					</button>

					<div className="flex flex-col">
						{column.tasks.map((task, i) => (
							<Task
								key={i}
								index={index}
								title={task.title}
								description={task.description}
								subtasks={task.subtasks}
								color={columnColors}
								format="column"
								labels={task.labels}
								dueDate={task["due date"]}
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
