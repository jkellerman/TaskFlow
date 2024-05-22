"use client";

import { useEffect, useState } from "react";

import Icons from "@/components/icons";

import { Progress as ProgressBar } from "../ui/progress";

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
				<ProgressBar
					value={numOfCompletedSubTasks}
					max={numOfSubTasks}
					style={{ backgroundColor: color[columnIndex], width: `${progress}%` }}
				/>
			</div>
		</>
	);
}
