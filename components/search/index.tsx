import Icons from "../icons";

export default function Search() {
	return (
		<div className="relative flex max-w-96 flex-1 flex-shrink-0 text-text ">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className=" peer block w-full rounded-md border-2 border-border bg-secondary py-[9px] pl-10 pr-2 text-sm font-medium text-tertiary-darker outline-1 outline-secondary-darker transition-colors placeholder:text-text dark:bg-tertiary-lighter dark:text-white dark:outline-text"
				placeholder="Search any task..."
				type="search"
				name="search"
				id="search"
				autoComplete="off"
			/>
			<Icons
				icon="Search"
				className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 transition-colors duration-300 hover:transition-colors peer-focus:text-tertiary-darker dark:peer-focus:text-white"
			/>
		</div>
	);
}
