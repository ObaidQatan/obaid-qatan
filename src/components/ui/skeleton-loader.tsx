"use client";
import React from "react";
import { cn } from "../../utils";

interface SkeletonProps {
  className?: string;
}
const SkeletonLoader: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-gray-400 bg-opacity-50",
        className
      )}
    >
      {/* Add more specific styles as needed */}
    </div>
  );
};

export default SkeletonLoader;
