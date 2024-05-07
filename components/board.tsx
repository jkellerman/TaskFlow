import Icons from "./icons";
import BoardTabs from "./ui/tabs";

export default function Board() {
	return (
		<div className="flex p-8 pr-0 transition-colors sm:pr-14">
			<div className="flex w-full justify-between">
				<BoardTabs />
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
		</div>
	);
}
