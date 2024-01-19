import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			dasd dsad das dsadsadsa dsa dsa
			{children}
			<Footer />
		</>
	);
};

export default Layout;
