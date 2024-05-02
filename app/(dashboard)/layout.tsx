import Header from "@/components/ui/header";
import SideNav from "@/components/ui/side-nav";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative flex h-screen  flex-col">
			<Header />
			<main className="flex h-full bg-secondary-lighter dark:bg-tertiary">
				<SideNav />
				<div className="w-full border-t border-border">{children}</div>
			</main>
		</div>
	);
}
