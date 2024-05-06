import Icons from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="flex items-center justify-between border-b border-border bg-white px-8 py-5 dark:bg-tertiary">
			<div className="relative flex max-w-96 flex-1 flex-shrink-0 text-text ">
				<label htmlFor="search" className="sr-only">
					Search
				</label>
				<input
					className=" peer block w-full rounded-md border-2 border-border bg-secondary py-[9px] pl-10 text-sm font-medium text-tertiary-darker outline-1 outline-secondary-darker placeholder:text-text dark:bg-tertiary-lighter dark:text-white dark:outline-text"
					placeholder="Search any task..."
				/>
				<Icons
					icon="Search"
					className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 transition-colors duration-300 peer-focus:text-tertiary-darker dark:peer-focus:text-white"
				/>
			</div>
			<div className="flex items-center gap-2">
				<Button className="gap-2 bg-size-200">
					Create Task
					<Icons icon="Plus" className="hidden h-3 w-3 hover:bg-pos-100 lg:block" />
				</Button>
				<button type="button" className="transition-colors hover:text-tertiary-darker dark:hover:text-white">
					<Icons icon="Ellipsis" className="h-6 w-6" />
				</button>
			</div>
		</div>
	);
}
