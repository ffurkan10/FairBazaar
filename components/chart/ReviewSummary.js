import { FaStar } from "react-icons/fa";
import ReviewCard from "../ui/cards/ReviewCard";
import { reviews } from "@/data/productReviews";

const ReviewSummary = ({ average, totalReviews, breakdown }) => {

  return (
    <div className="flex flex-col gap-10 bg-white rounded-lg shadow p-6 w-full">
        <div className="flex align-center gap-6 md:flex-row flex-col">
            <div className="flex flex-col gap-2 items-center justify-center md:w-1/4 w-full pb-4 md:pb-0 text-center md:border-r md:border-b-0 border-b border-[var(--border)]">
                <p className="sm:text-4xl text-2xl font-bold">{average}</p>
                <div className="flex text-[var(--yellow)] my-2">
                    {Array(5).fill(0).map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < Math.round(average) ? "fill-[var(--yellow)]" : "text-[var(--light-hover)]"}
                        />
                    ))}
                </div>
                <p className="sm:text-sm text-xs text-[var(--light-hover)]">{totalReviews} reviews</p>
                <p className="sm:text-md text-sm text-[var(--primary)] hover:text-[var(--hover-dark)] transition-colors cursor-pointer">View all reviews ({totalReviews})</p>
            </div>

            <div className="flex flex-col justify-center flex-1 gap-2">
                {[5, 4, 3, 2, 1].map((star) => {
                const count = breakdown[star] || 0;
                const percent = (count / totalReviews) * 100;

                return (
                    <div key={star} className="flex items-center gap-3">
                        <span className="flex items-center gap-1 w-8 text-sm text-[var(--light-hover)]">
                            <FaStar className="text-[var(--yellow)]" /> {star}
                        </span>
                        <div className="w-full h-3 bg-[var(--border)] rounded-full overflow-hidden">
                            <div
                            className="h-full bg-[var(--yellow)] rounded-full"
                            style={{ width: `${percent}%` }}
                            ></div>
                        </div>
                        <span className="w-8 text-sm text-[var(--light-hover)] text-right">{count}</span>
                    </div>
                );
                })}
            </div>
        </div>
        
        <div className="flex flex-col">
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>

    </div>
  );
};

export default ReviewSummary;