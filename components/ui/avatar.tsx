"use client";

import * as RadixAvatar from "@radix-ui/react-avatar";

export default function Avatar() {
	return (
		<RadixAvatar.Root className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#E654E0] to-[#5ECDDD] text-white">
			<RadixAvatar.Image src="" alt="" />
			<RadixAvatar.Fallback>JK</RadixAvatar.Fallback>
		</RadixAvatar.Root>
	);
}
