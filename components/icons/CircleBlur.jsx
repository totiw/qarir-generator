function CircleBlur({ className, color }) {
  return (
    <svg
      class={className}
      viewBox="0 0 572 624"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3" filter="url(#filter0_f_33_300)">
        <circle cx="144.5" cy="348.5" r="193.5" fill={color}></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_33_300"
          x="-283"
          y="-79"
          width="855"
          height="855"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="117"
            result="effect1_foregroundBlur_33_300"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  )
}

export default CircleBlur
