import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const SectionHeader = ({ grayTitle, blueTitle }) => {
  return (
    <div className="border-b-3 border-[var(--border)] mb-6 flex justify-between items-center">
      <h2 className="relative inline-block text-lg font-semibold pb-1">
        {grayTitle} <span className="text-[var(--primary)]">{blueTitle}</span>
        <span className="absolute left-0 bottom-[-3px] w-full h-1 bg-[var(--primary)] rounded-full"></span>
    </h2>

      <Link href="/products" className="text-sm font-semibold flex items-center">
        View All
        <FaChevronRight className="inline-block ml-1 text-[var(--primary)]" />
      </Link>
    </div>
  );
}
export default SectionHeader
