"use client";

import { useState } from "react";

import * as Popover from "@radix-ui/react-popover";
import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";

import Icons from "../icons";

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
			{columns.map((column, i) => (
				<div key={i}>
					<div className=" mr-8 flex min-w-72 items-center rounded-[10px] border-2 border-border bg-white p-4 text-xs font-bold uppercase tracking-wider text-tertiary transition-colors dark:bg-tertiary-lighter dark:text-white">
						<Popover.Root>
							<Popover.Trigger
								className={"mr-3 h-4 w-4 rounded-full"}
								style={{ backgroundColor: columnColors[i] }}
								aria-label="toggle color picker"
							></Popover.Trigger>

							<Popover.Portal>
								<Popover.Content className=" animate-scale">
									<HexColorPicker color={columnColors[i]} onChange={(color) => handleColorChange(color, i)} />
								</Popover.Content>
							</Popover.Portal>
						</Popover.Root>

						<span>
							{column.name} ({column.tasks.length})
						</span>
					</div>
				</div>
			))}

			<button className=" hover: inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] bg-secondary-darker px-8 text-white transition-colors hover:bg-secondary-darker/85 hover:text-white hover:transition-colors dark:bg-tertiary-medium dark:hover:bg-tertiary-lighter">
				<Icons icon="Plus" className="h-6 w-6" />
				Add new Column
			</button>
		</>
	);
}
