import Board from "@/components/board";
import Icons from "@/components/icons";
import Search from "@/components/search";
import CreateTaskForm from "@/components/task/create-form";
import { generateMockData } from "@/data/mock-data";

export default function Page() {
	const data = generateMockData();
	const columns = data.boards[0].status;
	const taskList = columns.flatMap((tasks) => {
		const color = tasks.color;

		return tasks.tasks.map((task) => {
			return { ...task, color };
		});
	});
	return (
		<>
			<div className="flex items-center justify-between gap-2 border-t border-border bg-white px-4 py-5 transition-colors dark:bg-tertiary sm:gap-0 sm:px-8">
				<Search />
				<div className="flex items-center gap-2">
					<CreateTaskForm columns={columns} triggerVariant="primary" triggerText="Create Task" />
					<button type="button" className="hover:text-tertiary-darker hover:transition-colors dark:hover:text-white">
						<Icons icon="Ellipsis" className="h-6 w-6" />
					</button>
				</div>
			</div>
			<Board columns={columns} taskList={taskList} />
		</>
	);
}
