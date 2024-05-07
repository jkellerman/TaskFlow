import Board from "@/components/board";
import Icons from "@/components/icons";
import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";

export default function Page() {
	return (
		<>
			<div className="flex items-center justify-between border-b border-border bg-white px-8 py-5 transition-colors dark:bg-tertiary">
				<Search />
				<div className="flex items-center gap-2">
					<Button className="gap-2 bg-size-200">
						Create Task
						<Icons icon="Plus" className="hidden h-3 w-3 hover:bg-pos-100 lg:block" />
					</Button>
					<button type="button" className="hover:text-tertiary-darker hover:transition-colors dark:hover:text-white">
						<Icons icon="Ellipsis" className="h-6 w-6" />
					</button>
				</div>
			</div>
			<Board />
		</>
	);
}
