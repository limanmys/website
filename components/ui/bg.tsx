export default function Bg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 h-[1300px] w-full opacity-25"
    >
      <defs>
        <filter
          x="-17.6%"
          y="-34.2%"
          width="135.1%"
          height="168.4%"
          filterUnits="objectBoundingBox"
          id="b"
        >
          <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
        </filter>
        <filter
          x="-23.6%"
          y="-187.5%"
          width="147.2%"
          height="475%"
          filterUnits="objectBoundingBox"
          id="d"
        >
          <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
        </filter>
        <filter
          x="-23.6%"
          y="-187.5%"
          width="147.2%"
          height="475%"
          filterUnits="objectBoundingBox"
          id="e"
        >
          <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
        </filter>
        <filter
          x="-23.6%"
          y="-187.5%"
          width="147.2%"
          height="475%"
          filterUnits="objectBoundingBox"
          id="g"
        >
          <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
        </filter>
        <linearGradient
          x1="98.284%"
          y1="37.276%"
          x2="9.488%"
          y2="37.276%"
          id="a"
        >
          <stop stopColor="#6366F1" offset="0%" />
          <stop stopColor="#6366F1" stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="c">
          <stop stopColor="#38BDF8" offset="0%" />
          <stop stopColor="#38BDF8" stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="f">
          <stop stopColor="#6EE7B7" offset="0%" />
          <stop stopColor="#6EE7B7" stopOpacity={0} offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="url(#a)"
          filter="url(#b)"
          d="M262.132 307.493 253.019 438.5l844.887-307.493L1107.019 0z"
          transform="translate(-.103 -152)"
        />
        <path
          fill="url(#c)"
          filter="url(#d)"
          transform="rotate(-20 296.964 770.578)"
          d="m446.117 806.285-35.584 80h599.418l35.582-80z"
        />
        <path
          fill="url(#a)"
          filter="url(#e)"
          transform="rotate(-20 29.964 1143.578)"
          d="m179.117 1179.285-35.584 80h599.418l35.582-80z"
        />
        <path
          fill="url(#f)"
          filter="url(#g)"
          transform="rotate(-20 156.964 105.578)"
          d="m306.117 141.285-35.584 80h599.418l35.582-80z"
        />
      </g>
    </svg>
  )
}
