import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div>
			<nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
				<div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
					<Link href="/">
						<Image src="/json-logo.svg" />
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
