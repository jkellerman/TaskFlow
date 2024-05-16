"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Types } from "@/types";

import Icons from "../icons";
import Task from "../task";
import Columns from "./columns";

interface BoardProps {
	columns: Types.Columns[];
	taskList: Types.TaskList[];
}

const triggers = ["Board", "List"] as const;

export default function Board({ columns, taskList }: BoardProps) {
	return (
		<Tabs.Root className=" animate-fade  overflow-auto border-t border-border transition-colors" defaultValue="tab1">
			<div className="flex items-center justify-between">
				<Tabs.List className="flex gap-3 p-8 text-sm sm:gap-8 sm:text-base" aria-label="View tasks">
					{triggers.map((trigger, i) => (
						<Tabs.Trigger
							key={i}
							value={`tab${i + 1}`}
							className={`relative mr-3 flex items-center transition-opacity after:absolute after:left-4 after:top-8 ${trigger === "Board" ? `after:left-4 sm:after:left-[52px]` : `after:left-[6px] sm:after:left-10`} after:h-[2px] after:w-3 after:bg-tertiary-darker after:opacity-0 after:content-['']  hover:text-tertiary-darker hover:transition-colors data-[state=active]:text-tertiary-darker data-[state=active]:after:opacity-100 data-[state=active]:after:duration-700 dark:after:bg-white  dark:hover:text-white dark:data-[state=active]:text-white `}
						>
							<Icons icon={trigger} className="mr-2 hidden h-6 w-6 sm:inline-block" />
							{trigger}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				<div className="flex">
					<button className="mr-4 flex items-center hover:text-tertiary-darker hover:transition-colors dark:hover:text-white sm:mr-8">
						<Icons icon="Filter" className="mr-1 h-6 w-6 sm:mr-2" />
						<span className="hidden sm:inline-block">Filter</span>
					</button>
					<button className="mr-4 flex items-center hover:text-tertiary-darker hover:transition-colors dark:hover:text-white sm:mr-8">
						<Icons icon="Sort" className="mr-1 h-6 w-6 sm:mr-2" />
						<span className="hidden sm:inline-block">Sort</span>
					</button>
				</div>
			</div>
			<Tabs.Content value="tab1" className="flex gap-x-8 overflow-auto px-8 py-4 data-[state=active]:animate-fade">
				<Columns columns={columns} />
			</Tabs.Content>
			<Tabs.Content value="tab2" className="data-[state=active]:animate-fade">
				<ul className="-mt-4 flex flex-col  gap-y-4 px-8 pb-8">
					{taskList.map((task, i: number) => (
						<li key={i}>
							<Task
								format="list"
								title={task.title}
								description={task.description}
								subtasks={task.subtasks}
								color={task.color}
								dueDate={task["due date"]}
								labels={task.labels}
								status={task.status}
							/>
						</li>
					))}
				</ul>
			</Tabs.Content>
		</Tabs.Root>
	);
}
