import Avatar from "./avatar";
import Icons from "./icons";
import Logo from "./logo";

export default function Header() {
	return (
		<header className="flex">
			<div className="flex min-w-[115px] items-center justify-center gap-4 border-r border-border text-xl font-extrabold lg:min-w-[236px] lg:after:gap-1 lg:after:content-['TaskFlow']">
				<Logo />
			</div>
			<div className="flex w-full items-center ">
				<div className="flex w-full items-center justify-between py-7 pl-8 pr-6 dark:bg-tertiary">
					<h1 className="w-2/4 truncate font-bold tracking-wide sm:w-4/5 sm:text-2xl">Platform Launch</h1>
					<div className="flex items-center gap-4 sm:gap-8">
						<span className="text-text">
							<Icons icon="Gear" className="h-[22px] w-5" />
						</span>
						<Avatar />
					</div>
				</div>
			</div>
		</header>
	);
}
