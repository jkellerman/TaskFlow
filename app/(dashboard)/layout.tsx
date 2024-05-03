import Header from "@/components/ui/header";
import SideNav from "@/components/ui/side-nav";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative flex h-screen">
			<SideNav />
			<div className="flex h-full flex-1 flex-col">
				<Header />
				<main className="flex-1 bg-secondary-lighter dark:bg-tertiary">
					<div className=" border-t border-border">{children}</div>
				</main>
			</div>
		</div>
	);
}
