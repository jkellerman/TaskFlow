import Link from "next/link";

import Icons from "../icons";
import Avatar from "../ui/avatar";

export default function Header() {
	return (
		<header className="flex">
			<div className="flex w-full items-center ">
				<div className="flex w-full items-center justify-between border-b border-border bg-white py-3 pl-4 pr-6 transition-colors  dark:bg-tertiary sm:pl-8">
					<h1 className="w-2/4 truncate font-bold tracking-wide text-tertiary-darker dark:text-white sm:w-4/5 sm:text-xl">
						Platform Launch
					</h1>

					<div className="flex items-center gap-4 hover:text-tertiary-lighter hover:transition-colors dark:hover:text-white sm:gap-8">
						<Link href="/settings">
							<Icons icon="Gear" className="h-[22px] w-5" />
						</Link>
						<Avatar />
					</div>
				</div>
			</div>
		</header>
	);
}
