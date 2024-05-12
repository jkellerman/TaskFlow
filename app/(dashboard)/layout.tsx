import Header from "@/components/header";
import SideNav from "@/components/sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-full w-full">
			<SideNav />
			<div className="flex h-full w-full flex-col overflow-auto">
				<Header />
				<main className="flex h-full w-full flex-col overflow-auto bg-secondary-lighter transition-colors dark:bg-tertiary">
					{children}
				</main>
			</div>
		</div>
	);
}
