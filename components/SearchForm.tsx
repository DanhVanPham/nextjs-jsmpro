"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/sanity/utils";

const SearchForm = () => {
	const [searchValue, setSearchValue] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			let newUrl = "";
			if (searchValue) {
				newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: "query",
					value: searchValue,
				});
			} else {
				newUrl = formUrlQuery({
					params: searchParams.toString(),
					keysToRemove: ["query"],
				});
			}
			router.push(newUrl, { scroll: false });
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [searchValue]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return (
		<form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sx: px-5">
			<label className="flex-center relative w-full max-w-3xl">
				<Image
					src="/magnifying-glass.svg"
					alt="Search Icon"
					width={32}
					height={32}
					className="absolute left-8"
				/>
				<Input
					className="base-regular h-fit border-0 bg-black-400 py-6 
                pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800
                "
					type="text"
					placeholder="Search"
					value={searchValue}
					onChange={handleSearch}
				/>
			</label>
		</form>
	);
};

export default SearchForm;
