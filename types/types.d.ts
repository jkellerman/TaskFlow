export declare namespace Types {
	export interface BoardLabels {
		name: string;
		color: null | string;
	}
	export interface Children {
		children?: React.ReactNode;
	}

	export interface Columns {
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
	}

	export interface dueDate {
		startDate: Date | null;
		endDate: Date | null;
	}

	export interface TaskList {
		color: string;
		title: string;
		description: string;
		"due date": string;
		labels: string[];
		status: string;
		subtasks: {
			title: string;
			isCompleted: boolean;
		}[];
	}
}
