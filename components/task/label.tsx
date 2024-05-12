import Icons from "@/components/icons";
import clsx from "clsx";

interface LabelProps {
	label: string[];
}

const boardLabels = [
	{ name: "development", color: null },
	{ name: "ui design", color: "secondary" },
	{ name: "research", color: "tertiary" },
	{ name: "testing", color: "quaternary" },
	{ name: "marketing", color: "quinary" },
	{ name: "sales", color: "senary" },
	{ name: "devops", color: "septenary" },
	{ name: "anon", color: "octonary" },
];

export default function Label({ label }: LabelProps) {
	const labelColor = boardLabels.find((item) => item.name === label[0]);
	return (
		<>
			{label.map((item, i) => (
				<span
					key={i}
					className={clsx(
						" mb-2 inline-flex items-center rounded-2xl border border-label py-1 pl-2 pr-4 text-xs font-medium capitalize transition-colors dark:drop-shadow-md",
						{
							"border-label bg-label-bg text-label-fg": !labelColor?.color || labelColor?.color === "default",
							"border-label-secondary bg-label-secondary-bg text-label-secondary-fg": labelColor?.color === "secondary",
							"border-label-tertiary bg-label-tertiary-bg text-label-tertiary-fg": labelColor?.color === "tertiary",
							"border-label-quaternary bg-label-quaternary-bg text-label-quaternary-fg":
								labelColor?.color === "quaternary",
							"border-label-quinary bg-label-quinary-bg text-label-quinary-fg": labelColor?.color === "quinary",
							"border-label-senary bg-label-senary-bg text-label-senary-fg": labelColor?.color === "senary",
							"border-label-septenary bg-label-septenary-bg text-label-septenary-fg": labelColor?.color === "septenary",
							"border-label-octonary bg-label-octonary-bg text-label-octonary-fg": labelColor?.color === "octonary",
						}
					)}
				>
					<Icons icon="Dot" className=" h-4 w-4" />
					{item}
				</span>
			))}
		</>
	);
}
