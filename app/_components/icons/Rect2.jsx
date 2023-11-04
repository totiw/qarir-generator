function Rect2({ height }) {
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="28"
        height="28"
        rx="4"
        fill="url(#paint0_linear_337_827)"
      ></rect>
      <mask
        id="mask0_337_827"
        // styles={{ 'mask-type': 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="4"
        width="20"
        height="20"
      >
        <rect x="4" y="4" width="20" height="20" fill="#D9D9D9"></rect>
      </mask>
      <g mask="url(#mask0_337_827)">
        <path
          d="M7.12496 20.4583C6.9444 20.2778 6.85413 20.0694 6.85413 19.8333C6.85413 19.5972 6.9444 19.3889 7.12496 19.2083L12.1666 14.1667C12.25 14.0833 12.3402 14.0243 12.4375 13.9896C12.5347 13.9549 12.6388 13.9375 12.75 13.9375C12.8611 13.9375 12.9652 13.9549 13.0625 13.9896C13.1597 14.0243 13.25 14.0833 13.3333 14.1667L16.0833 16.9167L21.4166 10.9167C21.5694 10.7361 21.7673 10.6458 22.0104 10.6458C22.2534 10.6458 22.4583 10.7292 22.625 10.8958C22.7777 11.0486 22.8576 11.2326 22.8645 11.4479C22.8715 11.6632 22.7986 11.8542 22.6458 12.0208L16.6666 18.75C16.5833 18.8472 16.4895 18.9201 16.3854 18.9688C16.2812 19.0174 16.1736 19.0417 16.0625 19.0417C15.9513 19.0417 15.8437 19.0208 15.7395 18.9792C15.6354 18.9375 15.5416 18.875 15.4583 18.7917L12.75 16.0833L8.37496 20.4583C8.1944 20.6389 7.98607 20.7292 7.74996 20.7292C7.51385 20.7292 7.30551 20.6389 7.12496 20.4583ZM7.33329 15.0833C7.26385 15.0833 7.1944 15.066 7.12496 15.0313C7.05551 14.9965 6.99996 14.9375 6.95829 14.8542L6.54163 13.9583L5.64579 13.5417C5.56246 13.5 5.50343 13.4444 5.46871 13.375C5.43399 13.3056 5.41663 13.2361 5.41663 13.1667C5.41663 13.0972 5.43399 13.0278 5.46871 12.9583C5.50343 12.8889 5.56246 12.8333 5.64579 12.7917L6.54163 12.375L6.95829 11.4792C6.99996 11.3958 7.05551 11.3368 7.12496 11.3021C7.1944 11.2674 7.26385 11.25 7.33329 11.25C7.40274 11.25 7.47218 11.2674 7.54163 11.3021C7.61107 11.3368 7.66663 11.3958 7.70829 11.4792L8.12496 12.375L9.02079 12.7917C9.17357 12.8611 9.24996 12.9861 9.24996 13.1667C9.24996 13.3472 9.17357 13.4722 9.02079 13.5417L8.12496 13.9583L7.70829 14.8542C7.66663 14.9375 7.61107 14.9965 7.54163 15.0313C7.47218 15.066 7.40274 15.0833 7.33329 15.0833ZM16.5 13.4167C16.4305 13.4167 16.3611 13.3993 16.2916 13.3646C16.2222 13.3299 16.1666 13.2708 16.125 13.1875L15.7083 12.2917L14.8125 11.875C14.7291 11.8333 14.6701 11.7778 14.6354 11.7083C14.6007 11.6389 14.5833 11.5694 14.5833 11.5C14.5833 11.4306 14.6007 11.3611 14.6354 11.2917C14.6701 11.2222 14.7291 11.1667 14.8125 11.125L15.7083 10.7083L16.125 9.8125C16.1666 9.72917 16.2222 9.67014 16.2916 9.63542C16.3611 9.60069 16.4305 9.58333 16.5 9.58333C16.5694 9.58333 16.6388 9.60069 16.7083 9.63542C16.7777 9.67014 16.8333 9.72917 16.875 9.8125L17.2916 10.7083L18.1875 11.125C18.2708 11.1667 18.3298 11.2222 18.3645 11.2917C18.3993 11.3611 18.4166 11.4306 18.4166 11.5C18.4166 11.5694 18.3993 11.6389 18.3645 11.7083C18.3298 11.7778 18.2708 11.8333 18.1875 11.875L17.2916 12.2917L16.875 13.1875C16.8333 13.2708 16.7777 13.3299 16.7083 13.3646C16.6388 13.3993 16.5694 13.4167 16.5 13.4167ZM11.0833 10.9167C11.0138 10.9167 10.9444 10.8958 10.875 10.8542C10.8055 10.8125 10.75 10.75 10.7083 10.6667L10.1666 9.5L8.99996 8.95833C8.91663 8.91667 8.85413 8.86111 8.81246 8.79167C8.77079 8.72222 8.74996 8.65278 8.74996 8.58333C8.74996 8.51389 8.77079 8.44444 8.81246 8.375C8.85413 8.30556 8.91663 8.25 8.99996 8.20833L10.1666 7.66667L10.7083 6.5C10.75 6.41667 10.8055 6.35417 10.875 6.3125C10.9444 6.27083 11.0138 6.25 11.0833 6.25C11.1527 6.25 11.2222 6.27083 11.2916 6.3125C11.3611 6.35417 11.4166 6.41667 11.4583 6.5L12 7.66667L13.1666 8.20833C13.25 8.25 13.3125 8.30556 13.3541 8.375C13.3958 8.44444 13.4166 8.51389 13.4166 8.58333C13.4166 8.65278 13.3958 8.72222 13.3541 8.79167C13.3125 8.86111 13.25 8.91667 13.1666 8.95833L12 9.5L11.4583 10.6667C11.4166 10.75 11.3611 10.8125 11.2916 10.8542C11.2222 10.8958 11.1527 10.9167 11.0833 10.9167Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_337_827"
          x1="0"
          y1="0"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB72B"></stop>
          <stop offset="1" stopColor="#FFA01B"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Rect2