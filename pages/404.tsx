import { Button } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const NotFound = () => {
  const { t } = useTranslation("404");
  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(125deg, rgba(2,0,36,1) 55%, rgb(5 5 72) 85%, rgb(0 255 246) 125%)",
      }}
    >
      {Array(1000)
        .fill(0)
        .map((_, i) => (
          <Star key={i} />
        ))}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{
          backdropFilter: "blur(1px)",
        }}
      ></div>

      <div className="z-10 relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
        <div className="404-div flex justify-center items-center">
          <h1 className="text-9xl font-bold text-[#9df7ff]">4</h1>
          <div className="planet-div">
            <div
              className="planet-wrapper flex m-3"
              style={{
                background:
                  "linear-gradient(to left, rgb(149 251 247 / 50%), transparent)",
                backdropFilter: "blur(5px)",
                padding: "10px",
                borderRadius: "0 50% 50% 0",
                transform: "rotate(45deg)",
              }}
            >
              <div
                className="planet overflow-hidden w-20 h-20 rounded-full bg-[#9df7ff]"
                style={{
                  transform: "rotate(-45deg)",
                }}
              >
                <div className="w-full h-5 bg-[#45d0dc] rounded-full absolute top-0 right-0 rotate-[-45deg]"></div>
                <div className="w-full h-5 bg-[#45d0dc] rounded-full absolute bottom-[-10px] left-[-36px] rotate-[-45deg]"></div>
                <div className="w-full h-5 bg-[#45d0dc] rounded-full absolute top-[21px] right-[-51px] rotate-[-45deg]"></div>
              </div>
            </div>
          </div>
          <h1 className="text-9xl font-bold text-[#9df7ff]">4</h1>
        </div>

        <p className="text-[#d2e9eb] mt-5 mb-20 text-center tracking-wider">
          {t("msg.404")}
        </p>

        <Link href={"/"}>
          <a>
            <button
              className="bg-cyan-600 text-white py-3 px-5 rounded-2xl text-[13px] font-[inherit] hover:bg-cyan-700"
              style={{
                boxShadow: "inset 2px 0px 5px 5px #0000004d",
              }}
            >
              {t("backToHome")}
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

const Star = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    setX(Math.random() * window.innerWidth);
    setY(Math.random() * window.innerHeight);
    setSize(Math.random() * 2);
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);

  return useMemo(
    () => (
      <div
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: size,
          height: size,
          background: color,
        }}
      />
    ),
    [x, y, size, color]
  );
};
