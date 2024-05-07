"use client";

import * as Tabs from "@radix-ui/react-tabs";

import Icons from "../icons";

const triggers = ["Board", "List"] as const;

export default function BoardTabs() {
	return (
		<>
			<Tabs.Root className="h-4 w-full justify-between" defaultValue="tab1">
				<Tabs.List className="flex gap-1 text-sm sm:gap-8 sm:text-base" aria-label="View tasks">
					{triggers.map((trigger, i) => (
						<Tabs.Trigger
							key={i}
							value={`tab${i + 1}`}
							className={`relative mr-3 flex items-center transition-opacity after:absolute after:left-4 after:top-8 ${trigger === "Board" ? `after:left-4 sm:after:left-[52px]` : `after:left-1 sm:after:left-10`} after:h-[2px] after:w-3 after:bg-tertiary-darker after:opacity-0 after:content-['']  hover:text-tertiary-darker hover:transition-colors data-[state=active]:text-tertiary-darker data-[state=active]:after:opacity-100 data-[state=active]:after:duration-700 dark:after:bg-white  dark:hover:text-white dark:data-[state=active]:text-white `}
						>
							<Icons icon={trigger} className="mr-2 hidden h-6 w-6 sm:inline-block" />
							{trigger}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				<Tabs.Content value="tab1" className=" mt-12">
					Board
				</Tabs.Content>
				<Tabs.Content value="tab2" className=" mt-12">
					List
				</Tabs.Content>
			</Tabs.Root>
		</>
	);
}
