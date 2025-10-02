"use client"
import { useProduct } from "@/context/ProductContext";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const SectionHeader = ({ grayTitle, blueTitle, filter }) => {

  const { setSelectedFilter } = useProduct();

  return (
    <div className="border-b-3 border-[var(--border)] mb-6 flex justify-between items-center">
      <h2 className="relative inline-block sm:text-lg text-sm font-semibold pb-1">
        {grayTitle} <span className="text-[var(--primary)]">{blueTitle}</span>
        <span className="absolute left-0 bottom-[-3px] w-full h-1 bg-[var(--primary)] rounded-full"></span>
      </h2>

      <Link href="/products" onClick={() => setSelectedFilter(filter)} className="sm:text-sm text-xs font-semibold flex items-center">
        <span className="hidden sm:inline">View All</span>
        <FaChevronRight className="inline-block ml-1 text-[var(--primary)]" size={15} />
      </Link>
    </div>
  );
}
export default SectionHeader
