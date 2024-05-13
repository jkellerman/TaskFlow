"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

export default function Avatar() {
	return (
		<AvatarPrimitive.Root className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#E654E0] to-[#5ECDDD] text-white">
			<AvatarPrimitive.Image src="" alt="" />
			<AvatarPrimitive.Fallback>JK</AvatarPrimitive.Fallback>
		</AvatarPrimitive.Root>
	);
}
