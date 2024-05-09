import Header from "@/components/header";
import SideNav from "@/components/sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative flex min-h-dvh">
			<SideNav />
			<div className="flex flex-1 flex-col overflow-auto">
				<Header />
				<main className="h-full flex-1 bg-secondary-lighter transition-colors dark:bg-tertiary">{children}</main>
			</div>
		</div>
	);
}
