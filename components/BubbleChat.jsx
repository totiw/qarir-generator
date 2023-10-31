import Link from 'next/link'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

function BubbleChat() {
  return (
    <div className="flex flex-row fixed z-[99] bottom-10 right-5">
      <Link
        href="http://wa.me/+6281110014420?text=Hi%2C+I%27m+interested+to+know+about+QarirGenerator+Bootcamp%2C+My+Name+is....."
        target="_blank"
        className="relative bg-white w-14 h-14 shadow-lg rounded-xl flex justify-center items-center"
      >
        <p className="bg-orange-1 absolute -top-2 -right-1 flex justify-center items-center font-bold text-white text-sm w-6 h-6 rounded-full">
          1
        </p>
        <HiOutlineChatBubbleLeftRight size="1.5em" color="#FF9500" />
      </Link>
    </div>
  )
}

export default BubbleChat
