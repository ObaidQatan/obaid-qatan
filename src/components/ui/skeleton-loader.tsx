import React from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps {
  className?: string;
}
const SkeletonLoader: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={cn("animate-pulse rounded bg-gray-400/50", className)}>
      {/* Add more specific styles as needed */}
    </div>
  );
};

export default SkeletonLoader;
