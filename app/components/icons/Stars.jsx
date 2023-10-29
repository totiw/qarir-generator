function Stars({ height, color }) {
  return (
    <svg
      width="auto"
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_190_505"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="41"
        height="40"
      >
        <rect x="0.5" width="40" height="40" fill="#D9D9D9"></rect>
      </mask>
      <g mask="url(#mask0_190_505)">
        <path
          d="M28.3333 25.8333L34.6666 20.4167L39.6666 20.8333L32.3333 27.2083L34.5 36.6667L30.25 34.0833L28.3333 25.8333ZM24.4166 13.6667L22.6666 9.58333L24.5833 5L28.4166 14.0417L24.4166 13.6667ZM7.70831 36.6667L10.4166 24.9583L1.33331 17.0833L13.3333 16.0417L18 5L22.6666 16.0417L34.6666 17.0833L25.5833 24.9583L28.2916 36.6667L18 30.4583L7.70831 36.6667Z"
          fill={color}
        ></path>
      </g>
    </svg>
  )
}

export default Stars
