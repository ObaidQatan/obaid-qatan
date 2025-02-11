/* eslint-disable @next/next/no-img-element */
import { LoaderCircleIcon, RotateCwIcon } from "lucide-react";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { cn } from "../../utils";

const Img: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & {
    loadingComponent?: React.ReactNode;
  }
> = ({ className, loadingComponent, src: srcProp, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState<typeof srcProp>(srcProp);
  const [loadingTime, setLoadingTime] = useState<number>(0);

  const handleLoad = useCallback(() => {
    setLoadingTime(9800);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const reload = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();

      setSrc(undefined);
      setTimeout(() => setSrc(srcProp), 200);
      setLoading(true);
      setLoadingTime(0);
    },
    [srcProp]
  );

  useEffect(() => {
    const controll = new AbortController();
    const interval = setInterval(
      () => {
        if (loadingTime >= 10000 || !loading) {
          controll.abort();
          return;
        }
        setLoadingTime(loadingTime + 1);
      },
      0,
      controll.signal
    );

    return () => clearInterval(interval);
  }, [loadingTime, loading]);

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
            {loadingTime >= 10000 ? (
              <button className="p-2 rounded-lg" onClick={reload}>
                <RotateCwIcon className="h-5 w-5 text-gray-500" />
              </button>
            ) : (
              <div className="relative flex items-center justify-center">
                <LoaderCircleIcon className="h-9 w-9 animate-spin text-gray-500" />
                <span className="absolute text-gray-500 text-xs">
                  {Math.floor((loadingTime / 1000) * 10)}%
                </span>
              </div>
            )}
          </div>
        ))}
      <img
        src={src}
        onLoad={handleLoad}
        alt={props.alt}
        className={cn(
          "animate-in-popup",
          className,
          loading &&
            "fixed -left-full -top-full max-h-0 max-w-0 overflow-hidden opacity-0"
        )}
        {...props}
      />
    </Fragment>
  );
};

export default Img;
