function People({ height, color }) {
  return (
    <svg
      width="auto"
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_5_4598"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <rect width="40" height="40" fill="#D9D9D9"></rect>
      </mask>
      <g mask="url(#mask0_5_4598)">
        <path
          d="M1.66669 33.3334V28.6667C1.66669 27.7223 1.90974 26.8542 2.39585 26.0626C2.88196 25.2709 3.5278 24.6667 4.33335 24.2501C6.05558 23.389 7.80558 22.7431 9.58335 22.3126C11.3611 21.882 13.1667 21.6667 15 21.6667C16.8334 21.6667 18.6389 21.882 20.4167 22.3126C22.1945 22.7431 23.9445 23.389 25.6667 24.2501C26.4722 24.6667 27.1181 25.2709 27.6042 26.0626C28.0903 26.8542 28.3334 27.7223 28.3334 28.6667V33.3334H1.66669ZM31.6667 33.3334V28.3334C31.6667 27.1112 31.3264 25.9376 30.6459 24.8126C29.9653 23.6876 29 22.7223 27.75 21.9167C29.1667 22.0834 30.5 22.3681 31.75 22.7709C33 23.1737 34.1667 23.6667 35.25 24.2501C36.25 24.8056 37.0139 25.4237 37.5417 26.1042C38.0695 26.7848 38.3334 27.5279 38.3334 28.3334V33.3334H31.6667ZM15 20.0001C13.1667 20.0001 11.5972 19.3473 10.2917 18.0417C8.98613 16.7362 8.33335 15.1667 8.33335 13.3334C8.33335 11.5001 8.98613 9.93064 10.2917 8.62508C11.5972 7.31953 13.1667 6.66675 15 6.66675C16.8334 6.66675 18.4028 7.31953 19.7084 8.62508C21.0139 9.93064 21.6667 11.5001 21.6667 13.3334C21.6667 15.1667 21.0139 16.7362 19.7084 18.0417C18.4028 19.3473 16.8334 20.0001 15 20.0001ZM31.6667 13.3334C31.6667 15.1667 31.0139 16.7362 29.7084 18.0417C28.4028 19.3473 26.8334 20.0001 25 20.0001C24.6945 20.0001 24.3056 19.9654 23.8334 19.8959C23.3611 19.8265 22.9722 19.7501 22.6667 19.6667C23.4167 18.7779 23.9931 17.7917 24.3959 16.7084C24.7986 15.6251 25 14.5001 25 13.3334C25 12.1667 24.7986 11.0417 24.3959 9.95841C23.9931 8.87508 23.4167 7.88897 22.6667 7.00008C23.0556 6.86119 23.4445 6.77091 23.8334 6.72925C24.2222 6.68758 24.6111 6.66675 25 6.66675C26.8334 6.66675 28.4028 7.31953 29.7084 8.62508C31.0139 9.93064 31.6667 11.5001 31.6667 13.3334Z"
          fill={color}
        ></path>
      </g>
    </svg>
  )
}

export default People
