"use client";

import { useEffect, useState } from "react";

import * as ProgressBar from "@radix-ui/react-progress";
import Icons from "@/components/icons";

interface ProgressProps {
	numOfCompletedSubTasks: number;
	numOfSubTasks: number;
	color: string[];
	columnIndex: number;
}

export default function Progress({ numOfCompletedSubTasks, numOfSubTasks, color, columnIndex }: ProgressProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const calculatePercentage = (numOfCompletedSubTasks / numOfSubTasks) * 100;
		setProgress(calculatePercentage);
	}, [numOfCompletedSubTasks, numOfSubTasks]);
	return (
		<>
			<div className=" rounded-[10px] border border-border bg-secondary-lighter px-3 py-2 text-xs transition-colors dark:bg-tertiary-medium">
				<div className="mb-2 flex items-center justify-between">
					<div className="flex items-center gap-x-2">
						<Icons icon="CheckList" className="h-5 w-5" />
						Sub tasks
					</div>
					{numOfCompletedSubTasks}/{numOfSubTasks}
				</div>
				<ProgressBar.Root
					className="h-[5px] w-full rounded-md bg-secondary-medium transition-colors dark:bg-tertiary-lighter	"
					value={numOfCompletedSubTasks}
					max={numOfSubTasks}
				>
					<ProgressBar.Indicator
						className="h-full rounded-md transition-width duration-500"
						style={{ backgroundColor: color[columnIndex], width: `${progress}%` }}
					/>
				</ProgressBar.Root>
			</div>
		</>
	);
}
