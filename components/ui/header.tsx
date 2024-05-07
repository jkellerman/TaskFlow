import Icons from "../icons";
import Avatar from "./avatar";

export default function Header() {
	return (
		<header className="flex">
			<div className="flex w-full items-center ">
				<div className="flex w-full items-center justify-between bg-white py-7 pl-8 pr-6  transition-colors dark:bg-tertiary">
					<h1 className="w-2/4 truncate font-bold tracking-wide text-tertiary-darker dark:text-white sm:w-4/5 sm:text-2xl">
						Platform Launch
					</h1>
					<div className="flex items-center gap-4 sm:gap-8">
						<span>
							<Icons icon="Gear" className="h-[22px] w-5" />
						</span>
						<Avatar />
					</div>
				</div>
			</div>
		</header>
	);
}
