import { useContext, useEffect } from "react";
import Image from "next/image";
import anime from "animejs";
import ButtonTheme from "../molecules/buttons/Theme";
import { ThemeContext } from "@/contexts/Theme";

const HomeOrganisms = ({ className }: { className?: string }) => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    anime({
      targets: ".line-drawing-demo path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: false,
    });
  }, []);

  return (
    <main className={`flex flex-col ${className}`}>
      <ButtonTheme />
      <div className="flex flex-row justify-between items-center">
        <div
          className={`rounded-full overflow-hidden object-cover w-44 h-44 flex justify-center items-center`}
        >
          <div className="flex flex-1 h-full p-2">
            <div className="h-full w-full relative rounded-full overflow-hidden object-cover">
              <Image
                className="mb-2"
                src="/assets/profile.png"
                alt="Next.js Logo"
                fill
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-64 h-64 p-2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 172 295.00058"
            xmlns="http://www.w3.org/2000/svg"
            className="line-drawing-demo"
          >
            <g transform="translate(-18.172759,-0.81500433)">
              <path
                d="m 105.67691,11.972009 c -27.293947,0 -51.220702,14.447175 -64.719579,36.052664 L 189.80641,160.18545 v 45.23605 h -1.7076 l 1.7076,1.28285 v 1.948 c 0,46.39261 -37.74448,84.13089 -84.13775,84.13089 -46.393296,0 -84.130911,-37.74034 -84.130911,-84.13089 h 7.800821 c 0,42.08813 34.240573,76.33143 76.33145,76.33143 41.44907,0 75.28009,-33.19811 76.31087,-74.39361 L 21.539124,90.258894 v -1.948031 c 0,-46.392578 37.740365,-84.1308687 84.130896,-84.1308687 46.39052,0 84.13775,37.7403577 84.13775,84.1308687 h -7.80078 c 0,-42.088093 -34.2447,-76.331432 -76.33147,-76.331432 z M 182.00834,164.0783 37.131136,54.913614 C 32.457241,64.474279 29.647105,75.104888 29.36674,86.376645 L 182.00903,200.86003 v -36.77834 z"
                fill="none"
                fillOpacity={1}
                fillRule="nonzero"
                stroke={`${isDarkMode ? "#ffffff" : "#000000"}`}
                strokeWidth={6.72998}
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeDasharray="none"
                strokeOpacity={1}
                paintOrder="fill markers stroke"
              />
            </g>
          </svg>
        </div>
      </div>
    </main>
  );
};

export default HomeOrganisms;
