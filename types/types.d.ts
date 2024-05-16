export declare namespace Types {
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
