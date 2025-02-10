/* eslint-disable @next/next/no-img-element */
"use client";
import { LoaderCircleIcon } from "lucide-react";
import React, { Fragment, useState } from "react";
import { cn } from "../../utils";

const Img: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & {
    loadingComponent?: React.ReactNode;
  }
> = ({ className, loadingComponent, ...props }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Fragment>
      {loading &&
        (loadingComponent ?? (
          <div
            className={cn(
              "animate-in-popup",
              "flex items-center justify-center rounded-lg bg-gray-200",
              "min-h-10 min-w-10",
              className
            )}
          >
            <LoaderCircleIcon className="h-4 w-4 animate-spin text-gray-500" />
          </div>
        ))}
      <img
        onLoad={handleLoad}
        alt={props.alt}
        className={cn(
          "animate-in-popup",
          className,
          loading &&
            "fixed -left-full -top-full h-0 w-0 overflow-hidden opacity-0"
        )}
        {...props}
      />
    </Fragment>
  );
};

export default Img;
