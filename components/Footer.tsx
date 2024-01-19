import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className="flex-between w-full max-md:flex-col gap-y-10 text-white-800 px-20 py-12 border-t border-black-400">
			<p>Copyright © 2023 JS Mastery Pro | All Rights Reserved</p>
			<div className="flex gap-x-9">
				<Link href="/terms-of-use">Terms & Conditions</Link>
				<Link href="/privacy-policy">Privacy Policy</Link>
			</div>
		</footer>
	);
}

export default Footer;
