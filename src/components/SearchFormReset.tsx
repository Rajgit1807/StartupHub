"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return <button type="reset" onClick={reset} className="">
    <Link href="/" className="search-btn text-white right-[52px] pt-[8px] ps-[8px]">
    <X className="size-4"/>
    </Link>
  </button>;
};

export default SearchFormReset;
