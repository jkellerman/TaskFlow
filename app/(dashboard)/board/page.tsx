import Board from "@/components/board";
import Icons from "@/components/icons";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<>
			<div className="flex items-center justify-between gap-2 border-t border-border bg-white px-4 py-5 transition-colors dark:bg-tertiary sm:gap-0 sm:px-8">
				<Search />
				<div className="flex items-center gap-2">
					<Button className="gap-2 bg-size-200 py-3 sm:py-2">
						<span className="hidden sm:inline-block">Create Task</span>
						<Icons icon="Plus" className=" h-3 w-3 hover:bg-pos-100" />
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
