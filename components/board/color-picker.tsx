import { HexColorPicker } from "react-colorful";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ColorPickerProps {
	columnColors: string[];
	columnIndex: number;
	handleColorChange: (color: string, i: number) => void;
}

export default function ColorPicker({ columnColors, columnIndex, handleColorChange }: ColorPickerProps) {
	return (
		<>
			<Popover>
				<PopoverTrigger className={"mr-3 h-4 w-4 rounded-full"} style={{ backgroundColor: columnColors[columnIndex] }}>
					<span className=" sr-only">color picker</span>
				</PopoverTrigger>

				<PopoverContent className="animate-scale">
					<HexColorPicker
						color={columnColors[columnIndex]}
						onChange={(color) => handleColorChange(color, columnIndex)}
					/>
				</PopoverContent>
			</Popover>
		</>
	);
}
